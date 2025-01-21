<script setup lang="ts">
import ComponentQuestion from "../components/Question.vue";

import { ref } from "vue";
const questions = [
  {
    name:"question 1",
    title: "Que fait un chat quand il est content ?",
    label1: "Il ronronne",
    value1: true,
    id1: "1",
    label2: "Il aboie",
    value2: false,
    id2: "2",
  },
  {
    name:"question 2",
    title: "test ?",
    label1: "Il test",
    value1: true,
    id1: "3",
    label2: "Il test pas",
    value2: false,
    id2: "4",
  },
  {
    name:"question 3",
    title: "Pas content ?",
    label1: "content",
    value1: false,
    id1: "5",
    label2: "pas content",
    value2: true,
    id2: "6",
  },
  {
    name:"question 3",
    title: "react ou vue ?",
    label1: "react",
    value1: true,
    id1: "7",
    label2: "vue",
    value2: false,
    id2: "8",
  },
];


const submit =()=>{
 console.log('fini')
}
</script>

<template>
  <form action="" @submit.prevent="submit">
    <ComponentQuestion 
    :questions="questions"
    />
 
    <br />

    
  </form>
</template>

<style></style>
