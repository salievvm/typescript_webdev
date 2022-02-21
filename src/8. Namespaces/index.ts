// Namespace with exported variables

namespace Utils {
    export const SECRET: string = '12345';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`

    export const isEmpty = <T>(data: T): boolean => !data;
}

const myPass = Utils.getPass('asdf', 34);
const isEmpty = Utils.isEmpty(Utils.SECRET);

const PI = 3; // No errors and troubles with Utils.PI

// Export
export namespace UtilsGlobal {
    export const SECRET: string = 'ewrtwe';
    export const getPass = (name: string, age: number): string => `${name}${age}`
}