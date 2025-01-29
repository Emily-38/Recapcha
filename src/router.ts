import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./pages/home.vue";
import QuestionnaireView from "./pages/Questionnaire.vue";
import BubbleView from "./pages/bubble.vue";
import HangmanGame from "./pages/hangmanGame.vue";
import result from "./pages/result.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/questionnaire", component: QuestionnaireView },
  { path: "/bubble", component: BubbleView},
  { path:"/pendu", component: HangmanGame},
  { path:"/result", component:result}
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
