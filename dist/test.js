var message = 'hello typescript';
console.log(message);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('round');
    };
    return Site;
}());
var obj = new Site();
obj.name();
