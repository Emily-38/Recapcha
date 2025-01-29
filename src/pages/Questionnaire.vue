<script setup lang="ts">
import ComponentQuestion from "../components/Question.vue";
import { submitReponse } from "../controllers/JeuController";

// import { ref } from "vue";
const questions = [
  {
    name: "question 1",
    title: "Que fait un chat quand il est content ?",
    label1: "Il ronronne",
    value1: true,
    id1: "1",
    label2: "Il aboie",
    value2: false,
    id2: "2",
  },
  {
    name: "question 2",
    title: "Quel est le nombre de pattes d’un chat qui fait un high-five ?",
    label1: "4",
    value1: true,
    id1: "3",
    label2: "5",
    value2: false,
    id2: "4",
  },
  {
    name: "question 3",
    title: "Comment s’appelle un bébé chat ?",
    label1: "Un chatounet",
    value1: false,
    id1: "5",
    label2: "Un chaton",
    value2: true,
    id2: "6",
  },
  {
    name: "question 4",
    title: "Que fait un chat quand il est content ?",
    label1: "Il aboie",
    value1: false,
    id1: "7",
    label2: "Il ronronne",
    value2: true,
    id2: "8",
  },
  {
    name: "question 5",
    title: "Quelle est la meilleure activité d’un chat ?",
    label1: "Jouer au tennis",
    value1: false,
    id1: "9",
    label2: "Dormir",
    value2: true,
    id2: "10",
  },
  {
    name: "question 6",
    title: "Quelle est la nourriture préférée des chats ?",
    label1: "Poisson",
    value1: true,
    id1: "11",
    label2: "Spaghetti",
    value2: false,
    id2: "12",
  },
];

const saveSubmitReponse = (reponse: boolean[]) => {
  // annalyser réponse pour renvoyer un seul bool

  submitReponse(true);
};
</script>

<template>
  <form action="" @submit.prevent="">
    <ComponentQuestion
      :questions="questions"
      @submitReponse="saveSubmitReponse"
    />

    <br />
  </form>
</template>

<style></style>
