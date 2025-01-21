<script setup lang="ts">
import ComponentQuestion from "../components/Question.vue";

const questions = [
  {
    title: "Que fait un chat quand il est content ?",
    nbrQuestion: "2",
    label1: "Il ronronne",
    value1: "value1",
    id1: "1",
    label2: "Il aboie",
    value2: "value2",
    id2: "2",
  },
];
</script>

<template>
  <form action="">
    <ComponentQuestion
      title="Que fait un chat quand il est content ?"
      nbrQuestion="2"
      label1="Il ronronne"
      value1="value1"
      id1="1"
      label2="Il aboie"
      value2="value2"
      id2="2"
    />
    <br />

    <ComponentButton title="Valider" type="submit" id="validerQuestionnaire" />
  </form>
</template>

<style></style>
