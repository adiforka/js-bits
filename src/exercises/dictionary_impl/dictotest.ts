import { Dictionary } from './dict.js'

const dict = new Dictionary<string, number>()
dict
  .set('Jeremy', 35)
  .set('Danny', 46)
  .set('Bobby', 46)
  .set('Jack', 33)
  .set('Buzz', 33)

console.log('getting size of dictionary after initial additions', dict.size())

console.log('getting age for Jeremy', dict.get('Jeremy'))

dict.remove('Bobby')

console.log('size after removal', dict.size())

dict.clear()

console.log(dict.size())

dict.toString().length
console.log('printing here')
