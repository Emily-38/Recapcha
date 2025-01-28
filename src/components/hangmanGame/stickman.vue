<script setup lang="ts"> 

let props = defineProps(['wrongGuesses']);

</script>

<template>
    <svg height="250" width="200">

        <line x1="60" y1="20" x2="140" y2="20"/>
        <line x1="140" y1="20" x2="140" y2="50"/>
        <line x1="60" y1="20" x2="60" y2="230"/>
        <line x1="20" y1="230" x2="100" y2="230"/>

        <circle v-if="props.wrongGuesses >= 1" cx="140" cy="70" r="20" />

        <line v-if="props.wrongGuesses >= 2" x1="140" y1="90" x2="140" y2="150"/>

        <line v-if="props.wrongGuesses >= 3" x1="140" y1="120" x2="120" y2="140"/>
        <line v-if="props.wrongGuesses >= 3" x1="140" y1="120" x2="160" y2="140"/>

        <line v-if="props.wrongGuesses >= 4" x1="140" y1="150" x2="120" y2="180"/>
        <line v-if="props.wrongGuesses >= 4" x1="140" y1="150" x2="160" y2="180"/>
    </svg>
</template>

<style scoped>
line,
circle {
    stroke: black;
    stroke-width: 2px;
    fill:black;
}

</style>