// func mapping
const add = (x: number) => x + x;
const multiply = (x: number) => x * x;
const funcs = [add, multiply];

// storing mapped results in a map
const pairs = new Map();
for (let i = 0; i < 5; i++) {
  const pair: number[] = [];
  funcs.forEach(func => pair.push(func(i)));
  //a map entry takes the arg value and the results of calling both functions on it 
  pairs.set(i, pair);
}
console.log(pairs);
