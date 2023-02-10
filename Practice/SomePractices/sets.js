const collection=new Set();
//we can add any datatype value in set by using add
collection.add(1);
collection.add('2');
collection.add({a:'Hi'});
collection.add(true);
//has is used to search in set
console.log(collection.has('2'));
console.log(collection.delete(1));
//template literals ma set direct print hudaina so spread operator lagara print garna parxa
console.log(`${collection}`);

//return in [val,val];
console.log(collection.entries());

//map use hudaina so loop lagauna parxa
collection.forEach(element => {
    console.log(element);
});

//convert any array to set
let arr=[1,2,3,4,5,1,2,3];
let data=new Set(arr);
console.log(data);

//convert set into array

console.log(data);//its in set
data=[...data];//returns in array
console.log(data);