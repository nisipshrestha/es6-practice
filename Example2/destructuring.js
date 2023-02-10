/* Destructuring */

const data = { a: 1, b: undefined, c: 3, d: 4, e: 5 };
const e = 'some value';

/* Destructure object,
assign default value on destructured property - b,
assign an alias for destructured property - newE
*/
const { a, e: newE, b = 'a' } = data;
// console.log(a, newE,b); 

/* Assign default value in function's parameter */
function test(param = 5) {
    // if(param === null || param === 0 || param === '')
    if (!param)
        console.log('value is invalid');
    else console.log(param);
}
// test(null);
/*
Destructuring function parameter 
and implementing rest operator.
*/
function test2({ name, value, ...restValue }) {
    console.log(name, value, restValue);
}
const newData = { name: 'user1', value: 'value1', ...data }
// test2(newData);

/* Array destructure */
const arrayData = [
    1, "test", true, new Date()
];
const [idbx0, idx1] = arrayData;
// console.log(idbx0, idx1);

function test3([ val1, val2]){
console.log(val1, val2);
}
// test3(arrayData);

const newArrayData = [1,5,9, ...arrayData];
// console.log(newArrayData);



