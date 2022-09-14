import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 5,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    doublePlusOne() {
      this.counter * 2 + 1;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
