import fs from 'fs';

const propNames = ['role', 'children', 'child_disposition'];

const output = fs.readFileSync('./data.txt', 'utf-8')
   .trim()
   .split('\r\n')
   .map((line) => line.split('\t'))
   .reduce((acc, list) => {
      const prop = list[0];
      list.shift();
      acc[prop] = {};
      for (let i = 0; i < list.length; i++) {
         acc[prop][propNames[i]] = list[i];
      }
      return acc;
   }, {});


const stringified = JSON.stringify(output, null, 2);
console.log(stringified);