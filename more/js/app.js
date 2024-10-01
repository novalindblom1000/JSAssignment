//MAke code to choose a random password.


const possibleCharacters =["1","3","3","4", "a","b"];

console.log(possibleCharacters.length);

function getRandomInt(){
  return Math.floor(Math.random()*possibleCharacters.length -1);
}

for (let i = 0; i < 6; i++) {
  let randomArrayIndex=getRandomInt();
  console.log(possibleCharacters[randomArrayIndex]);
  
  console.log(possibleCharacters[getRandomInt()]);
}

//adding array index so can store its historty in get randomint.
