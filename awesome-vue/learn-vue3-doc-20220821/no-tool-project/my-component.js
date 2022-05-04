// my-component.js
import { defineComponent, h } from "vue";
export default defineComponent({
  data() {
    return { count: 0 };
  },
  //   template: `<div :disabled="">count is {{ count }}</div>`,
  render() {
    return h("h1", "hello");
  },
});
