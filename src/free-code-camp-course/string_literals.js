const firstName = 'Adi';
const lastName = 'la Poope';

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const num1 = 2;
const num2 = 3;
// evaluate expressions in string literals
console.log(`${num1 + num2} and the last name was ${lastName}`);

const oldStr = 'Hello, \ndude';
console.log(oldStr);

// weird breaks
const newStr = `Hello,
dude`;

console.log(newStr);

// if you need to print it with the variables intact, just escape the whole variable insertion spot
const toPrint = `
    Hey, hey, here's \${firstName + ' ' +lastName}
`;
console.log(toPrint)



