var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function f(input) {
    var a = 100;
    if (input) {
        var b_1 = a + 1;
        return b_1;
    }
    return b;
}
f(true);
var defaults = { food: 'rich', price: '$$', ambiance: 'noisy' };
var search = __assign({ food: 'spicy' }, defaults);
console.log(search);
