var iUser = {
    name: 'Slava',
    /**
     * Type '{ name: string; nickName: string; }' is not assignable to type 'IUser'. Object literal may only specify known properties, and 'nickName' does not exist in type 'IUser'.ts(2322)
     */
    // nickName: '234'
};
// no errors
var iUserChangeable = {
    name: 'Slava',
    age: 23,
    nickName: '234',
    some: { name: 123 }
};
// 3. Class implements interface
var UserInterface = /** @class */ (function () {
    function UserInterface() {
        this.name = 'name';
        this.age = 23;
    }
    UserInterface.prototype.getPass = function () {
        return "".concat(this.name).concat(this.age);
    };
    return UserInterface;
}());
// Created a predefined class
var userInterfaced = new UserInterface();
console.log(userInterfaced.getPass());
var Admin = /** @class */ (function () {
    function Admin() {
        this.token = 'dfadafa';
        this.name = 'admin';
        this.age = 26;
    }
    Admin.prototype.getPass = function () {
        return "".concat(this.name).concat(this.age);
    };
    return Admin;
}());
var myAdmin = new Admin();
console.log(myAdmin.getPass());
// 5. Class implements interface typescript consctructor
var ModeratorInterfaced = /** @class */ (function () {
    function ModeratorInterfaced(name, age) {
        this.token = '123421';
        this.name = name;
        this.age = age;
    }
    ModeratorInterfaced.prototype.getPass = function () {
        return "".concat(this.age).concat(this.name);
    };
    return ModeratorInterfaced;
}());
var moderatorInterfaced = new ModeratorInterfaced('mooderator', 22);
console.log(moderatorInterfaced.getPass());
