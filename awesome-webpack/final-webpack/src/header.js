import Vue from "vue";
import App from "./app";

const div = document.createElement("div");
div.setAttribute("id", "app");
const body = document.querySelector("body");
body.appendChild(div);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
