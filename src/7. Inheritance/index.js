// Inheritance Наследование
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
var UserStatic = /** @class */ (function () {
    function UserStatic(username, age) {
        this.username = username;
        this.age = age;
        this.nickName = 'webdev';
    }
    UserStatic.prototype.getPass = function () {
        return "".concat(this.username).concat(UserStatic.secret);
    };
    UserStatic.secret = 12345;
    return UserStatic;
}());
var slava = new UserStatic('Slava', 25);
slava.getPass();
UserStatic.secret;
var Moderator = /** @class */ (function (_super) {
    __extends(Moderator, _super);
    function Moderator(age) {
        return _super.call(this, 'Slava', age) || this;
    }
    Moderator.prototype.getPass = function () {
        return "".concat(this.age).concat(this.username).concat(UserStatic.secret);
    };
    return Moderator;
}(UserStatic));
var max = new UserStatic('Slava', 20);
var moderator = new Moderator(20);
moderator.getPass();
// Abstract class example
var UserAbstract = /** @class */ (function () {
    function UserAbstract(username, age) {
        this.username = username;
        this.age = age;
    }
    UserAbstract.prototype.greet = function () {
        console.log(this.username);
    };
    UserAbstract.secret = '12345';
    return UserAbstract;
}());
// getting an error
// const yauhen = new UserAbstract('Slava', 20);
/**
 * getting an error
 * Non-abstract class 'ModeratorAbstract' does not implement inherited abstract member 'getPass' from class 'UserAbstract'.ts(2515)
 */
// class ModeratorAbstract extends UserAbstract {
// }
// Success
var ModeratorAbstract = /** @class */ (function (_super) {
    __extends(ModeratorAbstract, _super);
    function ModeratorAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModeratorAbstract.prototype.getPass = function () {
        return "".concat(this.username).concat(this.age).concat(UserAbstract.secret);
    };
    return ModeratorAbstract;
}(UserAbstract));
var moderator1 = new ModeratorAbstract('slava', 12);
moderator1.greet();
console.log(moderator1);
