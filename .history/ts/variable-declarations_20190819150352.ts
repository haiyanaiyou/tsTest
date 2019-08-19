function f(input: boolean) {
    let a= 100;
    if(input){
        let b = a+1;
        return b;
    }
    return b;
}
f(true)

let defaults = {food: 'rich',price: '$$',ambiance:'noisy'};
let search = {food:'spicy',...defaults};
console.log(search)