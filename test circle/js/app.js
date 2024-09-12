var radiusInput = prompt("Enter the radius of the circle:");

// Convert the user input to a number
var radius = parseFloat(radiusInput);

// Check if the input is a valid number and greater than 0
if (isNaN(radius) || radius <= 0) {
  console.log("Please enter a valid positive number for the radius.");
} else {
  // Calculate the area of the circle
  var pi = 3.14; // Use a simple approximation for π (pi)
  var area = pi * radius * radius;

  // Display the radius and the area
  console.log("Radius: " + radius);
  console.log("Area: " + area.toFixed(2));
}
