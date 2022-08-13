// 1. 基础示例。编译的时候没有报错，vscode 会有报错提示
/* interface labeledValue {
  name: String;
  size: Number;
}
function printLabel(labelObj: labeledValue) {
  console.log(labelObj.name);
}
printLabel({ size: 23, name: "label23" }) */

// 2. 可选属性。编译的时候是正常的，可是在 vscode 出现 Duplicate function implementation 的提示
/* interface squareConfig {
  color: string;
  width?: number;
}
interface square {
  color: string;
  area: number;
}

function createSquare(config: squareConfig): square {
  let newConfig = { color: "red", area: 100 };
  if (config.color) {
    newConfig.color = config.color;
  }
  if (config.width) {
    newConfig.area = config.width * config.width;
  }
  return newConfig;
}
createSquare({ color: "yellow" }); */

// 3. 只读属性。属性使用 readonly，变量使用 const
// 报错。只读属性不能赋值。vscode 和编译的时候一致
/* interface Point {
  readonly x: number;
  readonly y: number;
}
let p: Point = { x: 10, y: 5 };
p.x = 3; */

// 报错。只读属性不能赋值。vscode 和编译的时候一致
/* let a: number[] = [23, 4, 5];
let ro: ReadonlyArray<number> = a;
ro.length = 4; */

// 正常。可以通过类型断言重写
/* let a: number[] = [23, 4, 5];
let ro: ReadonlyArray<number> = a;
(ro as number[]).length = 4; */

// 4. 额外的属性检查。在调用方式的时候，由于 opacity: 0.5 是额外的所以编译会报错，有三种方法可以解决
/* interface squareConfig {
  color: string;
  width?: number;
  //  b. 使用索引签名：[propName: string]: any;
}
interface square {
  color: string;
  area: number;
}

function createSquare(config: squareConfig): square {
  let newConfig = { color: "red", area: 100 };
  if (config.color) {
    newConfig.color = config.color;
  }
  if (config.width) {
    newConfig.area = config.width * config.width;
  }
  return newConfig;
}
// c. 使用变量保存对象，绕过类型检查 let obj = { color: "red", opacity: 0.5 };
createSquare({ color: "red", opacity: 0.5 }); // a. 使用类型断言绕过检查。  as squareConfig
 */

// 5. 函数类型。 接口可以描述函数类型。ps: 不使用也不会报错，不知道为什么用这种形式
/* interface SerachFunc {
  (source: string, subString: string): boolean;
}
let mySearch1: SerachFunc;
mySearch1 = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
}; */

// 6. 可索引的类型。描述通过索引得到的类型
/* interface StringArray {
  [index: number]: string;
}
let indexArray: StringArray;
indexArray = ["Bob", "Fred"];
let indexStr: string = indexArray[0]; */
