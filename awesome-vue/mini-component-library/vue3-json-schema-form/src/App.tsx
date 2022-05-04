import { ref } from "vue";

export default {
  setup() {
    const count = ref(20);
    return () => <div>{count.value}</div>;
  },
};
