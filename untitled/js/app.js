

const button0=document.getElementById("button0");

let score=0;

button0.addEventListener("click",function(){
increaseBy(1);
updateScore();

});

function increaseBy (Amount){
score=score+Amount;
}

function updateScore(){

  button0.innerHTML ="Score " + score;
}

updateScore();
