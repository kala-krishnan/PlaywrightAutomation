"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
var loginPage = /** @class */ (function () {
    function loginPage(url) {
        this.title = "TestLaps";
        this.url = url;
    }
    loginPage.prototype.login = function () {
        console.log("I am Logging into the app");
        console.log("URL is :", this.url);
        console.log("Title is :", this.title);
    };
    loginPage.prototype.logout = function () {
        console.log("I am Logging Out from the app");
        this.title = "Logged Out";
        console.log("Title is ", this.title);
    };
    loginPage.prototype.accessLogout = function () {
        this.logout();
    };
    return loginPage;
}());
exports.loginPage = loginPage;
var obj1 = new loginPage("www.testLeaf.com");
obj1.login();
obj1.accessLogout();
