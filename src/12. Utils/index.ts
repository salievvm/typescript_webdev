namespace Utils {
    // 1. Readonly<T>
    interface User {
        name: string
    }

    const user: Readonly<User> = {
        name: 'Yauhen'
    }

    // Error: Cannot assign to 'name' because it is a read-only property.ts(2540)
    // user.name = 'MAx';

    // 2. Required<T>
    interface IProps {
        a?: number
        b?: string
    }

    // ok
    const ob: IProps = { a: 5 }

    // Error: Property 'b' is missing in type '{ a: number; }' but required in type 'Required<IProps>'.ts(2741)
    // const ob2: Required<IProps> = { a: 5 }
    const ob2: Required<IProps> = { a: 5, b: "2" }

    // 3. Record<K, T>
    interface IPageInfo {
        title: string
    }

    type Page = 'home' | 'about' | 'contact'

    const page: Record<Page, IPageInfo> = {
        about: { title: 'about' },
        contact: { title: 'contact' },
        home: { title: 'home' }
    }

    // 4. Pick<T, K>
    interface ITodo {
        title: string
        description: string
        completed: boolean
    }

    type TodoPreview = Pick<ITodo, 'title' | 'completed'>

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false
    }

    // 5. Omit<T, K>
    type TodoPreviewExclude = Omit<ITodo, 'completed'>;

    const todoOmit: TodoPreview = {
        title: 'Clean room',
        completed: false
    }

    // 6. Exclude<T, U>
    type T0 = Exclude<"a" | "b" | "c", "a">;                      // "b" | "c"
    type T1 = Exclude<"a" | "b" | "c", "a" | "b">;                // "c"
    type T2 = Exclude<string | number | (() => void), Function>;  // string | number

    // 7. Extract<T, U>
    type T3 = Extract<"a" | "b" | "c", "a" | "f">;                // "a"
    type T4 = Extract<string | number | (() => void), Function>;  // () => void

    // 8. NonNullable<T>
    type T5 = NonNullable<string | number | undefined>;   // string | number
    type T6 = NonNullable<string[] | null | undefined>;   // string[]

    // 9. ReturnType<T>
    declare function f1(): { a: number, b: string };

    type T7 = ReturnType<() => string>;                                  // string
    type T8 = ReturnType<(s: string) => void>;                           // void
    type T9 = ReturnType<(<T>() => T)>;                                  // {}
    type T10 = ReturnType<(<T extends X, X extends number[]>() => T)>;    // number[]
    type T11 = ReturnType<typeof f1>;                                     // { a: number, b: string }
    type T12 = ReturnType<any>;                                           // any
    type T13 = ReturnType<never>;                                         // any
    // type T14 = ReturnType<string>;                                        // Error
    // type T15 = ReturnType<Function>;                                      // Error

    // 10. InstanceType<T>
    class C {
        x = 0;
        y = 0;
    }

    type T14 = InstanceType<typeof C>;     // C
    type T15 = InstanceType<any>;          // any
    type T16 = InstanceType<never>;        // any
    // type T17 = InstanceType<string>;       // Error
    // type T18 = InstanceType<Function>;     // Error
}