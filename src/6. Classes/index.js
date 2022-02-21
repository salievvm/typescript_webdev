// Class simple
var User = /** @class */ (function () {
    function User(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
    User.prototype.getPass = function () {
        return "".concat(this.name).concat(this.age);
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    Object.defineProperty(User.prototype, "myAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var userEffective = new User('Slava', 25, 'salievvm', 123);
userEffective.name;
userEffective.setAge(30);
userEffective.myAge = 12;
// userEffective.age; // Property 'age' is private and only accessible within class 'User'.ts(2341)
// userEffective.nickName; // Property 'nickName' is protected and only accessible within class 'User' and its subclasses.ts(2445)
// userEffective.pass = 234; //Cannot assign to 'pass' because it is a read-only property.ts(2540)
