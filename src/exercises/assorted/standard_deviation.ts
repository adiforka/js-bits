// calculate the mean of the list
// calculate the variance of the list using the mean and length
// standard deviation is the square root of variance

export const standardDeviation = <T extends number>(list: T[]) => {
  const listMean = mean(list);
  const listVariance = variance(list, listMean);
  return listVariance ** 0.5;
};

const mean = <T extends number>(list: T[]) => {
  return list.reduce((prev, val) => prev + val, 0) / list.length;
};

const variance = <T extends number>(list: T[], mean: T) => {
  let v = 0;
  for (const val of list) {
    v += (val - mean) ** 2;
  }
  return v / list.length;
};

// example run
const numbers = [1, 5, 3, 6.5, 7, 8.7, 4, 54, 3];
const stDev = standardDeviation(numbers);
console.info(Math.floor(stDev * 100) / 100);
