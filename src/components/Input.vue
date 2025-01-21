<script setup lang="ts">
    interface Props {
        type: string
        placeholder: string
    }
    const props = defineProps<Props>()
    const emits = defineEmits(['typing'])

    function onInput(e: Event) {
        const value = (e.target as HTMLInputElement).value
        emits('typing', value)
    }
</script>

<template>

    <input class="style" :type="props.type" :placeholder="props.placeholder" @input="onInput" >

</template>

<style>
    .style {
        border-radius: 12px;
        border: 1px solid black;
        padding: 20px;
        width: 300px;
    }
</style>