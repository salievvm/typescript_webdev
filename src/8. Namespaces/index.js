"use strict";
// Namespace with exported variables
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsGlobal = void 0;
var Utils;
(function (Utils) {
    Utils.SECRET = '12345';
    var PI = 3.14;
    Utils.getPass = function (name, age) { return "".concat(name).concat(age); };
    Utils.isEmpty = function (data) { return !data; };
})(Utils || (Utils = {}));
var myPass = Utils.getPass('asdf', 34);
var isEmpty = Utils.isEmpty(Utils.SECRET);
var PI = 3; // No errors and troubles with Utils.PI
// Export
var UtilsGlobal;
(function (UtilsGlobal) {
    UtilsGlobal.SECRET = 'ewrtwe';
    UtilsGlobal.getPass = function (name, age) { return "".concat(name).concat(age); };
})(UtilsGlobal = exports.UtilsGlobal || (exports.UtilsGlobal = {}));
