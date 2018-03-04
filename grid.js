const createGame = (game) => {

  let gameBoard = document.getElementById('board')
  let grid = document.createElement('tbody')
  let tableHTML = ''

  for (var heightIndex = game.height - 1; heightIndex >= 0; heightIndex--) {
    tableHTML += `<tr id=${heightIndex}>`

    for (var widthIndex = 0; widthIndex < game.width; widthIndex++) {
      if (game.hasOwnProperty(`${widthIndex}-${heightIndex}`)) {
        let spaceNumber = game[`${widthIndex}-${heightIndex}`]
        tableHTML += `<td id="${widthIndex}-${heightIndex}" data-state="number" data-number=${spaceNumber}></td>`
      } else {
        tableHTML += `<td id="${widthIndex}-${heightIndex}" data-state="blank" data-number="0"></td>`
      }
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

  for (var hi = 0; hi < game.height; hi++) {
    for (var wi = 0; wi < game.width; wi++) {
      let space = document.getElementById(`${wi}-${hi}`)
      space.addEventListener('click', handleClick)

      if (space.dataset.number != 0) {
        space.textContent = space.dataset.number
      }
    }
  }
}

let testBoard = {
  width: 6,
  height: 8,
  '0-3': 5,
  '2-2': 2,
  '5-1': 3,
  '4-2': 1,
  '1-6': 1,
  '2-7': 5,
  '3-6': 2,
  '5-4': 1,
}

createGame(testBoard)
