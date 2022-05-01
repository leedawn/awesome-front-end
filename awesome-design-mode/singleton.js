/* 单例模式（Singleton Pattern）
 * 1. 创建型模式。这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。
 * 2. 应用：创建一个全局弹窗，并且 Vuex 全局态管理库也应用单例模式的思想
 */

// 1. es5
function Singleton1(name) {
  this.name = name;
}
Singleton1.prototype.getName = function () {
  console.log(this.name);
};
Singleton1.getInstance = (function () {
  let instance = null;
  return function (name) {
    if (instance === null) {
      instance = new Singleton1(name);
    }
    return instance;
  };
})();
let a = Singleton1.getInstance("leon");
let b = Singleton1.getInstance("lee");
console.log(a === b);

// 2. es6
class Singleton2 {
  static instance = null;
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
  static getInstance(name) {
    if (this.instance === null) {
      this.instance = new Singleton2(name);
    }
    return this.instance;
  }
}
const p1 = Singleton2.getInstance("leon");
const p2 = Singleton2.getInstance("lee");
console.log(p1 === p2); // true
