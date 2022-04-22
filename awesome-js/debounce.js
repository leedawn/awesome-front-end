// 1. 简易版
function debounce1(fn, time) {
  let timer = null;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, time);
  };
}

// 2. 可以立即执行版
function debounce2(fn, time, immediate) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(function () {
        timer = null;
      }, time);
      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, time);
    }
  };
}
