<template>
  <div>{{ count }} *2 = {{ double }}</div>
  <button @click="add">add</button>
  <button @click="asyncAdd">async add</button>
  {{ name }}
</template>

<script setup>
import { computed, inject } from "vue";
import { useStore } from "./store/gvuex";
let store = useStore();
let count = computed(() => store.state.count);
let double = computed(() => store.getters.double);
let name = inject("name");

function asyncAdd() {
  const result = store.dispatch("asyncAdd");
  console.log(result);
}
function add() {
  store.commit("add");
}
</script>
