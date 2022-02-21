// 1. Simple interface
// interface can implements & inheritance
interface IUser {
    readonly name: string, // <-- Can't be changed
    age?: number
}

type TUser = {
    name: string,
    age: number
}

const iUser: IUser = {
    name: 'Slava',
    /** 
     * Type '{ name: string; nickName: string; }' is not assignable to type 'IUser'. Object literal may only specify known properties, and 'nickName' does not exist in type 'IUser'.ts(2322)
     */
    // nickName: '234'
}

/**
 * getting an error
 * Property 'name' is missing in type '{ age: number; }' but required in type 'IUser'.ts(2741)
 */
// const iUser1: IUser = {
//     age: 23
// }

/**
 * getting an error
 * Cannot assign to 'name' because it is a read-only property.ts(2540)
 */
// iUser.name = 'Another';

// 2. Changeable interface 
interface IUserChangeable {
    readonly name: string, // <-- Can't be changed
    age: number,
    [propName: string]: any
}

interface IUserPass {
    getPass(): string
}

// no errors
const iUserChangeable: IUserChangeable = {
    name: 'Slava',
    age: 23,
    nickName: '234',
    some: { name: 123 }
}

// 3. Class implements interface
class UserInterface implements IUserChangeable, IUserPass {
    name: string = 'name';
    age: number = 23;

    getPass() {
        return `${this.name}${this.age}`
    }
}

// Created a predefined class
const userInterfaced = new UserInterface();
console.log(userInterfaced.getPass());

// 4. Extend an interface
interface IAdmin extends IUser {
    getPass(): string
}

class Admin implements IAdmin {
    private token: string = 'dfadafa'
    name: string = 'admin';
    age: number = 26;

    getPass() {
        return `${this.name}${this.age}`
    }
}

const myAdmin = new Admin();
console.log(myAdmin.getPass());

// 5. Class implements interface typescript consctructor

class ModeratorInterfaced implements IAdmin {
    private token: string = '123421';
    name: string
    age?: number;
    
    constructor(
        name: string,
        age: number,
    ) {
        this.name = name;
        this.age = age;
    }

    getPass(): string {
        return `${this.age}${this.name}`
    }
}

const moderatorInterfaced = new ModeratorInterfaced('mooderator', 22);
console.log(moderatorInterfaced.getPass());