interface Array<T> {
  search: (key: T) => number
  selectionSort: () => void
}

Array.prototype.search = function <T>(key: T) {
  let low = 0
  let high = this.length - 1
  let mid

  while (low <= high) {
    mid = Math.trunc((high + low) / 2)
    if (key === this[mid]) return mid
    else if (key < this[mid]) high = mid - 1
    else low = mid + 1
  }

  return -1
}

Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length; i++) {
    let curr_min = this[i]
    let curr_min_idx = i

    for (let p = i + 1; p < this.length; p++) {
      if (this[p] < curr_min) {
        curr_min = this[p]
        curr_min_idx = p
      }
    }

    if (curr_min_idx !== i) {
      this[curr_min_idx] = this[i]
      this[i] = curr_min
    }
  }
}
