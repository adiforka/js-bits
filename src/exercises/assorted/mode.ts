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
  const entries = Object.entries(counts);
  let modes = [];

  for (let item of entries) {
    if (item[1] > max) {
      max = item[1];
      modes = [];
      modes.push(+item[0]);
    } else if (item[1] === max) {
      modes.push(+item[0]);
    } else continue;
  }

  return modes.length === 1 ? modes[0] : modes;
}

const output = mode(1, 2, 3, 4, 2, 2, 4, 5, 5, 7, 7, 6, 7);
console.log(output);
