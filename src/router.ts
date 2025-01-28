import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./pages/home.vue";
import QuestionnaireView from "./pages/Questionnaire.vue";
import HangmanGame from "./pages/hangmanGame.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/questionnaire", component: QuestionnaireView },
  { path:"/pendu", component: HangmanGame},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
