
console.log("Move Forward.");

console.log("Turn Right.");



stepForward()
turnRight()

stepForward()
walkThreeSteps()
turnleft ()

function stepForward() {
console.log("Move Forward.");
}

function turnRight() {
  console.log("Turn Right.");
}

function turnleft () {
  console.log("Turn Left.");
  turnRight()
  turnRight()
  turnRight()

}

//a function connected to previous function so will actually turn left cause can't
function walkThreeSteps(){
  console.log("walkThreeSteps.");
  stepForward()
  stepForward()
  stepForward()


}
