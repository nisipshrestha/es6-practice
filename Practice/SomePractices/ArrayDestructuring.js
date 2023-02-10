/** Destructuring is the process of unpacking the object or arrays and assigning the values into single variables 
 * Extract data from arrays and objects
*/
/** Basic Array Destructuring */
let arr=['Hello',1,true,'Hi'];
let[x,y]=arr;
console.log(x,' ',y);

//skiping items in array which is done by (,)
let[a,,,b]=[1,2,3,4,5];
console.log(a,' ',b);

//Assigning all or rest of values from array
let[c,...d]=['Hello',1,true,{d:7}];
console.log((d));
console.log(`${c} `);

//Using default values
let[g='hi',nam='Hey']=[1];
console.log(g,'',nam);

//Swapping Variables
let abc=5;
let cde=8;
console.log(abc,' ',cde);
[abc,cde]=[cde,abc];
console.log(abc,' ',cde);
