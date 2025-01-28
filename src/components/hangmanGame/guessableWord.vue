<script setup lang="ts">

let props = defineProps([
    'guessedLetters',
    'correctLetters'
])

</script>

<template>
    <div  class="word-container">
        <span v-for="letter in props.correctLetters">
            {{ props.guessedLetters.includes(letter) ? letter : '_' }}
        </span>
    </div>
</template>

<style scoped>
.word-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    font-size: 50px;
}
</style>