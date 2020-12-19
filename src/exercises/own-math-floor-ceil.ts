function floor(val: number) {
  return val % 1 === 0 ? val : (val - val % 1);
}

function ceil(val: number) {
  return val % 1 === 0 ? val : val > 0 ?
    (val - val % 1 + 1) :
    (val - val % 1);
}


console.log(floor(-77.99));
console.log(ceil(77.1));
console.log(ceil(-77.1));