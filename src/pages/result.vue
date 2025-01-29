<script setup lang="ts">
import type { Formulaire } from '../Types/Formulaire';
import ComponentButton from "../components/Button.vue";
import { router } from '../router';

const userData = localStorage.getItem('user')!
const user:Formulaire=JSON.parse(userData)
const redirectHome= ()=>{
router.push('/')
}

</script>

<template>
<h1> Félicitation ! <br/>
    Vous n'êtes pas un robot ! </h1>
<div class="background">
 <p>Nom : {{ user.name }}</p>
 <p>Prenom : {{ user.firstname }} </p>
 <p>Email: {{ user.email }}</p>
</div>
<ComponentButton
        title="Retour au site"
        type="submit"
        id="returnHome"
        @click="redirectHome()"
      />

</template>

<style scoped>
.background {
    margin: 88px auto 88px auto;
    padding: 20px;
    text-align: left;
    width: 500px;
    border-radius: 13px;
    background-color: #4da1a938;
}

</style>