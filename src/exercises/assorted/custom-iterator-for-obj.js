// tried to make this really reusable across different originally non-iterable objects
const myObj = {
  name: Jimmy,
  age: 45,
  married: true,
  loser: false,
  walkingContradiction: true
}

// throws error, since object in question is not iterable
// for (let prop of myObj) {
//   console.log(prop);
// }

// using arrow fn on purpose to bind this to the object this function is defined on as an iterator obj
// Symbol.iterator is a public designation of an internal @@iterator method, see:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
myObj[Symbol.iterator] = function () {
  const objKeys = Object.keys(this)
  let counter = -1
  return {
    next: () => {
      counter++
      return counter < objKeys.length
        ? {
            value: this[objKeys[counter]],
            done: false
          }
        : {
            done: true
          }
    }
  }
}

for (let prop of myObj) {
  console.log(prop)
}
