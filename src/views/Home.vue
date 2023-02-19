<template>
  <div class="grid-container gap-5px p-10px bg-gray-300">
    <div
      class="flex justify-center items-center bg-green-500 h-{100%} text-white text-2xl font-700"
      v-for="(book, key) in books"
      v-listenslide="book"
      :key="key"
    >
      <span>{{ book.name }}</span>
    </div>
    <Teleport to="body">
      <Book
        :bookInfo="bookInfo"
        @resetBookInfo="resetBookInfo"
        class="fixed z-10 w-100vw h-100vh"
      ></Book>
    </Teleport>
  </div>
</template>

<script setup>
import Book from "@/views/Book.vue";
import { ref, reactive } from "vue";

const books = ref([]);
for (let i = 0; i < 8; i++) {
  books.value.push({
    name: "vue",
  });
}

const bookInfo = reactive({
  isOpenBook: false,
  bookName: null,
});

const resetBookInfo = ({ isOpenBook, bookName }) => {
  bookInfo.isOpenBook = isOpenBook;
  bookInfo.bookName = bookName;
};
// const isOpenBook = ref(false);

// document.querySelector('.home').addEventListener
const vListenslide = {
  mounted(el, binding) {
    let book = binding.value;
    el.addEventListener("click", function (event) {
      // let { wheelDeltaY } = event;
      // if (wheelDeltaY > 0) {

      // }
      bookInfo.isOpenBook = true;
      bookInfo.bookName = book.name;
    });
  },
  onUnmounted(el) {
    el.removeEventListener("click");
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  /* grid-template-areas:
    "grid0 grid1 grid2 grid3 grid4 grid5 "
    "grid6 grid7 grid8 grid9 grid10  ."; */
  grid-auto-flow: row;

  height: 100vh;
}
</style>
