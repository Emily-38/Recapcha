<script setup lang="ts">
interface PropsQuestion {
  title: string;
  nbrQuestion: number;

  label1: string;
  value1: string;
  id1: string;

  label2: string;
  value2: string;
  id2: string;
}

const props = defineProps<PropsQuestion>();
</script>

<template>
  <div class="divQuestion">
    <p class="questionTitle">Question : {{ title }}</p>

    <div>
      <span>
        <input
          type="checkbox"
          id="{{ id1 }}"
          name="{{ id1 }}"
          value="{{ value1 }}"
        />
        <label for="{{ id1 }}"> {{ label1 }}</label>
      </span>

      <span>
        <input
          type="checkbox"
          id="{{ id2 }}"
          name="{{ id2 }}"
          value="{{ value2 }}"
        />
        <label for="{{ id2 }}"> {{ label2 }}</label>
      </span>
    </div>

    <p class="pagination">Question {{ nbrQuestion }}/3</p>
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
}

.pagination {
  font-size: 20px;
}
</style>
