// writing more concise js


// template str
const name = 'Jimmy Hoffa';
const designation = 'douchebag';
console.log(`My name is ${name} and I am a ${designation}`);

// with elvis
console.log(`You ${designation === 'douchebag' ? 'can\'t' : 'can'} drive`);


// filter map reduce

const books = [
    { title: 'How to win friends and influence people', year: 1936 },
    { title: 'The Four Steps to the Epiphany', year: 2005 },
    { title: 'Brave New World', year: 1932 }
];

books.forEach(book => console.log(book));

const upperCaseTitles = books.map(book => book.title.toUpperCase());
console.log(upperCaseTitles);

const newestBook = books.reduce((acc, cur) =>
    acc.year > cur.year ? acc : cur, { year: 0 }); // like identity in Java reduce

console.log(newestBook);