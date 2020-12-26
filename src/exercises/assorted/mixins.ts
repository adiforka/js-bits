// mixins using an extending function (as Opposed to Object.assign,
// for example)
interface IDude {
  fn: string;
  ln: string;
  [idx: string]: string;
}
interface Mixin {
  [idx: string]: any;
}

const Dude = function (this: IDude, fn: string, ln: string) {
  this.fn = fn;
  this.ln = ln;
};

const mixin: Mixin = {
  fullName(this: IDude) {
    return `${this.fn} ${this.ln}`;
  },

  rename(this: IDude, first: string, last: string) {
    this.fn = first;
    this.ln = last;
    return this;
  }
};

const extend = (target: IDude, source: Mixin) => {
  Object.keys(source).forEach(key => (target[key] = source[key]));
};

const sam = new Dude("sam", "porter");

extend(sam, mixin);
console.log(sam.fullName());
sam.rename("jimmy", "jackson");
console.log(sam.fullName());
