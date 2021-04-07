// basic guessing game in node with basic validation
import Prompt from 'prompt-sync'

// quit standard with ctrl + c
const prompt = Prompt({ sigint: true })

function playGuessingGame(from, to) {
  const numToGuess = Math.floor(Math.random() * (to - from + 1)) + from
  let foundCorrectNum = false

  while (!foundCorrectNum) {
    let guess = prompt(`Guess a number from ${from} to ${to}: `)

    while (!checkNum(guess, from, to)) {
      guess = prompt(
        `Listen, dummy, we said a number ${from} to ${to}!, enter it now: `
      )
    }

    guess = Number(guess)
    if (guess === numToGuess) {
      console.log('Congrats, you got it!!')
      foundCorrectNumber = true
      // explicitly shut down program after successful guess
      process.exit(0)
    } else {
      console.log('Sorry, guess again...')
    }
  }
}

function checkNum(n, from, to) {
  const nStr = String(n)
  const matchResult = nStr.match(/[0-9]+/)

  return matchResult !== null && n >= from && n <= to
}

playGuessingGame(1, 10)
