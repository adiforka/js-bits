// a mode-calculating function
// accounts for collections with numerous occurrences of mode-candidates,
// returned as an array
function mode(...args: Array<number>) {
  // object to hold occurrences of same input value
  const counts: { [idx: string]: number } = {};

  for (let arg of args) {
    if (arg in counts) {
      counts[arg]++;
    } else {
      counts[arg] = 1;
    }
  }

  let max = -Infinity;
  // entries is a matrix storing pairs the original elements and their occurrences
  const entries: [string, number][] = Object.entries(counts);
  // let the compiler know that even though the array is empty,
  // we do want to store numbers in it later
  let modes = [] as number[];

  for (let [value, count] of entries) {
    if (count > max) {
      max = count;
      modes = [];
      modes.push(+value);
    } else if (count === max) {
      modes.push(+value);
    } else continue;
  }

  return modes.length === 1 ? modes[0] : modes;
}

const output = mode(1, 2, 3, 4, 2, 2, 4, 5, 5, 7, 7, 6, 7);
console.log(output);
