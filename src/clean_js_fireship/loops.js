const orders = [500, 30, 99, 15, 223];

// great with built-in functional approach (filter map reduce idiom)
const total = orders.reduce((acc, cur) => acc + cur);

const withTax = orders.map(order => +((order * 1.1).toFixed(2)));

const highValue = orders.filter(order => order > 100);

console.log(total);
console.log(withTax);
console.log(highValue);



