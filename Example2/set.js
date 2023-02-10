/* Set */

const arr = [1,23,3];
const obj = { key: 'value'};
const collection = new Set();
collection.add(1);

// collection.add(arr);
// collection.add([1,23,3]);
collection.add(obj);
collection.add({ key: 'value' });

// collection.forEach(each => {
// console.log(each);
// });
console.log([...collection.values()]);

const [idx0] = collection;
console.log(collection.size);