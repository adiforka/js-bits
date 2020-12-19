const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// spread
const numbersCopy1 = [...numbers];
console.log(numbersCopy1);
console.log(numbersCopy1 !== numbers)

// map
const numbersCopy2 = numbers.map(i => i);
console.log(numbersCopy2);
console.log(numbersCopy2 !== numbers)

// slice
const numbersCopy3 = numbers.slice(0, numbers.length);
console.log(numbersCopy3);
console.log(numbersCopy3 !== numbers);