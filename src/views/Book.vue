<script setup>
import markdownIt from "markdown-it";
import { ref, watch, watchEffect } from "vue";

const props = defineProps(["bookInfo"]);
const emit = defineEmits(["resetBookInfo"]);

const bookInfo = props.bookInfo;

watch(
  () => bookInfo.bookName,
  async (name) => {
    await getBookContent(name);
  }
);
// getBookContent("");
const bookContent = ref("");
const getBookContent = async (name) => {
  if (!name) {
    bookContent.value = "";
    return;
  }
  let res = await fetch(`/markdown/${name}.md`);
  let file = await res.blob();
  let reader = new FileReader();
  reader.readAsText(file);
  let content;
  let md = markdownIt();
  await new Promise((resolve) => {
    reader.onload = function () {
      content = reader.result;
      resolve();
    };
  });
  bookContent.value = md.render(content);
};

const vListenslide = {
  mounted(el) {
    el.addEventListener("contextmenu", function (event) {
      // let { wheelDeltaY } = event;
      // if (wheelDeltaY < 0) {

      // }
      event.preventDefault();

      let bookInfo = {
        isOpenBook: false,
        bookName: null,
      };
      emit("resetBookInfo", bookInfo);
    });
  },
  onUnmounted(el) {
    el.removeEventListener("contextmenu");
  },
};
</script>

<template>
  <div
    v-show="bookInfo.isOpenBook"
    v-listenslide
    class="bg-[#34393f] text-[#abb2bf]"
  >
    <div
      class="flex flex-col flex-wrap content-start overflow-hidden w-10000vw h-5000vh transform translate-x-[-50%] translate-y-[-50%] scale-50 children:w-50vw flex-grow-0"
      v-html="bookContent ?? '请传入书名'"
    ></div>
  </div>
</template>

<style scoped></style>
