// curried function takes data args and a callback gradually and uses them in the last callback
// exmple #1
let collectData = (name: string) => {
  return (age: number) => {
    return (pob: string) => `${name} is ${age} years old, and he's from ${pob}`;
  };
};

const result = collectData("jimmy")(45)("NYC");

// example #2
function apply(a: any, b: any, c: any) {
  return a + b + c;
}

function curriedApply(fn: (x: number, y: number, z: number) => number) {
  return function (a: number) {
    return function (b: any) {
      return function (c: any) {
        return fn(a, b, c);
      };
    };
  };
}

const result2 = curriedApply(apply)(45)(48)(34);
console.log(result2);
