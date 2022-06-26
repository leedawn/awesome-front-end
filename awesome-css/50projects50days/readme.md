# 1. expanding-cards

点击图片后，通过 flex 属性提高该图片的宽度占比。

# 2. progress-steps

该功能包括多个步骤序号，2 个连接线，前进后退按钮。点击按钮后，如果不能继续点击则将按钮 disabled。另外点击后激活对应的序号，计算出激活的连接线占整个连接线的比重并覆盖默认的连接线。

# 4. hidden-search-widget

通过按钮控制输入框的宽度，再给输入框增加过渡效果

# 5. blurry-loading

通过 setInternal 更新进度的文案和透明度，并更新背景图的模糊程度

# 6. scroll-animation
实现的比较复杂，考虑到增加删除 box 的情况，临界点没有很好的控制。此后可以直接通过移动元素的方式来实现。

# 7. split-landing-page
比参考答案更好。通过 flex 进行控制，鼠标 hover 的区域 flex 比重更大。

# 8. form-wave
实现的比较复杂，没有通过 css 或者 js 进行整合。主要是针对 input 添加 focus 和 blur 事件，focus 后标题往上移动，每个元素添加延迟时间，达到预期的动画效果。