function covertNumber(number) {

if(number === 0){
  return 'A';
}
else if (number ===1){
  return 'B';
}

else if (number ===2){
  return 'C';
}
else {
return 'not on the list'}
}
console.log(covertNumber(0));
console.log(covertNumber(1));
console.log(covertNumber(2));
console.log(covertNumber(10));


function Result(firstnumber,secondnumber){

  let string;
   if (firstnumber === secondnumber) {
   string = "both number are equal";
   }
    else if (firstnumber > secondnumber){
      string ="First number is greater!";
   }
    else if (firstnumber < secondnumber){
    string="Second number is greater!";
  }
    else {
      string ="Error";
   }
    return string;
}
  console.log(Result(2, 3));

