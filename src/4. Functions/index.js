// Functions - Multiple types Тип объединения
var createPassword = function (name, age) {
    if (name === void 0) { name = 'Max'; }
    if (age === void 0) { age = 20; }
    return "".concat(name, " ").concat(age);
};
createPassword('Jack', 31);
createPassword('Jack', '31');
console.log(createPassword(null));
var greetMe = function (me, greet) {
    if (me === void 0) { me = 'Max'; }
    return "".concat(greet).concat(me);
};
console.log(greetMe());
// Rest - Остаточные параметры
var createSkills = function (name) {
    var skills = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skills[_i - 1] = arguments[_i];
    }
    return "".concat(name, ", my skills are ").concat(skills.join(", "));
};
console.log(createSkills('Slava', 'js', 'ts', 'word'));
// Function variable type
var myFunc;
function oldFunc(name) {
    console.log("Hello ".concat(name, ", nice to see you"));
}
;
myFunc = oldFunc;
console.log(myFunc('Slava'));
