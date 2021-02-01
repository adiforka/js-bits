type ResultCache = { [idx: string]: number };

function factorial(n: number, resultCache: ResultCache = {}) {
  if (n === 1) return 1;

  if (n in Object.keys(resultCache)) {
    return resultCache["n"];
  } else {
    resultCache["n"] = factorial(n - 1, resultCache);
    return resultCache["n"] * n;
  }
}

const factorialResult = factorial(4);
console.log(factorialResult);
