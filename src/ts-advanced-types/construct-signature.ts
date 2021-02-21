// a function that accepts a construct signature and returns a configured object,
// having called the target constructor in its body
function configureObject<T extends object>(
  constructor: new (...args: any[]) => T,
  ...args: any[]
) {
  return new constructor(...args)
}

class O {
  constructor(
    private name: string,
    private age: number,
    private married: boolean
  ) {}
  get info() {
    return `${this.name}::${this.age}::${this.married}`
  }
}

const o = configureObject(O, "james", 45, true)
console.log(o.info)
