// conducts pseudorandom guesses on top of a binary search algo,
// returning the successful guess and the guess count.
export function binarySearch(
  key: number,
  initialGuess: number,
  range = 1_000_000
) {
  let low = range[0];
  let high = range[1];
  let guess = initialGuess;
  let guessCount = 1;
  while (guess !== key) {
    if (guess > key) {
      high = guess - 1;
    } else {
      low = guess + 1;
    }
    guess = Math.floor(Math.random() * (high - low + 1)) + low;
    guessCount++;
  }

  return [guess, guessCount];
}
