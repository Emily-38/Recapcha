<script setup lang="ts"></script>

<template>
  <header>
    <img src="../../public/logo.png" alt="" />
    <a href="/">Se connecter</a>
  </header>
  <router-view></router-view>
</template>

<style scoped>
header {
  width: 90vw;
  display: flex;
  justify-content: space-between;
}

header a {
  background: #2e5077;
  color: white;
  padding: 10px 50px;
  margin: 5px;
  border-radius: 0;
  height: fit-content;
}
</style>
