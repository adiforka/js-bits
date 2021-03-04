// impl based on old java impl
const mergeSort = <T>(list: T[], compFn: (x: T, y: T) => number = (a, b) => a < b ? a : ) => {
  if (list.length > 1) {
    const firstHalf = list.slice(0, Math.trunc(list.length / 2))
    mergeSort(firstHalf, compFn)

    const secondHalf = list.slice(Math.trunc(list.length / 2), list.length)
    mergeSort(secondHalf, compFn)

    merge(firstHalf, secondHalf, list, compFn)
  }
}

const merge = <T>(
  first: T[],
  second: T[],
  list: T[],
  compFn: (x: T, y: T) => number
) => {
  let c1 = 0,
    c2 = 0,
    c3 = 0

  while (c1 < first.length && c2 < second.length) {
    if (compFn(first[c1], second[c2]) < 0) {
      list[c3++] = first[c1++]
    } else {
      list[c3++] = second[c2++]
    }
  }

  while (c1 < first.length) {
    list[c3++] = first[c1++]
  }

  while (c2 < second.length) {
    list[c3++] = second[c2++]
  }
}

const list = [3, 5, 7, 5, 3, 4, 3, 2]
mergeSort(list, (a, b) =>  a < b ? -1 : a > b ? 1 : 0)

export default mergeSort
