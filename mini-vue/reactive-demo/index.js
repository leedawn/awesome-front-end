// 1. 使用 Object.defineProperty
let obj = {},
  count = 1;

const getDouble = (n) => n * 2;
let double = getDouble(count);

Object.defineProperty(obj, "count", {
  get() {
    return count;
  },
  set(val) {
    count = val;
    double = getDouble(count);
  },
});
console.log(double);
obj.count = 2;
console.log(double);

// 2. 使用 proxy
let obj = { count: 1 };
const getDouble = (n) => n * 2;
let double = getDouble(obj.count);

let proxy = new Proxy(obj, {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    if (prop === "count") {
      double = getDouble(value);
    }
  },
  deleteProperty(target, prop) {
    delete target[prop];
    if (prop === "count") {
      double = NaN;
    }
  },
});
console.log(proxy.count, double);
proxy.count = 2;
console.log(proxy.count, double);
delete proxy.count;
console.log(proxy.count, double);

// 3. 使用对象的 set 和 get
const getDouble = (n) => n * 2;

let _value = 1;
let double = getDouble(_value);
let count = {
  get value() {
    return _value;
  },
  set value(val) {
    _value = val;
    double = getDouble(val);
  },
};
console.log(count.value, double);
count.value = 2;
console.log(count.value, double);
