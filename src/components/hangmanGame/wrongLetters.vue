<script setup lang="ts">

let props = defineProps(['wrongGuesses']);

</script>

<template>
    <div>
        <p v-show="props.wrongGuesses.length">Mauvaises lettres : </p>
        <span v-for="letter in props.wrongGuesses">
            <strong>{{ letter }}</strong>
        </span>
    </div>
</template>

<style scoped>
div {
    background-color: white;
    border-radius: 12px;
    padding: 0 2vw 1vh;
    margin-bottom: 0;
}

span {
    padding: 0;
}
</style>