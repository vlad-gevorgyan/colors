const board = document.querySelector('#board')
const colors = ['#f8f8ff', '#e6e6fa', '#d8dfd8', '#dda0dd', '#ee82ee', '#da70d6', '#ff00ff', '#c71585', '#ba55d3', '#9370db', '#8a2be2', '#9400d3', '#9932cc', '#8b008b', '#800080', '#4b0082']
const SQUARES_NUMBER = 1500

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () => setColor(square))

   square.addEventListener('mouseleave', () => removeColor(square))

   board.append(square)
}

function setColor (element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color
  }`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}