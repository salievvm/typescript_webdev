// 9. Enum - Справочник по значению получаем индекс. Смесь массива и объекта.
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["Up"] = 0] = "Up";
    DirectionEnum[DirectionEnum["Down"] = 1] = "Down";
    DirectionEnum[DirectionEnum["Left"] = 2] = "Left";
    DirectionEnum[DirectionEnum["Right"] = 8] = "Right";
})(DirectionEnum || (DirectionEnum = {}));
Directions[0]; // Up
Directions[1]; // Down
Directions.Left; // 2
Directions.Right; // 8
"https://vk.com" /* vk */;
"https://fb.com" /* fb */;
var arr = ["https://vk.com" /* vk */, "https://fb.com" /* fb */];
