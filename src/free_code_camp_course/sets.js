const exSet = new Set([1, 2, 3, 5, 5, 2, 3, 3, 2, 2, 1, 1, 2, 6, 7, 33, 4, 2, 2]);
console.log(exSet);
console.log(exSet.size);
exSet.add(8).add(8).add(8);
console.log(exSet.size);

console.log(`removed? : ${exSet.delete(5)}`);
console.log(exSet.size);
console.log(`set has 5? : ${exSet.has(5)}`);
exSet.clear();
console.log(exSet.size);


