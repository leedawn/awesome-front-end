// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-bundler.js";
import SmartUI from "./entry";

createApp({
  template: `
<div>
<SButton color='black' icon="search">按钮</SButton>
<SButton color='gray' icon="edit">按钮</SButton>
<SButton color='red' icon="check">按钮</SButton>
</div>
`,
})
  .use(SmartUI)
  .mount("#app");
