<script setup lang="ts"></script>

<template>
  <header>
    <img src="../../public/logo.png" alt="" />
    <a href="/">Se connecter</a>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style >
body {
  background-color:#F6F4F0 ;
  color: black;
}

header {
  width: 95vw;
  padding:2vw;
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

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
