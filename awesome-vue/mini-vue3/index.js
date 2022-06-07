const targetMap = new WeakMap();

function track(target, type, key) {
  // console.log(`触发 track -> target: ${target} type:${type} key:${key}`)

  // 1. 先基于 target 找到对应的 dep
  // 如果是第一次的话，那么就需要初始化
  // {
  //   target1: {//depsmap
  //     key:[effect1,effect2]
  //   }
  // }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    // 初始化 depsMap 的逻辑
    // depsMap = new Map()
    // targetMap.set(target, depsMap)
    // 上面两行可以简写成下面的
    targetMap.set(target, (depsMap = new Map()));
  }
  let deps = depsMap.get(key);
  if (!deps) {
    deps = new Set();
  }
  if (!deps.has(activeEffect) && activeEffect) {
    // 防止重复注册
    deps.add(activeEffect);
  }
  depsMap.set(key, deps);
}

// trigger
function trigger(target, type, key) {
  // console.log(`触发 trigger -> target:  type:${type} key:${key}`)
  // 从targetMap中找到触发的函数，执行他
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    // 没找到依赖
    return;
  }
  const deps = depsMap.get(key);
  if (!deps) {
    return;
  }
  deps.forEach((effectFn) => {
    if (effectFn.scheduler) {
      effectFn.scheduler();
    } else {
      effectFn();
    }
  });
}

const get = createGetter();
const set = createSetter();

function createGetter(shallow = false) {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    track(target, "get", key);
    /* if (isObject(res)) {
      // 值也是对象的话，需要嵌套调用reactive
      // res就是target[key]
      // 浅层代理，不需要嵌套
      return shallow ? res : reactive(res);
    } */
    return res;
  };
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    // 在触发 set 的时候进行触发依赖
    trigger(target, "set", key);
    return result;
  };
}

const mutableHandlers = {
  get,
  set,
};

function reactive(target) {
  if (typeof target !== "object") {
    console.warn(`reactive ${target} 必须是一个对象`);
    return target;
  }
  return new Proxy(target, mutableHandlers);
}

function effect(fn, options = {}) {
  // effect嵌套，通过队列管理
  const effectFn = () => {
    try {
      activeEffect = effectFn;
      //fn执行的时候，内部读取响应式数据的时候，就能在get配置里读取到activeEffect
      return fn();
    } finally {
      activeEffect = null;
    }
  };
  if (!options.lazy) {
    //没有配置lazy 直接执行
    effectFn();
  }
  effectFn.scheduler = options.scheduler; // 调度时机 watchEffect回用到
  return effectFn;
}

const ret = reactive({ num: 0 });
let val;
effect(() => {
  val = ret.num;
});

console.log(val);
ret.num++;
console.log(val);
ret.num = 10;
console.log(val);
