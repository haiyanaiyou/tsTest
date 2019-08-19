/*
interface(接口)

*/
// function printLabel(labelledObj: {label: string}){
//     console.log(labelledObj)
// }
// let myObj = {size:10, label: 'size 10 object'};
// printLabel(myObj)
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'size 10 object' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black', width: 12 });
console.log(mySquare, 'mySquare');
var p1 = { x: 10, y: 20 };
p1.x = 5; //error
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ['12', '34'];
var myStr = myArray[0];
console.log(myStr, 'myStr');
