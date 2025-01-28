<script setup lang="ts">

let props = defineProps(['wrongGuesses']);

</script>

<template>
    <div>
        <p v-show="props.wrongGuesses.length">Mauvaises lettres : </p>
        <span v-for="letter in props.wrongGuesses">
            {{ letter }}
        </span>
    </div>
</template>

<style scoped>
span {
    padding: 0;
}
</style>