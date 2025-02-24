<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

import GuessableWord from "../components/hangmanGame/guessableWord.vue";
import WrongLetters from "../components/hangmanGame/wrongLetters.vue";
import Stickman from "../components/hangmanGame/stickman.vue";
import ComponentInput from "../components/Input.vue";
import ComponentButton from "../components/Button.vue";
import { submitReponse } from "../controllers/JeuController";


const words = ['CHAT', 'TABLE', 'SOLEIL', 'POMME', 'ROBOT', 'LILAS'];

let keyIndex = ref(0);

const answerData = ref('')

let guesses : string[] = [];
let wrongGuesses : string[] = [];
let correctGuesses : string[] = []; 
//refacto guessable word to take this variable instead of calculating it?

let chosenWord: string = "";

onBeforeMount(() => {
   chosenWord = words[Math.floor(Math.random() * words.length)]
   guesses.push(chosenWord.split('')[0]); //having this and a push of [-1] would reveal the first and last letter BUT also repeat letters for ex word 'LILAS' would show as L_L__ on init
   correctGuesses.push(chosenWord.split('')[0]);
});


const sendAnswer = () => {
    answerData.value
    .toUpperCase()
    .split('')
    .forEach(letter => {
        guesses.push(letter);
        if( chosenWord.split('').includes(letter) == false ) {
            wrongGuesses.push(letter);
        } else { 
            correctGuesses.push(letter);
        }
    });
  //refactorable? it looks ugly :(
  guesses = removeDupes(guesses);
  wrongGuesses = removeDupes(wrongGuesses);
  correctGuesses = removeDupes(correctGuesses);

  //redirection with route passed in arg, TOUPDATE once result page is provided with correct names
  if (wrongGuesses.length >= 4) {
    endGame("loss");
    submitReponse(false);
  } else if (
    correctGuesses.length == [...new Set(chosenWord.split(""))].length
  ) {
    endGame("win");
    submitReponse(true);
  }

  keyIndex.value++;
  answerData.value = '';

  return false;
};

const removeDupes = (array: string[]) => {
  return [...new Set(array)];
};

const endGame = (path: string) => {
  //redirection à fournir
  console.log("its a", path);
};
</script>

<template>
  <section>
    <Stickman :key="keyIndex" :wrong-guesses="wrongGuesses.length"></Stickman>
    <GuessableWord
      :key="keyIndex"
      :guessed-letters="guesses"
      :correct-letters="chosenWord.split('')"
    ></GuessableWord>
    <WrongLetters :key="keyIndex" :wrong-guesses="wrongGuesses"></WrongLetters>
    <div>Vies restantes : {{ 4 - wrongGuesses.length }}</div>
    <form @submit.prevent="sendAnswer">
        <ComponentInput 
        placeholder="J, Banane..." 
        type="text" :value="answerData" 
        @input="answerData = $event.target.value" />
        <ComponentButton title="Valider" type="submit" id="valider" />
    </form>
  </section>


</template>

<style scoped>
section,
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

section {
  margin-left: 25vw;
  margin-right: 25vw;
  padding: 5vh 0;
  background-color: #4da1a938;
  border-radius: 12px;
  align-items: center;
}

section div {
    margin-bottom: 2vh;
}

</style>
