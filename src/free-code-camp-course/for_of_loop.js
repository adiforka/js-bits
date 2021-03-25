// for of for arrays
let incomes = [62_000, 67_000, 75_000];
let total = 0;
for (const income of incomes) {
    console.log(income);
    total += income;
}

console.log(total);

// for of for arrays
const pairs = new Map();
pairs.set('shooting guard', 'James');
pairs.set('power forward', 'Kevin');
pairs.set('point guard', 'Scott');
pairs.set('small forward', 'Jill');
pairs.set('center', 'Mark');


console.log('-----------------------------------------');

for (const player of pairs.entries()) {
    console.log(`${player[0]}: ${player[1]}`)
}

// for of for strings
let nameCopy = '';
const fullName = 'Jeremy Sanders';
for (const char of fullName) {
    nameCopy += char;
}
console.log(nameCopy);

console.log('-----------------------------------------');

// for of loop challenge (typical scenario where you fail in trying to update an element in a for each loop)
let incomes2 = [62_000, 67_000, 75_000];
for (let income of incomes2) {
    income += 5000;
    console.log(income);
}


