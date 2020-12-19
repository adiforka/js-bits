// merge these objects
const pikachu = { name: 'Pikachu' };
const stats = { hp: 400, attack: 60, defense: 45 };

// bad
/*pikachu.hp = 400;
pikachu.attack = 60;
pikachu.defense = 45;*/

// not so good, cause at least we're not mutating the original object
/*
const fullPikachu = Object.assign(pikachu, stats);
const fullPikachu = Object.assign(pikachu, { hp: 400 });
*/

// good with spread syntax (remember that properties on objects to the right will have priority
// as execution progresses left to right
const fullPikachu = { ...pikachu, ...stats };
console.log(fullPikachu);

// adding multiple elements to an existing array
let products = ['lawnmower', 'vacuum', 'can opener'];
// depending on where we put the spread operator
// like unshift
products = ['airbrush', 'scissors', 'scalpel', ...products];

// like push
products = [...products, 'airbrush', 'scissors', 'scalpel'];

// like splice
products = ['airbrush', ...products, 'scissors', 'scalpel'];

console.table(products);
