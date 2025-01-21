<script lang="ts" setup>
interface Props {
  title: string;
  type: string;
  id: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button class="btnSubmit" type="{{ type }}" id="{{ id }}">{{ title }}</button>
</template>

<style scoped>
.btnSubmit {
  background: #2e5077;
  color: white;
  padding: 10px 100px;
  margin: 5px;
  border-radius: 0;
}
</style>
