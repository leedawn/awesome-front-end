# 层叠，优先级和继承
### 1. 层叠
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

### 2. 继承
1. 如果一个元素的某个属性没有层叠值，则可能会继承某个祖先元素的值。
2. 并不是所有的属性都能被继承，能够继承的属性有文本相关的属性（color,font 等），列表属性(list-style 等)，表格的属性(border-spacing 等)等

### 3. 特殊值
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

### 4. 简写属性
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

# 相对单位
### 1. 相对值的好处
1. 响应性： CSS 的样式可以根据浏览器窗口大小有不同的响应

### 2. em 和 rem
1. em 是相对长度单位，元素其他属性的 em 等于当前元素的字号，当前元素字号的 em 等于继承的字号。大多数浏览器的默认字号是 16px
2. 使用多重嵌套元素的字号会产生意外的效果，比如嵌套子元素都是0.8em 则字号会依次变小。所以 em 用在字号上很复杂，用在内边距，外边距，以及元素大小很好。
3. rem 是相对于根元素 html 的单位
```css
:root{    // root 伪类相当于类型选择器 html
  font-size:1em;   // 使用浏览器的默认样式
}
div {
  font-size:.8rem;
}
```
4. 用 rem 设置字号，px 设置边框，em 设置其他大部分属性（也可用百分比设置容器的宽度）

# 盒模型
### 元素的宽度问题
1. 全局将盒模型修改为 border-box
```css
:root {
    box-sizing:border-box;
}
*,::before,::after{
    box-sizing:inherit;  // 给所有元素使用
}
```
2. 百分比是相对于父元素的完整宽度。两列间隔的写法
```css
margin-left:1.5em
width:calc(30%-1.5em)
```

### 元素的高度问题
1. 使用 overflow 控制溢出行为。常用 auto 而不是 scroll，防止滚动条一直出现。、
2. 两列等高布局：table，flex。注意非必要不要明确设置元素的高度，先采取一个替代方案。
```html
<html>
  <head>
    <style>
      body {
        padding: 0;
        margin: 0;
      }
      .wrapper {
        display: table;
        height: 100vh;
        width: 100%;
      }
      .left {
        display: table-cell;
        width: 70%;
        background-color: red;
        height: 100%;
      }
      .right {
        display: table-cell;
        width: 30%;
        background-color: blue;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </body>
</html>
```
3. 使用 min-height 和 max-height 进行限制高度
4. 垂直居中的方式：使用上下内边距居中，table-cell+vertical align，flexbox，行内元素高度等于行高
5. 上下外边距重叠的解决方案。
非溢出的可见元素：overflow 不为 visible
设置浮动：float 属性不为 none
设置定位：position 为 absolute 或 fixed
定义成块级的非块级元素：display: inline-block/table-cell/table-caption/flex/inline-flex/grid/inline-grid
6. 猫头鹰选择器：选中相同父级的非第一个子元素
```CSS
.left * + * {
  padding-top: 20px;
}
```

# 理解浮动
1. 双容器模式。通过 margin 实现水平居中效果，设置最大宽度之后，可以防止小屏幕中出现水平滚动条的问题。
```css
max-width: 1080px;
margin: 0 auto;
```
2. 浮动的作用：支持文字围绕图片的效果，兼容IE浏览器
3. 清除浮动的方式
```css
// 方案一
.clearfix::after {
    display:block;
    content:' ';
    clear:both;
}
// 方案二：没有外边距折叠
.clearfix::before,
.clearfix::after {
    display:table;
    content:' '
}
.clearfix::after {
    clear:both;
}
```
4. 多个浮动元素出现混乱的问题，比如在每行两个元素的场景中，第三个浮动元素去到了第四个浮动元素的位置。解决方案：
```CSS
.basic {
    float: left;
}
.basic:nth-child(odd) {
    clear: left;   // 清除前一行的浮动
}
```
5. 创建BFC的方式。
非溢出的可见元素：overflow 不为 visible
设置浮动：float 属性不为 none
设置定位：position 为 absolute 或 fixed
定义成块级的非块级元素：display: inline-block/table-cell/table-caption/flex/inline-flex/grid/inline-grid。
通常使用 overflow：auto 创建 BFC
6. 通过属性选择器给所有列元素增加样式
```css
[class*="box-"] {
    float: left;
}
```

# flexbox

1. 包含 flex bug 的项目：https://github.com/philipwalton/flexbugs

# grid（看了 阮一峰的博客）

### 规则

1. display: grid 指定一个容器采用网格布局。
2. grid-template-columns 属性定义每一列的列宽，grid-template-rows 属性定义每一行的行高。
3. grid-row-gap 属性设置行与行的间隔（行间距），grid-column-gap 属性设置列与列的间隔（列间距）
4. grid-template-areas 属性用于定义区域。
5. grid-auto-flow 属性决定，默认值是 row，即"先行后列"。也可以将它设成 column，变成"先列后行"。
6. justify-items 属性设置单元格内容的水平位置（左中右），align-items 属性设置单元格内容的垂直位置（上中下）。
7. justify-content 属性是整个内容区域在容器里面的水平位置（左中右），align-content 属性是整个内容区域的垂直位置（上中下）

# 响应式设计

1. 原则：移动优先，媒体查询，流式布局（不设置明确宽度）

# 模块化 CSS

1. 使用工具类

```css
.text-center {
    text-align:center;
}
```

# 总结
断断续续花了时间去看书，前面觉得概念新颖理论清晰，有详细的去看，可是收获到的内容还是比较少。后期花了一整天的时间去翻看，走马观花，没有花时间扣细节。grid 布局通过一个例子学习到了该布局灵活的使用方式，而后面的响应式设计，模块化之类的概念学不进去。最后觉得学习CSS没有金科玉律，还是要注意平时的积累。

- 2022.9.18