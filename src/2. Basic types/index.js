// 6. Arrays
var list = [1, 2, 3];
var listAnother = [1, 2, 3]; // Generic type
// 7. Array Tuples - Смешанные
// Multiple lines
var x;
x = ['a', 10];
// One line
var y = ['b', 42];
// Error
// x = [10, 'b']
// 8. Any - Against of void
var an = ["a", "b"];
var an1 = [10, "c"];
var notSure = false;
// Issue without errors
notSure = true;
notSure = 42;
notSure = "b";
// 9. Enum - Справочник по значению получаем индекс. Смесь массива и объекта.
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3
// 10. Enum with indexes
var DirectionsIndexed;
(function (DirectionsIndexed) {
    DirectionsIndexed[DirectionsIndexed["Up"] = 2] = "Up";
    DirectionsIndexed[DirectionsIndexed["Down"] = 5] = "Down";
    DirectionsIndexed[DirectionsIndexed["Left"] = 7] = "Left";
    DirectionsIndexed[DirectionsIndexed["Right"] = 9] = "Right";
})(DirectionsIndexed || (DirectionsIndexed = {}));
// 11. Never - Когда функцкия возвращает ошибку либо когда функция постоянно выполняется
var msh = 'hello';
var error = function (msg) {
    throw new Error(msg);
};
// Infinite
var infiniteLoop = function () {
    while (true)
        ;
};
// 12. Object Tyoe
var create = function (o) { };
// create(1);
// create("a");
create({ obj: 1 });
// Mulltiple types 
var id;
id = 10;
id = '42';
var count;
count = "42";
// count = 12; // Error
