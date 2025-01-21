<script setup lang="ts">

    import { reactive } from 'vue';
    import ComponentInput from '../components/Input.vue'
    import ComponentButton from "../components/Button.vue";
    interface Formulaire {
        email:string,
        name:string,
        firstname: string ,
        mdp: string,
        confirmmdp: string
    }

    const formData = reactive<Formulaire>({
        email: '',
        name: '',
        firstname: '',
        mdp: '',
        confirmmdp: ''
    })

    const updateField = (field: keyof Formulaire, value: string) => {
    formData[field] = value;
    };

    const submit=() =>{
        console.log('Données du formulaire:', JSON.stringify(formData));
        localStorage.setItem('personne',JSON.stringify(formData))
    }
</script>

<template>
    <h1 class="title">Inscription</h1>
    <form class="inscription" @submit.prevent="submit" >
        <ComponentInput placeholder="Email" type="email"  @typing="updateField('email', $event)"  />
        <ComponentInput placeholder="Nom" type="text"  @typing="updateField('name', $event)" />
        <ComponentInput placeholder="Prenom" type="text"  @typing="updateField('firstname', $event)" />
        <ComponentInput placeholder="Mot de passe" type="password" @typing="updateField('mdp', $event)"/>
        <ComponentInput placeholder="Confirme mot de passe" type="password" @typing="updateField('confirmmdp', $event)"/>
        <RouterLink to="/questionnaire" @click="submit">
        <ComponentButton title="Valider" type="submit" id="valider" />
        </RouterLink>
    </form>
</template>

<style scoped>
    .title { 
        color:black;
    
    }
    
    .inscription {
        display: flex ;
        flex-direction: column;
        gap: 38px;
    
    }

</style>
