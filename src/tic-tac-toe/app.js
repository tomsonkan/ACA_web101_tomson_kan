// in HTML
// create 3x3 grid

// in JS
// onClick insert 'o' for 'x' depending on previous click
// var player1, var player2, var previousClick

console.log('hey')
// alert('rawr')
var box = document.querySelector('.box')
var allBoxes = document.querySelectorAll('.box')
console.log('allBoxes', allBoxes)
var previousClick = 'o'
// var gameMarker = 'X'
// var gameMarker = 'O'
// box.onclick = function setXO (event) {
//   console.log('hey you clicked me!', event)
//   event.target.innerText = 'O'
// }

function playTicTacToe(element) {
  console.log('hey element', previousClick) 
  if (previousClick === 'o') {
    element.innerText = 'x'
    previousClick = 'x'
  } else {
    element.innerText = 'o'
  previousClick = 'o'
    
  }
}

// function reset()
// {
//   matrix = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ];

// }
function myFunction() {
document.element.innerText('x').style.color = "red" [0]
}