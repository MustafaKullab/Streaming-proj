import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/bootstrap-icons.min.css";
import "@/assets/js/bootstrap.bundle.min.js";
import "@/assets/css/main.css";
import "@/assets/css/normalize.css";
import "@/assets/css/all.min.css";

import "animate.css";

createApp(App).use(router).mount("#app");
