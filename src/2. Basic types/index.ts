// 6. Arrays
let list1: number[] = [1, 2, 3];

let listAnother: Array<number> = [1, 2, 3]; // Generic type

// 7. Array Tuples - Смешанные
// Multiple lines
let x: [string, number];
x = ['a', 10];

// One line
let y: [string, number] = ['b', 42];

// Error
// x = [10, 'b']

// 8. Any - Against of void
let an: [any, any] = ["a", "b"];
let an1: Array<any> = [10, "c"]

let notSure: any = false;

// Issue without errors
notSure = true;
notSure = 42;
notSure = "b"; 

// 9. Enum - Справочник по значению получаем индекс. Смесь массива и объекта.
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3

// 10. Enum with indexes

enum DirectionsIndexed {
    Up = 2,
    Down = 5,
    Left = 7,
    Right = 9
}

// 11. Never - Когда функцкия возвращает ошибку либо когда функция постоянно выполняется
const msh = 'hello';
const error = (msg: string): never => {
    throw new Error(msg);
}

// Infinite
const infiniteLoop = (): never => {
    while(true);
}


// 12. Object Tyoe
const create = (o: object | null): void => { }

// create(1);
// create("a");
create({ obj: 1 })

// Mulltiple types 
let id: number | string;

id = 10;
id = '42';
// id = true; // error

// 13. Type
type Name = string;

let count: Name;

count = "42";
// count = 12; // Error