'use strict'
function getValueForNthFibNumberRecursive(index) {
  return getFibInternal(index, 0, 1)
}

// how to encapsulate this helper recursive function
function getFibInternal(index, current, result) {
  if (index === 1) {
    return result
  }

  return getFibInternal(index - 1, result, result + current)
}

const result = getValueForNthFibNumberRecursive(12)
console.log(result)
