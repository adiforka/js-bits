// main function here, and the only one to become part of a public API
export function multiplyMatrices(m1, m2) {
  validateMatrices(m1, m2)

  const m3 = getMatrix(m1.length)

  for (let row = 0; row < m1.length; row++) {
    for (let col = 0; col < m2.length; col++) {
      m3[row].push(getCellValue(m1, m2, row, col))
    }
  }
  return m3
}

// helper to get a matrix with a given number of rows
function getMatrix(rows) {
  return Array.from(Array(rows), () => [])
}

//calculate the value of a target cell of the target matrix
function getCellValue(m1, m2, row, col) {
  let cellValue = 0
  for (let i = 0; i < m2.length; i++) {
    cellValue += m1[row][i] * m2[i][col]
  }
  return cellValue
}

// check inputs for suitability for mult.
function validateMatrices(m1, m2) {
  if (m1[0].length !== m2.length || isSameRowLen(m1) || isSameRowLen(m2)) {
    throw Error('Input Matrices are not compatible for multiplication')
  }
}

// helper to see if rows in input matrices are same length
function isSameRowLen(m) {
  const firstRowLen = m[0].length
  for (let row = 1; row < m.length; row++) {
    if (firstRowLen !== m[row].length) {
      return false
    }
  }
  return true
}

// test run on the main function (should succeed)
const matrixResult = multiplyMatrices(
  [
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 6]
  ],
  [
    [1, 2, 4],
    [1, 2, 4],
    [7, 6, 5],
    [4, 3, 2]
  ]
)

console.log(matrixResult)

// test run on the main function (should throw error, since rows on m1 are not same length)
const matrixResult2 = multiplyMatrices(
  [
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 6, 3]
  ],
  [
    [1, 2, 4],
    [1, 2, 4],
    [7, 6, 5],
    [4, 3, 2]
  ]
)

console.log(matrixResult)
