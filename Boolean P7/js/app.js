const birthYear = 2010;
const currentYear = 2024;
let favoriteNumber = 77777777

let ageOfPerson = currentYear - birthYear;

console.log(ageOfPerson);

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);
// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);
// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;

if (isChild) {
console.log ("Kindgardener");
}

if (isTeenager) {

  console.log ("Teen rebbelion");

}

if(isAdult) {

  console.log ("Adult years");
}

console.log(favoriteNumber);

if (favoriteNumber > ageOfPerson) { // FALSE
  console.log("Favorite Number is Greater");
}

else if (favoriteNumber === ageOfPerson) {
  console.log("They are the same!")
}

else {
  console.log("Age is Greater");
}

console.log("Favorite Number is Even");
console.log("Favorite Number is Odd");
