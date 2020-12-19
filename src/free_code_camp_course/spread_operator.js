// with arrays
let example1 = [1, 2, 3, 4, 5, 6, 7];
let example2 = [...example1];
// creates a new instance of array and a shallow copy of the original (component elements are not copied)
example2.push(666);
console.log(example2);

console.log(example1);

// arr
const numbers = [0, 2, 3, 1, 4, 5, 6];
const numbersCopy = numbers.map(i => i);
console.log(numbersCopy);

// concat arrays with ...
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3);


