// Class simple
class UserBig {
    public name: string;
    private age: number;
    protected nickName: string;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }

    getPass(): string {
        return `${this.name}${this.age}`
    }
}

const userEx = new UserBig('Slava', 25, 'salievvm', 123);

userEx.name;
// userEx.age; // Property 'age' is private and only accessible within class 'User'.ts(2341)
// userEx.nickName; // Property 'nickName' is protected and only accessible within class 'User' and its subclasses.ts(2445)
// userEx.pass = 234; //Cannot assign to 'pass' because it is a read-only property.ts(2540)