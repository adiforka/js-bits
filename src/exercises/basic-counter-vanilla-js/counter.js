if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', run)
} else {
  run()
}

const countBtn = document.querySelector('#count-btn')
const resetBtn = document.querySelector('#reset-btn')
const counterHeading = document.querySelector('#counter')
var COUNT = 0

function run() {
  countBtn.addEventListener('click', handleClick)
  resetBtn?.addEventListener('click', resetCount)
}

function handleClick() {
  COUNT += 1
  renderCount()
}

function renderCount() {
  counterHeading.textContent = COUNT.toString()
}

function resetCount() {
  COUNT = 0
  counterHeading.textContent = ''
}
