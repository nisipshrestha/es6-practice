// IIFE (Immediately Invoked Function Expression)

// IIFE with function.
const someFn = (function (param1) {
    return (param1);
})(123);

// IIFE with arrow function.
const someAnotherFn = ((param) => {
    return param;
})("some param");

// IIFE as an annonymous function.
(()=>{
    const {result} = require('./utilityFn');
    console.log(result);

})()
