// need to add an interface declaration to built-in Array type to extend it in TS
interface Array<T> {
  contains: (t: T) => boolean
}

Array.prototype.contains = function <T>(t: T) {
  return this.some(e => e === t)
}

const intersection = <T>(list: T[], otherList: T[]) => {
  return list.filter(item => {
    return otherList.contains(item)
  })
}

const intersectionAll = <T>(...lists: T[][]) => {
  if (lists.length === 0) return []
  if (lists.length === 1) return lists[0]

  let [firstList, ...otherLists] = lists

  for (const otherList of otherLists) {
    firstList = intersection(firstList, otherList)
  }

  return firstList
}

const inter = intersectionAll([1, 2, 3, 4, 5], [3, 4, 5], [5, 7, 8])
console.log(inter)
