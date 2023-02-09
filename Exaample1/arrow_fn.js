/* Arrow Fn */

// Arrow function with body.
const handleSubmit = e => {
    console.log('form submitted');
}

// handleSubmit();

/* Arrow function without body */
const sum = (a, b) => a + b;
console.log(sum(1, 3));

const data = {
    name: 'asd',
    // getName: ()=> this.name,
    getName() {
        return this.name;
    },
    setName(param) {
        this.name = param;
        return param;
    }
};

console.log(data.setName('test'), data.name);

const temp = {
    name: 'a',
    age:'b',
    gender: 'c',
    address: 'd'
}
// ['a', 'b', 'c', 'd'];