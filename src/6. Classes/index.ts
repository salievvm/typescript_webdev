// Class simple
class User {
    constructor(
        public name: string,
        private age: number,
        protected nickName: string,
        readonly pass: number
    ) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }

    getPass(): string {
        return `${this.name}${this.age}`
    }

    setAge(age: number) {
        this.age = age;
    }
    
    set myAge(age: number) {
        this.age = age;
    }
}

const userEffective = new User('Slava', 25, 'salievvm', 123);

userEffective.name;
userEffective.setAge(30);
userEffective.myAge = 12;
// userEffective.age; // Property 'age' is private and only accessible within class 'User'.ts(2341)
// userEffective.nickName; // Property 'nickName' is protected and only accessible within class 'User' and its subclasses.ts(2445)
// userEffective.pass = 234; //Cannot assign to 'pass' because it is a read-only property.ts(2540)