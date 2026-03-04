"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.browserType = function (browsername) {
        console.log("Browser Name :" + browsername);
    };
    Browser.prototype.browserVersion = function (version) {
        console.log("Browser Version :" + version);
    };
    return Browser;
}());
exports.Browser = Browser;
