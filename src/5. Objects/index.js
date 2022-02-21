// Simple object
var user = {
    name: 'Slava',
    age: 30
};
user = 'test'; // :(
// Array Type
var listObject = [1];
var userObject = {
    name: 'Slava',
    age: 25,
    // age: '22' // error
    // nickName: 'salievvm' // error
};
// userObject.nickName = 'eee'; // error
// userObject = 'test'; // error
// 2 objects same type
// Incorrect
var userOb = {
    name: 'Slava',
    age: 25,
    nickName: 'salievvm' // No error
};
var adminOb = {
    name: 'Max',
    age: 21,
    nickName: 'admin' // No error
};
var user1 = { name: 'A', age: 12, nickName: 'user1' };
var user2 = { name: 'B', age: 123, nickName: 'user2', getPass: function () {
        return "".concat(this.name).concat(this.age);
    }
};
