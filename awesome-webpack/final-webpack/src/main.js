import "./assets/index.css";
import "./assets/index.less";

console.log("hello webpack!");
const div = document.createElement("div");
const input = document.createElement("input");
const img = document.createElement("img");
input.setAttribute("placeholder", "input");
img.setAttribute("src", "./assets/imgs/shenTest.jpeg"); // 使用图片失败
const body = document.querySelector("body");
body.appendChild(div);
body.appendChild(input);
body.appendChild(img);

let map = new Map();     // 使用 es6 语法没有什么问题，不知道为什么需要转换
map.set("name", "leon");
for (let [key, value] of map) {
  console.log(value);
}
