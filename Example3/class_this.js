/* Class */
const calc = (a,b) => a+b;

class test {
    instanceVal1 = 1;
    constructor(a, b) {
        this.param1 = a;
        this.param2 = b;
        console.log(a, b);
    }
    reassign(a, b) {
        this.param1 = a;
        this.param2 = b;
    }
    getParam1 = () => this.param1;
    getParam2 = () => this.param2;

    /* Static member function and property */
    static staticVal1 = 1;
    static staticFn(a, b) {
        return this.staticVal1 + calc(a, b);
    }

    static reassignStatic(param) {
        this.staticVal1 = param;
    }
}
// Instance of class test.
// const instTest = new test('asdf', 1234);
// console.log(instTest.instanceVal1);
// Overriding initialized values.
// instTest.reassign(123, 'asd');

// test.reassignStatic(5);
// test.instanceVal1 = 11;
// console.log(test.staticFn(1,2));
// console.log(test);

const instTest = new test('asdf', 1234);
const newTest = { ...instTest };
newTest.asdf = 123;
console.log(newTest);
