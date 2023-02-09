/* const */

const DB_CONN_STR = 'DB_USER: ASDF, PASSWORD: ASDF';

let amount = 50;

function calc(param){
amount= param + amount;
}

// console.log("initial amount", amount);

// calc(100);
// console.log("amount after calc", amount);

const data = {};
data.name = {b: 'a'};
// console.log(data);

const tempArray = [];
tempArray.push(1);
// tempArray = [1,2,3];
// console.log(tempArray);

/* reuses memory reference. */
let a;
[1,2,3].forEach(each =>{
    a = each;
    console.log(a);
});
