import { Generic } from "../10. Generic";

// Decorators
namespace Decorators {
    // 1. Class decorator
    const logClass = (constructor: Function) => {
        console.log(constructor);
    }

    // 2. Property decorator
    const logProperty = (target: Object, propertyKey: string | symbol) => {
        console.log(propertyKey);
    }

    // 3. Method decorator
    const logMethod = (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        console.log(propertyKey);
    }

    // 4. Accessor decorator (setter getter)
    const logSet = (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        console.log(propertyKey);
    }

    @logClass
    class User implements Generic.IUser {
        @logProperty
        secret: number;

        constructor(
            public name: string,
            public age: number,
            secret: number
        ) {
            this.secret = secret;
        }

        @logMethod
        getPass(): string {
            return `${this.name}${this.age}`
        }

        @logMethod
        getSecret(): number {
            return this.age**2;
        }

        @logSet
        set myAge(age: number) {
            this.age = age;
        }

        get myAge() {
            return this.age;
        }
    }

    const user = new User('Slava', 25, 1234);
    user.secret;
    user.getPass();
    user.myAge = 33;
    user.getSecret();
}