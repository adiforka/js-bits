'use strict';

// block scopeeees. no hoisting?
const ex = [];
ex.push(34); // fine
console.log(ex);

const obj = {};
obj.name = 'John'; // fine
console.log(obj);

delete obj.name;
console.log(obj);

