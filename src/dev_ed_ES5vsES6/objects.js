// object literals
function getBook(title, author) {
    return {
        title,
        author
    };
}

const book = getBook('Old Man and the Sea', 'Ernest Hemingway');
console.log(book);

// destructuring
const list = {
    name: 'Shopping List',
    items: ['Pasta', 'Macaroni']
};

const { name, items } = list;
const [item1, item2] = items;

console.log(name);
console.log(item1);
console.log(item2);