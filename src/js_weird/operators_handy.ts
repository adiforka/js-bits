// access a property on an object only if it's not null or undefined to avoid errors
let obj = { name: "Sandy" }
// obj = undefined; // using undefined explicitly for example purposes only
// obj = null;

const firstName = richie && richie.name
console.log(firstName)

// lazily getting data: if falsy value or no value cached, only then perform the op to get data
function getData() {
  console.log("function getData called")
  return 345
}

let cachedData // nothing cached, but variable declared
// cachedData = 666;
// if falsy values here, still get data. if all values other than null/undefined allowed,
// use ?? nullish coalescence operator
// cachedData = 0;
// cachedData = '';
let retrievedData = cachedData || (cachedData = getData())
console.log(retrievedData)
