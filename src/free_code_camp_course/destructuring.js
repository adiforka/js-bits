"use strict";

// destructuring arrays
function multiplyAndAdd(a = 0, b = 1) {
    return [a * b, a + b, divide(a, b)];
}

function divide(a, b) {
    return +(a / b).toFixed(2);
}

const [product, sum, division = 'no division'] = multiplyAndAdd(2, 3);
console.log(product);
console.log(sum);
console.log(division);

// destructuring objects
const person1 = {
    name: 'Sally',
    age: 32,
    favoriteColor: 'turquiose',
    address: {
        city: 'NYC',
        state: 'New York',
    }
};

const person2 = {
    name: 'Bobby',
    age: 65
};


const person3 = { ...person1, ...person2 };
console.log(person3);

// destructuring in a function parameter list
function printUser({ name, age, favoriteColor = 'purple' }) {
    console.log(`User: name is ${name}, age is ${age}, favorite color is ${favoriteColor}`);
}
printUser(person1);