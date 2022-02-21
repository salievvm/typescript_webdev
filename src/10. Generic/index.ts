// Общие типы - самоподставляются
namespace Generic {
    const getter = <T>(data: T): T => data;

    function getterEs5<T>(data: T): T {
        return data;
    }

    console.log(getter<number>(10));
    console.log(getter<string>("10"));
    console.log(getter<Array<number>>([1,2,3]).length);
    console.log(getter<{name: string, age: string}>({name: 'name', age: 'name'}));

    interface IUser {
        name: any
        age: any
        getPass(): string
        getSecret(): number
    }

    class User<T, K extends number> implements IUser {
        constructor(
            public name: T,
            public age: K
        ) {}

        getPass(): string {
            return `${this.name}${this.age}`
        }

        getSecret(): number {
            return this.age**2
        }
    }

    const user = new User('123', 123);
    const user2 = new User(123, 123);
    const user3 = new User('123', 123);

    console.log(user);
    console.log(user2);
    console.log(user3);
    console.log(user3.getPass());
    console.log(user3.getSecret());
}