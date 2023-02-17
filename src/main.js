import App from "./app.vue";
// import "./static/css/global.css";
import "windi.css";

import { createApp } from "vue/dist/vue.esm-bundler";

const app = createApp(App);

app.mount("#app");
