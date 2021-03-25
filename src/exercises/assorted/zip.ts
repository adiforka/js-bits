// impl
function zip<T, S>(list1: T[], list2: S[]) {
  if (list1.length === list2.length) {
    return list1.map((item, i) => [item, list2[i]])
  }

  // how to type it conditionally so that when rootList is typed T[] then otherList must
  // be S[] and vice versa?
  let rootList
  let otherList

  if (list1.length > list2.length) {
    rootList = list1
    otherList = list2
  } else {
    rootList = list2
    otherList = list1
  }

  return rootList.map((item: T | S, i: number) => {
    if (otherList[i]) {
      return [item, otherList[i]]
    } else {
      return [item]
    }
  })
}

// example usage
let list1 = [1, 2, 3, 4, 5]
let list2 = ["a", "b", "c", "d"]

const zippedResult = zip(list1, list2)
console.log(zippedResult)
