import { defineComponent, h, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const name = ref("leon");
    onMounted(() => {
      console.log("wow");
    });
    return () => h("h1", "hello");
  },
});
