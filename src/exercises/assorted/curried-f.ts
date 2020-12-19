// curried function takes data args and a callback gradually and uses them in the last callback
let collectData = (name: string) => {
  return (age: number) => {
    return (pob: string) => `${name} is ${age} years old, and he's from ${pob}`
  }
}

const result = collectData('jimmy')(45)('NYC')
