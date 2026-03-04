var loginPage = /** @class */ (function () {
    function loginPage() {
    }
    loginPage.prototype.alert = function () {
        console.log("Click OK in alert window");
    };
    loginPage.prototype.window = function () {
        console.log("Close the window");
    };
    return loginPage;
}());
var l = new loginPage();
l.alert();
l.window();
