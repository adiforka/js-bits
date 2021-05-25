// used instanceof before to check what property values on the
// cloned object were themselves objects (and so also needed cloning)
// interesting to see what objects are not instances of "Object":
// Object.prototype, and any object created with Object.create(null)

//!! won't work with arrays, maps, set (tweaky tweakster needed)

const cloneDeep = source => {
  const target = {}
  for (const p in source) {
    target[p] = source[p]
    //typeof null, sitting at the top of the object prototypical hierarchy, is also 'object
    if (target[p] !== null && typeof target[p] === 'object') {
      target[p] = cloneDeep(target[p])
    }
  }
  return target
}

const nestedObject = {
  name: 'adi',
  addresses: {
    physicalAddress: {
      street: 'hudson',
      number: 12,
      city: 'Brooklyn',
      state: 'NY'
    },
    email: 'adiforka@gmail.com'
  },
  age: 45
}

const clone = cloneDeep(nestedObject)

console.log(clone)
//change the value on the original
nestedObject.addresses.physicalAddress.street = 'xxxxxxxxxxxxxxx'
// the street on the address on the clone shoudl remain unchanged when the value
// of the same prop on the original changes
console.log(clone)
