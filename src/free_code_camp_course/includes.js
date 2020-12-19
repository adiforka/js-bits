const numbers = [1, 2, 3, 4, 5, 6];

// before 'includes';
function contains(arr, val) {
    const result = arr.indexOf(val);
    return (result !== -1);
}

console.log(contains(numbers, 1));

// includes
const result = numbers.includes(1);
console.log(result);

