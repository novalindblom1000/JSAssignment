//MAke code to choose a random password.


const possibleCharacters =["1","3","3","4", "a","b"];

console.log(possibleCharacters.length);

function getRandomInt(){
  return Math.floor(Math.random()*possibleCharacters.length -1);
}

console.log(getRandomInt());
