// Class simple
var UserBig = /** @class */ (function () {
    function UserBig(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
    UserBig.prototype.getPass = function () {
        return "".concat(this.name).concat(this.age);
    };
    return UserBig;
}());
var userEx = new UserBig('Slava', 25, 'salievvm', 123);
userEx.name;
// userEx.age; // Property 'age' is private and only accessible within class 'User'.ts(2341)
// userEx.nickName; // Property 'nickName' is protected and only accessible within class 'User' and its subclasses.ts(2445)
// userEx.pass = 234; //Cannot assign to 'pass' because it is a read-only property.ts(2540)
