/* Template literal */

const str1 = 2;
const str2 = {name: 'nisip'};
// console.log(str1 + " " + str2);

function getName(param){
    return param;
} 
const result = `Good morning, ${str1} ${getName('test')}`;
console.log(result);
