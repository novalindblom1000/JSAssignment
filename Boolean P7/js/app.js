const birthYear=2000;
const currentyear=2024;
let ageOfperson = currentyear-birthYear;

let isChild=(ageOfperson <=0) && (ageOfperson <=10);
let isTeen=(ageOfperson <=11) && (ageOfperson <=17);

let isAdult= ageOfperson >=18;
console.log(isAdult);
console.log(isChild);
console.log(isTeen);


let playerTouchGround=false;
let playerMissJetpack=true;

if (playerTouchGround) {

  console.log("Player is on the ground!");
  console.log("player can jump!");
}

else if (playerMissJetpack) {
  console.log ("player can jet away");
}

else {
  console.log("player is not on ground")
  console.log("Player cannot jump")

}
