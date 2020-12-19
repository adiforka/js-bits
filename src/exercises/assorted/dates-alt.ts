const a = new Date('2017-01-01'),
  b = new Date('2017-03-25')
const MS_PER_DAY = 1000 * 60 * 60 * 24

function dateDiffInDays(a: Date, b: Date): number {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())

  return Math.floor(Math.abs(utc1 - utc2) / MS_PER_DAY)
}

const diff = dateDiffInDays(a, b)
console.log(diff)
