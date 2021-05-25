// using reduce to implement foreach, filter, and map functionality

function myForEach<T>(iterable: T[], fn: (item: T) => void): void {
  iterable.reduce((a, v) => {
    fn(v)
    return a
  })
}

const forEachList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const log = <T>(item: T) => console.log(`logging out item ${item}`)
myForEach(forEachList, log)
// logging out item 1
// logging out item 2
// logging out item 3
// logging out item 4
// logging out item 5
// logging out item 6
// logging out item 7
// logging out item 8
// logging out item 9
// logging out item 10

function myFilter<T>(iterable: T[], fn: (item: T) => boolean): T[] {
  return iterable.reduce((a, v) => {
    if (fn(v)) {
      a.push(v)
    }
    return a
  }, [] as T[])
}

const filterList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filterFn = <T extends number>(item: T) => item % 2 === 0
const filteredList = myFilter<number>(filterList, filterFn)
console.log(filteredList)
// [2, 4, 6, 8, 10]

function myMap<T, V>(iterable: T[], mappingFn: (item: T) => V): V[] {
  return iterable.reduce((a, curr) => {
    const v = mappingFn(curr)
    a.push(v)
    return a
  }, [] as V[])
}

const listToMap = ["jamie", "loves", "to", "ride"]
const mappingFn = (item: string) => item.length
const mappedLengths = myMap(listToMap, mappingFn)
console.log(mappedLengths)
// [5, 5, 2, 4]
