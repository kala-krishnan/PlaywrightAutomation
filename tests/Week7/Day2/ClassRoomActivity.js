var FillData = /** @class */ (function () {
    function FillData() {
    }
    FillData.prototype.fill = function (text, locator) {
        console.log("The text is " + text);
        if (locator === "inputTag") {
            console.log("Find the locator");
        }
        else {
            console.log("Not yet find the locator");
        }
    };
    return FillData;
}());
var f = new FillData();
f.fill("inputTag", "Test");
