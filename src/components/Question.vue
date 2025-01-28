<script setup lang="ts">
import { ref } from "vue";
import ComponentButton from "./Button.vue";

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
  <div class="question-container">
    <div
      v-for="(item, index) in random"
      :key="index"
      style="display: flex; flex-direction: row"
    >
      <Transition name="slide">
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
      </Transition>
    </div>
    <Transition name="fade">
      <div v-if="pagination === 4" class="btnValider">
        <ComponentButton
          title="Valider"
          type="submit"
          id="validerQuestionnaire"
          @click="addlocalstorage"
        />
      </div>
    </Transition>
  </div>
</template>

<style>
.question-container {
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 20px;
}

.divQuestion {
  position: absolute;
  top: 0;
  left: 0px;
  right: 0;
  background-color: #4da1a938;
  padding: 30px 60px;
  color: black;
  border-radius: 12px;
  width: fit-content;
  min-width: 500px;
  margin: 0 auto;
  transition: transform 1s ease-in-out, opacity 1s ease;
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

.btnValider {
  transition: transform 1s ease-in-out, opacity 1s ease;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease-in-out, opacity 1s ease;
}

.slide-enter-from {
  transform: translateX(100%); /* Arrive depuis la droite */
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%); /* Part vers la gauche */
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
