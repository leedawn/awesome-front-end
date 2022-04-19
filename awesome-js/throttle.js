// 1. 时间戳版本
function throttle(fn, time) {
  let prev = Date.now();
  return function (...args) {
    let context = this;
    let now = Date.now();
    if (now - prev >= time) {
      fn.apply(context, args);
      prev = Date.now();
    }
  };
}

// 2. 定时器版本
function throttle2(fn, time) {
  let timer = null;
  return function (...args) {
    let context = this;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, time);
    }
  };
}
