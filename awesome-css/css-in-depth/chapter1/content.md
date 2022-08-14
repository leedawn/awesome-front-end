# 1. 层叠
1. css 本质上就是声明规则，即在各种条件下，我们希望产生特定的效果
2. 层叠就是解决多个规则集属性冲突的规则，是 CSS 语言的基础。当声明冲突时，层叠会依据三种条件解决冲突：
    - 样式表的来源：样式从哪里来，包括你的样式和浏览器默认样式等
    - 选择器的优先级：哪些选择器比另一些选择器优先级更高
    - 源码顺序：样式在样式表里的声明顺序
3. 常用术语
```css
body {         // 规则包括选择器和声明块。body 是选择器，大括号里面是声明块
    color:black;    // 声明由属性和值组成
    font-size:14px;
}
// 附： @ 规则是指使用 @ 符号开头的语法，比如 @import 规则
```
4. 样式表的来源：作者的！important 样式 > 作者的样式 > 用户代理样式
5. 选择的优先级：行内样式 > ID 选择器 > 类选择器，伪类选择器（：hover），属性选择器（[type='input']） > 标签选择器 > 通用选择器（*），组合选择器（>）
6. 源码顺序：两个声明的来源和优先级相同，其中一个声明在样式表中出现较晚，则该声明胜出。
    - 链接样式的顺序（LoVeHAte）：link，visited，hover，active
7. 经验规则：尽量不使用 ID，尽量不使用 !important，开发 Javascript 模块尽量不使用行内样式

# 2. 继承
1. 如果一个元素的某个属性没有层叠值，则可能会继承某个祖先元素的值。
2. 并不是所有的属性都能被继承，能够继承的属性有文本相关的属性（color,font 等），列表属性(list-style 等)，表格的属性(border-spacing 等)等

# 3. 特殊值
1. 使用 inherit 关键字可以使用继承代替一个层叠值。
```html
<div id="app">
  标题
  <span>说明</span>
</div>
```
```css
span {
  color:red
}
#app{
  color:black;
  span{
    color:inherit; // 最终显示的是黑色
  }
}
```
2. initial 关键字可以撤销作用于某个元素的样式

# 4. 简写属性
1. 简写属性会默默覆盖其他样式
```html
<div id="app">
  标题
</div>
```
```css
div {
  font-weight:bold;
}
#app{
  font:12px sans-serif; // font 包含 font-weight:normal，因此字体不会加粗
}
```
2. 简写值的顺序
```
padding: 10px 15px 0 5px; // 上右下左

box-shadow: 10px 2px #6f9090; // 向右向下
```