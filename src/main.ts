import "./style.css";
import "vue3-carousel/dist/carousel.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
