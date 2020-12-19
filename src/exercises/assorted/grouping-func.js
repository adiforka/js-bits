// a grouping function (could group into an object, a map, or a 2D array -- matrix here)
function groupBy(array, classifier) {
  let grouper = []
  const aggregate = elem => {
    const key = classifier(elem)
    if (!grouper[key]) {
      grouper[key] = []
      grouper[key].push(elem)
    } else {
      grouper[key].push(elem)
    }
  }
  array.forEach(aggregate)
  return grouper
}

const gifts = [
  {
    recepient: 'Jesse',
    type: 'entertainment center',
    value: 'expensive'
  },
  {
    recepient: 'Mark',
    type: 'football',
    value: 'affordable'
  },
  {
    recepient: 'Jeremy',
    type: 'book',
    value: 'affordable'
  },
  {
    recepient: 'Kevin',
    type: 'deluxe backpack',
    value: 'moderate'
  }
]
const classifiedGifts = groupBy(gifts, gift =>
  gift.value === 'moderate'
    ? 'moderatePriced'
    : gift.value === 'affordable'
    ? 'lowPriced'
    : 'highPriced'
)

console.log(classifiedGifts)
