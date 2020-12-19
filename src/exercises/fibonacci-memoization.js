// fib recursive with memoization (caching in an object)
const memo = {}
function fib(n) {
  if (memo[n] !== undefined) {
    console.log(`reading from cache: ${memo[n]}`)
    return memo[n]
  }
  if (n === 1) return 1
  if (n === 0) return 0
  return (memo[n] = fib(n - 1) + fib(n - 2))
}
