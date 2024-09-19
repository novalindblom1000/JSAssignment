const button0 = document.getElementById("button0");

let score = 0; // Initialize the score

// Function to increase the score by a given number
function increaseBy(inputNumber) {
  score += inputNumber; // Increase the score by inputNumber
  updateScore(); // Update the displayed score
}

// Function to update the score in the <p> element
function updateScore() {
  document.getElementById("text").innerHTML = "Score: " + score; // Update the text content
}

// Add event listener to the button to increase score by 1 on click
button0.addEventListener("click", () => { increaseBy(1); });

// Initial call to update the score display
updateScore();
