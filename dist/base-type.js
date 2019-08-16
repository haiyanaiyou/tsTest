/*
Any类型
针对类型不明确的变量使用的一种数据类型
常用于以下三种情况
1.变量的值会动态改变
2.改变现有代码时，任意值允许在编译时可选择地包含或移除类型检查
3.定义存储各种类型数据的数组时
*/
var x = 4;
x = 'T';
x = false;
console.log(x);
var y = 4;
y.toFixed();
var arr = [1, false, '12'];
arr[1] = 100;
/*
null和undefined
在ts中实行严格的空校验特性，就可以使得null和undefined只能被赋值给void或本身对应的类型
*/
var z;
z = 1;
z = null;
z = undefined;
/*
never类型
是其他类型的子类型，代表从不会出现的值
在函数中 通常表现为抛出异常或无法执行到终止点（例如无限循环）
*/
var a;
var b;
a = (function () { throw new Error('exception'); })();
