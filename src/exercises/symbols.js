// global symbols with Symbol.for()
var sym;

(function () {
  sym = Symbol.for('123');
})();

let recovered = Symbol.for('123');
console.log(recovered === sym);

