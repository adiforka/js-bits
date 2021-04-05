// emulate groupingBy in Java stream collectors
const source = ["one", "two", "three", "four", "five", "six"];

const map = source
   .reduce((acc, item) => {
      item.length > 3
         ? acc.get('Long').push(item)
         : acc.get('Short').push(item);
      return acc;
   }, new Map().set('Long', []).set('Short', []));

console.log(map);

