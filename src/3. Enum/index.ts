// 9. Enum - Справочник по значению получаем индекс. Смесь массива и объекта.
enum DirectionEnum {
    Up,
    Down,
    Left,
    Right = 8
}

Directions[0]; // Up
Directions[1]; // Down
Directions.Left; // 2
Directions.Right; // 8

// Задавая через константу Enum не компилируется, т.к. его не существует. Он компилируется только при обращении к нему в какой-либо переменной.
const enum links {
    youtube = 'https://youtube.com',
    vk = 'https://vk.com',
    fb = 'https://fb.com'
}

links.vk;
links.fb;

const arr = [links.vk, links.fb]