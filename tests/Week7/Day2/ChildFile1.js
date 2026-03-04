"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var ParentFile_1 = require("./ParentFile");
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
    function Chrome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // browserType(): void {
    //     console.log("I am using Chrome browser")
    // }
    // browserVersion(): void {
    //     console.log("version : 127")
    // }
    Chrome.prototype.launchBrowser = function () {
        console.log("I am launching Chrome browser");
        _super.prototype.browserType.call(this, "Chrome");
        _super.prototype.browserVersion.call(this, 127);
    };
    return Chrome;
}(ParentFile_1.Browser));
var c = new Chrome();
c.launchBrowser();
