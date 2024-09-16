
console.log("Move Forward.");

console.log("Turn Right.");



stepForward()
turnRight()
turnAround()
stepForward()

function stepForward() {
console.log("Move Forward.");
}

function turnRight() {
  console.log("Turn Right.");
}

function turnleft () {
  turnRight()
  turnRight()
  turnRight()
  console.log("Turn Right.");
}

//a function connected to previous function so will actually turn left cause can't
function walkThreeSteps(){

  stepForward()
  stepForward()
  stepForward()
  console.log("Move Forward.");

}
