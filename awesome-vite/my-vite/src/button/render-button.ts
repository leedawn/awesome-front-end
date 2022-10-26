import { defineComponent, h } from "vue";

export default defineComponent({
  name: "renderButton",
  render() {
    return h("button", null, "RenderButton");
  },
});
