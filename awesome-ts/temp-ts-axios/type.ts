// 1. 布尔值
let isDone: boolean = false;

// 2. 数字
let decLiteral: number = 20;
let hexLiteral: number = 0x14; // 十六进制
let binaryLiteral: number = 0b10100; // 二进制
let octalLiteral: number = 0o24; // 八进制

// 3. 字符串
let myName: string = "leon";
const age: number = 27;
const info: string = `Hello,I'm ${myName}.
This year I am ${age} years old.
`;

// 4. 数组。有两种方式
let arr1: number[] = [2, 3, 4];
let arr2: Array<number> = [2, 3, 4];

// 5. 元组
let x: [number, string];
x = [23, "34"];
// x[3] = 45; // error 不能访问越界元素

// 6. 枚举。为一组数字赋予名字
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green; // 1
let result: string = Color[1]; // Green

// 7. any。不希望对值进行类型检查
let notSure: any = 23;
notSure = false;

// 8. void。没有任何类型
function fn(): void {
  console.log("hello");
}
let unusable: void = undefined; // 只能是 null 或者 undefined

// 9. null 和 undefined
let n: null = null;
let u: undefined = undefined;

// 10. never 是不存在值的类型，是任何类型的子类型，可以赋值给任何类型
function error(message: string): never {
  throw new Error(message);
}
let includeNever: string = error("hi");

// 11. object 表示非原始类型
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// 12. 知道一个实体有比当前更确切的类型。有两种写法。
let someValue: any = "hello";
const strLength1: number = (<string>someValue).length;
const strLength2: number = (someValue as string).length;
