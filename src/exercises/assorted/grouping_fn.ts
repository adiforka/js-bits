// a grouping function (could group into an object, a map, or a 2D array -- map here)
function groupingBy<T>(list: T[], classifier: (e: T) => string) {
  const collector = new Map<string, T[]>()
  const aggregator = (t: T) => {
    const key = classifier(t)
    if (!collector.has(key)) {
      collector.set(key, [] as T[])
    }
    collector.get(key)?.push(t)
  }
  list.forEach(aggregator)

  return collector
}

type Gift = { recepient: string; type: string; value: string }
const gifts: Gift[] = [
  {
    recepient: "Jesse",
    type: "entertainment center",
    value: "expensive",
  },
  {
    recepient: "Mark",
    type: "football",
    value: "affordable",
  },
  {
    recepient: "Jeremy",
    type: "book",
    value: "affordable",
  },
  {
    recepient: "Kevin",
    type: "deluxe backpack",
    value: "moderate",
  },
]

const classifiedGifts = groupingBy(gifts, (gift: Gift) =>
  gift.value === "moderate"
    ? "moderatePriced"
    : gift.value === "affordable"
    ? "lowPriced"
    : "highPriced",
)

console.log(classifiedGifts)
