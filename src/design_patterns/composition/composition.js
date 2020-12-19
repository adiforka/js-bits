// dog = pooper + barker
// cat = pooper + meower
// cleaningRobot = driver + cleaner
// murderRobot = driver + killer
// murderRobotDog = driver + killer + barker

"use strict"

const barker = state => ({ bark: () => `I am barking. I am ${state.name}.` })

const driver = state => ({ drive: () => `my position is ${state.position = state.position + state.speed}` })

const pooper = state => ({ poop: () => `I am ${state.name}, and I poop a lot.` })

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  }

  let obj = {
    poop: pooper(state).poop,
  }
  obj['bark'] = barker(state).bark
  obj.drive = driver(state).drive
  return obj
}

const jackieMurderer = murderRobotDog('jackie')
console.log(jackieMurderer.bark())
console.log(jackieMurderer.drive())
console.log(jackieMurderer.poop())

const obj = {
  get x() {
    return 666
  },
}

const len = '14'.length;
console.log(len)