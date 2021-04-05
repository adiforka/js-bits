// tail recursion for factorial with memoization (caching)
const cache = new Map()
const fact = (n: number, res = 1) => {
  // if n comes down to 1, immediately return the result
  if (n == 1) return res
  // if the cache does not contain the calculated result for this value of n,
  // calculate it and set it in the cache
  if (!cache.has(n)) {
    cache.set(n, fact(n - 1, n * res))
  }
  // get result from the cache, be it one that was there before this recursive call,
  // or one that was just put there
  return cache.get(n)
}
