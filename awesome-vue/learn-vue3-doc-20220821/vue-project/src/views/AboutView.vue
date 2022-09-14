<template>
  <div>{{ counter }}</div>
  <h1>{{ store.doubleCount }}</h1>
  <h1>{{ store.doublePlusOne }}</h1>
  <a-button type="primary" @click="counter++">add</a-button>
  <a-button type="primary" @click="reset()">reset</a-button>
  <a-button type="primary" @click="patch">patch</a-button>
  <a-button type="primary" @click="replace">replace</a-button>
</template>

<script setup lang="tsx">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();
console.log("🚀 ~ file: AboutView.vue ~ line 12 ~ store", store);
const { counter } = storeToRefs(store);

const reset = () => store.$reset();
const patch = () => {
  store.$patch((state) => {
    state.counter = 1110;
  });
};
const replace = () => {
  store.$state = { counter: 666 };
};
store.$subscribe((mutation, state) =>
  localStorage.setItem("store", JSON.stringify(state))
);
</script>

<style>
button {
  width: 80px;
}
</style>
