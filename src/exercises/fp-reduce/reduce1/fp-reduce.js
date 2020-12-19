import * as fs from 'fs';

const output = fs.readFileSync('./src.txt', 'utf-8')
  .trim()
  .split('\r\n')
  .map(line => line.split(/\s+/))
  .reduce((total, line) => {
    console.log(typeof total);
    total[line[0]] = total[line[0]] || [];
    total[line[0]].push({
      name: line[1],
      price: line[2],
      qty: line[3]
    });
    return total;
  }, {});

console.log(JSON.stringify(output, null, 2));