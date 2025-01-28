<script setup lang="ts">
import { reactive } from "vue";
import ComponentInput from "../components/Input.vue";
import ComponentButton from "../components/Button.vue";
import { submitForm } from "../controllers/HomeController.ts";
import type { Formulaire } from "../Types/Formulaire.ts";

const formData = reactive<Formulaire>({
  email: "",
  name: "",
  firstname: "",
  mdp: "",
  confirmmdp: "",
  isHuman: false,
});

// const updateField = (field: keyof Formulaire, value: string) => {
//   formData[field] = value;
// };

// field peut être n'importe quelle clé de l'interface Formulaire sauf isHuman
const updateField = (
  field: keyof Omit<Formulaire, "isHuman">,
  value: string
) => {
  if (typeof value === "string") {
    formData[field] = value;
  }
};

const submit = () => {
  submitForm(formData);
};
</script>

<template>
  <h1 class="title">Inscription</h1>
  <form class="inscription" @submit.prevent="submit">
    <ComponentInput
      placeholder="Email"
      type="email"
      @typing="updateField('email', $event)"
    />
    <ComponentInput
      placeholder="Nom"
      type="text"
      @typing="updateField('name', $event)"
    />
    <ComponentInput
      placeholder="Prenom"
      type="text"
      @typing="updateField('firstname', $event)"
    />
    <ComponentInput
      placeholder="Mot de passe"
      type="password"
      @typing="updateField('mdp', $event)"
    />
    <ComponentInput
      placeholder="Confirme mot de passe"
      type="password"
      @typing="updateField('confirmmdp', $event)"
    />
    <RouterLink to="/questionnaire" @click="submit">
      <ComponentButton title="Valider" type="submit" id="valider" />
    </RouterLink>
  </form>
</template>

<style scoped>
.title {
  color: black;
}

.inscription {
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: fit-content;
  margin: 0 auto;
}
</style>
