var Utils;
(function (Utils) {
    var user = {
        name: 'Yauhen'
    };
    // ok
    var ob = { a: 5 };
    // Error: Property 'b' is missing in type '{ a: number; }' but required in type 'Required<IProps>'.ts(2741)
    // const ob2: Required<IProps> = { a: 5 }
    var ob2 = { a: 5, b: "2" };
    var page = {
        about: { title: 'about' },
        contact: { title: 'contact' },
        home: { title: 'home' }
    };
    var todo = {
        title: 'Clean room',
        completed: false
    };
    var todoOmit = {
        title: 'Clean room',
        completed: false
    };
    // type T14 = ReturnType<string>;                                        // Error
    // type T15 = ReturnType<Function>;                                      // Error
    // 10. InstanceType<T>
    var C = /** @class */ (function () {
        function C() {
            this.x = 0;
            this.y = 0;
        }
        return C;
    }());
    // type T17 = InstanceType<string>;       // Error
    // type T18 = InstanceType<Function>;     // Error
})(Utils || (Utils = {}));
