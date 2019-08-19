/* 
interface(接口)

*/
// function printLabel(labelledObj: {label: string}){
//     console.log(labelledObj)
// }
// let myObj = {size:10, label: 'size 10 object'};
// printLabel(myObj)

// 使用接口重写
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = {size: 10,label: 'size 10 object'};
printLabel(myObj);

/* 
    可选属性
    在可选属性名字定义的后面加一个?符号
    好处：
    对可能存在的属性进行预定义；
    可以捕获引用了不存在的属性时的错误
*/
interface SquareConfig {
    color?:string;
    width?:number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: 'white', area: 100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;

}
let mySquare = createSquare({color: 'black',width:12});
console.log(mySquare,'mySquare');

/* 
只读属性
只能在对象刚刚创建的时候修改值
在属性名前使用readonly指定只读属性
*/
interface Ponit {
    readonly x: number;
    readonly y: number;
}
let p1: Ponit = {x:10,y:20};
p1.x = 5;//error

/* 
注意点：什么使用readonly或者const？
作为变量使用的话用const
作为属性使用的话用readonly
*/

/* 
额外的属性检查
例如：
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]:any;//额外的属性定义
}
*/

/* 
函数类型

*/
interface SearchFunc {
    (source:string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src, sub){
    let result = src.search(sub);
    return result > -1;
}

/* 可索引类型 */
