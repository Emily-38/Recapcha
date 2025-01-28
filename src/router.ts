import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./pages/home.vue";
import QuestionnaireView from "./pages/Questionnaire.vue";
import BubbleView from "./pages/bubble.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/questionnaire", component: QuestionnaireView },
  { path: "/bubble", component: BubbleView}

];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
