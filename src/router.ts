import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./pages/home.vue";
import QuestionnaireView from "./pages/Questionnaire.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/questionnaire", component: QuestionnaireView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
