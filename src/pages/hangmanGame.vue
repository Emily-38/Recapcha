<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue';

import GuessableWord from '../components/hangmanGame/guessableWord.vue';
import WrongLetters from '../components/hangmanGame/wrongLetters.vue';
import Stickman from '../components/hangmanGame/stickman.vue';
import ComponentInput from '../components/Input.vue';
import ComponentButton from '../components/Button.vue';

interface AnswerForm {
    answer: string;
};

const words = ['CHAT', 'TABLE', 'SOLEIL', 'POMME', 'ROBOT', 'LILAS'];
const answerData = reactive<AnswerForm>({
    answer: '',
});

let keyIndex = ref(0);

let guesses : string[] = [];
let wrongGuesses : string[] = [];
let correctGuesses : string[] = []; 
//refacto guessable word to take this variable instead of calculating it?

let chosenWord : string = '';

onBeforeMount(() => {
   chosenWord = words[Math.floor(Math.random() * words.length)]
   console.log(chosenWord);
   guesses.push(chosenWord.split('')[0]); //having this and a push of [-1] would reveal the first and last letter BUT also repeat letters for ex word 'LILAS' would show as L_L__ on init
});

const updateField = (field: keyof AnswerForm, value: string) => {
    answerData[field] = value;
};

const sendAnswer = () => {
    answerData.answer.toUpperCase().split('').forEach(letter => {
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
    if( wrongGuesses.length >= 4  ) {
        endGame('loss');
    } else if (correctGuesses.length == [...new Set(chosenWord.split(''))].length) {
        endGame('win');
    }

    keyIndex.value++;
    
    //trying to find how to reset the form cleanly after each sendAnswer :(
    answerData.answer = '';


    return false;
};

const removeDupes = (array : string[]) => {
    return [...new Set(array)];
};

const endGame = ( path : string ) => {
    //redirection à fournir
    console.log('its a', path);
}

</script>

<template>

    <section>
        <Stickman :key="keyIndex" :wrong-guesses="wrongGuesses.length"></Stickman>
        <GuessableWord :key="keyIndex" :guessed-letters="guesses" :correct-letters="chosenWord.split('')"></GuessableWord>
        <WrongLetters :key="keyIndex" :wrong-guesses="wrongGuesses"></WrongLetters>
        <div> Vies restantes : {{ 4 - wrongGuesses.length }}</div>
    </section>

    <form @submit.prevent="sendAnswer">
        <ComponentInput placeholder="J, Banane..." type="text" @typing="updateField('answer', $event)" />
        <ComponentButton title="Valider" type="submit" id="valider" />
    </form>

</template>

<style scoped>
section,
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
</style>