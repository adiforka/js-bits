// replacer in stringify for map nested inside of an object
const obj = {
  name: "Richie",
  family: new Map()
    .set("mom", "Susan")
    .set("dad", "Jim")
    .set("brother", "Jack"),
}

function familyMemberReplacer(k: unknown, v: unknown) {
  if (v instanceof Map) {
    console.log(v.entries())
    return [...v.entries()].map(entry => ({ [entry[0]]: entry[1] }))
  } else {
    return v
  }
}

const objStringified = JSON.stringify(obj, familyMemberReplacer, 2)
console.log(objStringified)


