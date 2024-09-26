let playerSCore=79;
let aiScore= 31;

function saveGame(){
 document.cookie="playerSCore" + playerSCore + ";expires=thu, 01 Jan 1970 00:00:01 GMT";
 document.cookie="aiScore" + aiScore + ";expires=thu, 01 Jan 1970 00:00:01 GMT";
}
tryloadGame()
loadGame()


function loadGame(){

  //GAME LOADED FROM 2 Cookies.

}

function tryloadGame() {

}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

