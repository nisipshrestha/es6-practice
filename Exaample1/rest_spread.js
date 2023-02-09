/* Rest */
const data = { name: 'a', address: 'b', phone: 'c', email: 'd' };
const { name, ...remainingData } = data;
// console.log(name, remainingData);

/* accepts any number of parameters */
function testFn(...param) {
    console.log(param);
}
// console.log(testFn(1,2,3,4,5,'asdf',true));
const dataArray = ['red', 'green', 'yellow'];
// const [ first, ...remainingArrayVal] =dataArray;
const [first, ...remainingArrayVal] = dataArray;
// console.log(remainingArrayVal);

/* Spread */

// spread copies all key:value from a given object 'data'.
const newData = { newKey: 'newValue', ...data };
// console.log(newData);

const newArray = ['orange', ...dataArray];
// console.log(newArray);

const objArr = [
    { name: 'User1', age: '20' },
    { name: 'User2', age: '25' },
    { name: 'User3', age: '25' },
    { name: 'User4', age: '25' },
    { name: 'User5', age: '25' },
];
console.log('objArr - ', objArr);

//  const [ data, setData] = useState([]);
// function handleChange(e, index){

// };

const targetIndex = 3;
const prevData = objArr[targetIndex];

/*
#1 spreads array from index 0 to (index targetIndex -1)
#2  spreads prevData and changes age property.
#3  spreads array from index targetIndex + 1 to end of array.
*/

const newObjArr = [
    ...objArr.slice(0, targetIndex), // #1
    { ...prevData, age: 22 }, // #2
    ...objArr.slice(targetIndex + 1) // #3
]
console.log(newObjArr);


