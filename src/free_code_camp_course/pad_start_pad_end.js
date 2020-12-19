let example = 'ScarBoyDev';

console.log(example.padStart(15, 's'));
console.log(example.padEnd(20, 'ssss'));

let example2 = 'Something here';
example2 = example2.padStart(28);
console.log(example2.length === 28);
const referenceExample2 = example2;

example2 = example2.padEnd(50);
console.log(example2.length === 50);
