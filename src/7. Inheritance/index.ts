// Inheritance Наследование

class UserStatic {
    static secret = 12345;

    constructor(public username: string, public age: number) {

    }

    private nickName: string = 'webdev'

    getPass(): string {
        return `${this.username}${UserStatic.secret}`
    }
}

const slava = new UserStatic('Slava', 25);

slava.getPass();
UserStatic.secret;

class Moderator extends UserStatic {
    constructor(age: number) {
        super('Slava', age);
    }

    getPass(): string {
        return `${this.age}${this.username}${UserStatic.secret}`
    }
}

const max = new UserStatic('Slava', 20);
const moderator = new Moderator(20);
moderator.getPass();

// Abstract class example
abstract class UserAbstract {
    static secret: string = '12345';

    constructor(
        public username: string,
        public age: number
    ) { }

    greet(): void {
        console.log(this.username);
    }

    abstract getPass(): string
}

// getting an error
// const yauhen = new UserAbstract('Slava', 20);

/**
 * getting an error
 * Non-abstract class 'ModeratorAbstract' does not implement inherited abstract member 'getPass' from class 'UserAbstract'.ts(2515)
 */
// class ModeratorAbstract extends UserAbstract {
// }

// Success
class ModeratorAbstract extends UserAbstract {
    getPass(): string {
        return `${this.username}${this.age}${UserAbstract.secret}`
    }
}

const moderator1 = new ModeratorAbstract('slava', 12);

moderator1.greet();
console.log(moderator1);