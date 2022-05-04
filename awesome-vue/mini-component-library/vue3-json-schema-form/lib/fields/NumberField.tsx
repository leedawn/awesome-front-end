import { defineComponent } from "vue";

export default defineComponent({
  name: "numberField",
  setup(props, ctx) {
    return () => <div>this is number field</div>;
  },
});
