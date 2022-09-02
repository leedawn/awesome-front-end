// my-component.js
export default {
  data() {
    return { count: 0 };
  },
  template: `<div :disabled="">count is {{ count }}</div>`,
};
