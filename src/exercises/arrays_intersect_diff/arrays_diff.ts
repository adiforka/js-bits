namespace ArrayDiff {
  // array diff returns an array containing only elements unique to each
  // original array
  const list1 = [1, 2, 3, 4, 5]
  const list2 = [4, 5, 6, 7, 8]

  const difference = <T>(l1: T[], l2: T[]) => {
    const uniqueTol1 = l1.filter(item => !l2.includes(item))
    const uniqueTol2 = l2.filter(item => !l1.includes(item))
    return [...uniqueTol1, ...uniqueTol2]
  }

  const diff = difference(list1, list2)
  console.log(diff)
}
