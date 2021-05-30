const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
  
const buttonsEl = document.querySelectorAll('button')
const startBtn = document.querySelector('button[data-action="start"]')
const stopBtn = document.querySelector('button[data-action="stop"]')
const DELAY = 1000

startBtn.addEventListener('click', startColorsChange)
stopBtn.addEventListener('click', stopColorsChange)

let intervalId = null

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function addBodyRandomColor() {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length-1)]
  document.body.style.backgroundColor = randomColor
}

function startColorsChange() {
  intervalId = setInterval(() => {
    addBodyRandomColor()
  }, DELAY)

  startBtn.disabled = 'true'
}

function stopColorsChange() {
  clearInterval(intervalId)

  startBtn.removeAttribute('disabled')
}