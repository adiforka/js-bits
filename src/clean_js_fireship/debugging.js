// js pro tips (fireship)
// logging for debugging in a single line

const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'prick', age: 40, nervous: true };
const baz = { name: 'mary', age: 50, nervous: false };

// worse:
console.log(foo);
console.log(bar);
console.log(baz);


// better:
console.log('%c My Friends', 'color: orange; font-weight: bold');
console.log({ foo, bar, baz });

// if obj share properties, we can usefully display them as a table
console.table([foo, bar, baz]);

// checking performance with console.time -> console.timeEnd with labels
console.time('looper');

let i = 0;
while (i < 1000000) {
    i++;
}

console.timeEnd('looper');

// knowing where a function was defined and called
const deleteMe = () => console.trace('bye, db');

deleteMe();
deleteMe();


