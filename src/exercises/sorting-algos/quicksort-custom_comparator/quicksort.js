function quickSort(list, compFn) {
	if (!Array.isArray(list)) return

	qsInternal(list, 0, list.length - 1, compFn)
}

function qsInternal(list, low, high, compFn) {
	if (low < high) {
		const pivotIndex = partition(list, low, high, compFn)
		qsInternal(list, low, pivotIndex - 1, compFn)
		qsInternal(list, pivotIndex + 1, high, compFn)
	}
}

function swap(arr, l, h) {
  const temp = arr[l]
  arr[l] = arr[h]
  arr[h] = temp
}

function partition(arr, low, high, compFn) {
	const pivot = arr[low]
	let l = low + 1
	let h = high

	while (l < h) {
		// with one comparator function, there must be some tweaking of argument order
		// if pivot is smaller than arr[h] it'll run
		while (l <= h && compFn(pivot, arr[h])) {
			h--
    }
    // if arr[l] is smaller than pivot it'll run
		while (l <= h && compFn(arr[l], pivot)) {
			l++
		}

		if (l <= h) {
			swap(arr, l, h)
		} 
	}

swap(arr, low, h)
}

module.exports = quickSort