// 1. 布尔值
var isDone = false;
// 2. 数字
var decLiteral = 20;
var hexLiteral = 0x14; // 十六进制
var binaryLiteral = 20; // 二进制
var octalLiteral = 20; // 八进制
// 3. 字符串
var myName = "leon";
var age = 27;
var info = "Hello,I'm " + myName + ".\nThis year I am " + age + " years old.\n";
// 4. 数组。有两种方式
var arr1 = [2, 3, 4];
var arr2 = [2, 3, 4];
// 5. 元组
var x;
x = [23, "34"];
// x[3] = 45; // error 不能访问越界元素
// 6. 枚举。为一组数字赋予名字
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green; // 1
var result = Color[1]; // Green
// 7. any。不希望对值进行类型检查
var notSure = 23;
notSure = false;
// 8. void。没有任何类型
function fn() {
    console.log("hello");
}
var unusable = undefined; // 只能是 null 或者 undefined
// 9. null 和 undefined
var n = null;
var u = undefined;
// 10. never 是不存在值的类型，是任何类型的子类型，可以赋值给任何类型
function error(message) {
    throw new Error(message);
}
var includeNever = error("hi");
create({ prop: 0 }); // OK
create(null); // OK
// 12. 知道一个实体有比当前更确切的类型
var someValue = "hello";
var strLength1 = someValue.length;
var strLength2 = someValue.length;
