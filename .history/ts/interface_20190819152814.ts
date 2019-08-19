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

// 可选属性
