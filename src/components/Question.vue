<script setup lang="ts">
import { ref } from "vue";
import ComponentButton from "./Button.vue";
import { submitReponse } from "../controllers/JeuController";
interface Tableau {
  questions: Question[];
}

interface Question {
  name: string;
  title: string;

  label1: string;
  value1: boolean;
  id1: string;

  label2: string;
  value2: boolean;
  id2: string;
}

const props = defineProps<Tableau>();
let random = props.questions.sort(() => Math.random() - 0.5);
random = random.slice(0, 3);
const pagination = ref(1);
const reponse = ref<boolean[]>([]);
const incrementation = (value: boolean) => {
  if (pagination.value <= 3) reponse.value.push(value);
  pagination.value++;
};

const emits = defineEmits(["submitReponse", "reponses"]);

const addlocalstorage = () => {
  // submitReponse(reponse.value);
  // localStorage.setItem('reponse',JSON.stringify(reponse.value))
  emits("submitReponse", reponse.value);
};
</script>

<template>
  <div v-for="(item, index) in random" :key="index">
    <div class="divQuestion" v-if="index + 1 === pagination">
      <p class="questionTitle">Question : {{ item.title }}</p>

      <div>
        <span>
          <input
            type="radio"
            :id="item.id1"
            :name="item.name"
            :value="item.value1"
            @click="incrementation(item.value1)"
          />
          <label :for="item.id1"> {{ item.label1 }}</label>
        </span>

        <span>
          <input
            type="radio"
            :id="item.id2"
            :name="item.name"
            :value="item.value2"
            @click="incrementation(item.value2)"
          />
          <label :for="item.id2"> {{ item.label2 }}</label>
        </span>
      </div>

      <p class="pagination">Question {{ pagination }}/3</p>
    </div>
  </div>
  <div v-if="pagination === 4">
    <ComponentButton
      title="Valider"
      type="submit"
      id="validerQuestionnaire"
      @click="addlocalstorage"
    />
  </div>
</template>

<style>
.divQuestion {
  background-color: #4da1a938;
  padding: 30px 60px;
  color: black;
  border-radius: 12px;
}

.questionTitle {
  font-size: 25px;
  margin: 5px 5px 30px;
}

.divQuestion div {
  margin: 70px 20px;
  display: flex;
  justify-content: space-between;
}

.divQuestion span {
  background-color: white;
  padding: 5px 20px 5px 10px;

  border-radius: 12px;
  border: 1px solid black;

  min-width: 100px;
  text-align: left;
}

.pagination {
  font-size: 20px;
}
</style>
