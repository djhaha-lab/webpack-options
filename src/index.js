import User from "./app.vue";

console.log("webpack");
import { createApp } from "vue/dist/vue.esm-bundler";

const app = createApp(User);

app.mount("#app");
