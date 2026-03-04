// create abstract class 
// fill() -> implement
// clear()->implement
// locator()-> unimplement
// frame() -> unimplement
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ElementDriver = /** @class */ (function () {
    function ElementDriver() {
        this.title = "TestLaps";
    }
    ElementDriver.prototype.fill = function () {
        console.log("Fill the Content");
    };
    ElementDriver.prototype.clear = function () {
        console.log("Clear the content");
    };
    return ElementDriver;
}());
var browserElement = /** @class */ (function (_super) {
    __extends(browserElement, _super);
    function browserElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    browserElement.prototype.locator = function () {
        console.log("this..", this.title);
        console.log("Locate Web Element");
    };
    browserElement.prototype.frame = function () {
        console.log("Jump into the Web Frame");
    };
    return browserElement;
}(ElementDriver));
var MobileElement = /** @class */ (function (_super) {
    __extends(MobileElement, _super);
    function MobileElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileElement.prototype.locator = function () {
        console.log("Locate Mobile Element");
    };
    MobileElement.prototype.frame = function () {
        console.log("Jump into the Mobile Frame");
    };
    return MobileElement;
}(ElementDriver));
var w = new browserElement();
console.log(w.title);
w.locator();
w.frame();
var mo = new MobileElement();
mo.fill();
mo.frame();
mo.locator();
