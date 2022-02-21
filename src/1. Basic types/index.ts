// 1. Boolean
let isCompleted: boolean = false;
isCompleted = true;

// 2. Number Type

const decimal: number = 6;
const integer: number = 7.10;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// 3. String

const str: string = `Hello ${4}`;
const str1: string = 'Bye';

// 4. Null undefined

const un: undefined = undefined;
const nu: null = null; // object in JS

// 5. Void

const greetUser = (user: string): void => {
    alert(`Hello, ${user}`);
}