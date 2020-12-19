// used instance of before to check what property values on the
// cloned object were themselves objects (and so also needed cloning)
// interesting to see what objects are not instances of "Object":
// Object.prototype, and any object created with Object.create(null)


const deepclone = (original) => {
	const copy = {}
	const keys = Object.keys(original)
	for (let key of keys) {
		copy[key] = original[key]
		if (copy[key] && typeof copy[key] === object) {
			copy[key] = deepclone(copy[key])
		}
	}
	return copy
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

const clone = deepclone(nestedObject)
nestedObject.addresses.physicalAddress.street = 'xxxxxxxxxxxxxxx'
console.log(clone)
console.log(nestedObject)