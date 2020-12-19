const Dude = require('./dude')
const quickSort = require('./quicksort')


const charlie = new Dude('charlie', 65)
const zane = new Dude('zane', 40)
const abe = new Dude('abe', 87)
const dudes = [zane, charlie, abe]

quickSort(dudes, (a, b) => (a.name < b.name ? true : false))
console.log('name-sorted', dudes)

quickSort(dudes, (a, b) => (a.age < b.age ? true : false))
console.log('age-sorted', dudes)
