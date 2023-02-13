
function addFn( param1, param2) {
    return param1 + param2;
}


// Example for default export.
/* IMPORTANT NOTE: THERE SHOULD BE ONLY 1 DEFAULT EXPORT IN A FILE.
    AN INDIVIDUAL FILE IS TREATED AS AN INDIVIDUAL MODULE.
*/
// Default export
module.exports = addFn;

// Named export
module.exports.addFn = addFn;
