import { defineComponent } from "vue";

export default defineComponent({
  name: "test-hello",
  props: {
    msg: String,
  },
  setup(props, ctx) {
    return () => <div>{props.msg}</div>;
  },
});
