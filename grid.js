const createGame = (width, height) => {

  let gameBoard = document.getElementById('board')
  let grid = document.createElement('tbody')
  let tableHTML = ''

  for (var heightIndex = height - 1; heightIndex >= 0; heightIndex--) {
    tableHTML += `<tr id=${heightIndex}>`

    for (var widthIndex = 0; widthIndex < width; widthIndex++) {
      tableHTML += `<td id="${widthIndex}-${heightIndex}" data-state="blank" data-number="0"></td>`
    }

    tableHTML += '</tr>'
  }

  grid.innerHTML = tableHTML

  gameBoard.appendChild(grid)

  const handleClick = (event) => {
    switch (event.target.dataset.state) {

      case 'blank':
        event.target.dataset.state = 'dead'
        event.target.className = 'dead'
        return

      case 'dead':
        event.target.dataset.state = 'alive'
        event.target.className = 'alive'
        return

      case 'alive':
        event.target.dataset.state = 'blank'
        event.target.className = 'blank'
        return

      case 'number':
        return

      default:
        console.log(event.target.dataset.state)
    }
  }

  for (var hi = 0; hi < height; hi++) {
    for (var wi = 0; wi < width; wi++) {
      let space = document.getElementById(`${wi}-${hi}`)
      space.addEventListener('click', handleClick)
    }
  }
}

let testBoard = {
  width: 6,
  height: 8,
  numberSpaces: [
    { coords: '0-3', number: 5 },
    { coords: '2-2', number: 2 },
    { coords: '5,1', number: 3 },
    { coords: '4,2', number: 1 },
    { coords: '1,6', number: 1 },
    { coords: '2,7', number: 5 },
    { coords: '3,6', number: 2 },
    { coords: '5,4', number: 1 },
  ]
}

let width = 10
let height = 10

createGame(width, height)
