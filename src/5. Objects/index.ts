// Simple object
let user: any = {
    name: 'Slava',
    age: 30
}

user = 'test'; // :(

// Array Type
let listObject: Array<number> = [1];

let userObject: {name: string, age: number } = {
    name: 'Slava',
    age: 25,
    // age: '22' // error
    // nickName: 'salievvm' // error
};

// userObject.nickName = 'eee'; // error
// userObject = 'test'; // error

// 2 objects same type

// Incorrect
let userOb: {name: string, age: number, nickName: string } = {
    name: 'Slava',
    age: 25,
    nickName: 'salievvm' // No error
};

let adminOb: {name: string, age: number, nickName: string } = {
    name: 'Max',
    age: 21,
    nickName: 'admin' // No error
};

// Correct
type Person = {name: string, age: number, nickName: string, getPass?: () => string };

let user1: Person = {name: 'A', age: 12, nickName: 'user1'};
let user2: Person = {name: 'B', age: 123, nickName: 'user2',
    getPass(): string {
        return `${this.name}${this.age}`
    }
};