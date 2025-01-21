import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import Questionnaire from "./Questionnaire.vue";
import { router } from "./router";

createApp(App).use(router).mount("#app");

// createApp(Questionnaire).use(router).mount("#app");
