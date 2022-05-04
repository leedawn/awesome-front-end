import { defineComponent } from "vue";

export default defineComponent({
  name: "stringField",
  setup(props, ctx) {
    return () => <div>this is string field</div>;
  },
});
