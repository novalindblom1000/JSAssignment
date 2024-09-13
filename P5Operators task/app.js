import {Speedoutput} from "./speedoutput";

let Speedinput=72; //KM/h = M/s
Speedoutput = 20;
Speedoutput = Speedinput/3.6;
console.log(Speedoutput);

let minutesInput =3;
let secondsOutput;
secondsOutput = 180;

minutesInput= secondsOutput *60; //Minutes to seconds
console.log (minutesInput);

let Onenumberinput= 11;
let Twonumberinput=4;
let Divisioninput1;
let Divisioninput2;

Divisioninput1 = Onenumberinput/2.75;
Divisioninput2 = Twonumberinput/2.75;

console.log(Divisioninput1);
console.log(Divisioninput2);

let number1 =11; //OK that was strangely easy.
let number2= 4;

let remainder= number1 % number2;
console.log(remainder);

let Speedinput=72; //KM/h = M/s
let Speedoutput=20;
Speedoutput = Speedinput/3.6;
console.log(Speedoutput);




function calculateCircleArea(radius) {

  const pi = Math.PI;

  const radiusSquared = radius * radius;


  const area = pi * radiusSquared;


  return area.toFixed(1);
}

const radius = 2;


const area = calculateCircleArea(radius);


console.log("The area of the circle is:", area);




