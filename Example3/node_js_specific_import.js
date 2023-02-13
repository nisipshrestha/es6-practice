
// Example for default import.
const addFn1 = require("./node_js_specific_export");

// console.log(addFn(1,2));

const { addFn } = require('./node_js_specific_export');

console.log("addFn",addFn(1,2));
console.log("addFn1",addFn1(1,2));