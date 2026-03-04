var methodOverloading = /** @class */ (function () {
    function methodOverloading() {
    }
    methodOverloading.prototype.eClick = function (a, b, c) {
        if (c === 4) {
            console.log("I am number 4");
        }
        else {
            console.log("I am not number 4");
        }
    };
    return methodOverloading;
}());
var m = new methodOverloading();
m.eClick("Kala", undefined, 4);
