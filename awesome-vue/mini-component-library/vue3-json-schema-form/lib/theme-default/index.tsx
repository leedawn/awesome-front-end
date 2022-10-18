import { defineComponent } from "vue";

export default defineComponent({
  name: "theme-default",
  setup(props, ctx) {
    return () => <div>hello,theme</div>;
  },
});
