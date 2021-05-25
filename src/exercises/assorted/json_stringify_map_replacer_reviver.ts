// replacer in stringify for map nested inside of an object
const richie = {
  name: "Richie",
  family: new Map()
    .set("mom", "Susan")
    .set("dad", "Jim")
    .set("brother", "Jack"),
}

function familyMemberReplacer(_: any, v: unknown) {
  if (v instanceof Map) {
    return [...v.entries()].map(entry => ({ [entry[0]]: entry[1] }))
  } else {
    return v
  }
}

const objStringified = JSON.stringify(richie, familyMemberReplacer, 2)
console.log(objStringified)

// OUTPUT:
// {
//   "name": "Richie",
//   "family": [
//     {
//       "mom": "Susan"
//     },
//     {
//       "dad": "Jim"
//     },
//     {
//       "brother": "Jack"
//     }
//   ]
// }
