// run sync code first
// run promise/microtask callbacks
// run async task callbacks

setTimeout(() => console.log(`First? I don't think so...`), 0)

Promise.resolve().then(() => {
  console.log('This is from the microtask queue')
})

console.log(`I am synchronous. I always come first. Umm?`)
