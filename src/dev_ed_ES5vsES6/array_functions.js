// ES6
const shoppingList = ['broccoli', 'bananas', 'chocolate', 'sesame'];
// FOR EACH chained, with optional index param
shoppingList.forEach((item, index) => console.log(`${index} : + ${item}`));

console.log("----------------")

// FOR OF
for (const item of shoppingList) {
    console.log(item);
}

console.log("----------------")
const newList = shoppingList.map(item => 'new ' + item);
console.log(newList);

console.log("----------------")

// bad practice maybe, but can I copy and array with map identity?
const shoppingListCopy = shoppingList.map(item => item);
console.log(shoppingListCopy);
// seems so, and but let's do a reference identity text:
console.log(shoppingList === shoppingListCopy); // comes out false, so it's a valid copy


// FILTER
const filteredList = shoppingList.filter(item => item !== 'bananas');
console.log(filteredList);