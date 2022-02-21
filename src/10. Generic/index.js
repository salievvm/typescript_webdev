"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generic = void 0;
// Общие типы - самоподставляются
var Generic;
(function (Generic) {
    var getter = function (data) { return data; };
    function getterEs5(data) {
        return data;
    }
    console.log(getter(10));
    console.log(getter("10"));
    console.log(getter([1, 2, 3]).length);
    console.log(getter({ name: 'name', age: 'name' }));
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        User.prototype.getPass = function () {
            return "".concat(this.name).concat(this.age);
        };
        User.prototype.getSecret = function () {
            return Math.pow(this.age, 2);
        };
        return User;
    }());
    var user = new User('123', 123);
    var user2 = new User(123, 123);
    var user3 = new User('123', 123);
    console.log(user);
    console.log(user2);
    console.log(user3);
    console.log(user3.getPass());
    console.log(user3.getSecret());
})(Generic = exports.Generic || (exports.Generic = {}));
