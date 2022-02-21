// Functions - Multiple types Тип объединения
const createPassword = (name: string = 'Max', age: string | number = 20) => `${name} ${age}`

createPassword('Jack', 31)
createPassword('Jack', '31')
console.log(createPassword(null));

const greetMe = (me: string = 'Max', greet?: string): string => `${greet}${me}`

console.log(greetMe());


// Rest - Остаточные параметры

const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skills are ${skills.join(", ")}`

console.log(createSkills('Slava', 'js', 'ts', 'word'));

// Function variable type
let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
    console.log(`Hello ${name}, nice to see you`)
};

myFunc = oldFunc;

console.log(myFunc('Slava'));