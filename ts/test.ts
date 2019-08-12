const message : string = 'hello typescript'
console.log(message);

class Site{
    name(): void{
        console.log('round')
    }
}
let obj = new Site();
obj.name()