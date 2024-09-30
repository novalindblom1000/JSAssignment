//Create a program that takes a numerical grade as
// input from the user and then displays a letter grade (A, B, C, D, or F)
// based on the following scale A: 90-100,
//B: 80-89 , C: 70-79,  D: 60-69 , F: <60,         Input: 90   Output: A


function convertnumber (number){

  if (90 <= number <= 100){
    return "A";
  }
  else if (80 <= number <= 89) {
    return "B";

  }
  else if (70 <= number <= 79) {
    return "C";
  }
  else if (60 <= number <= 69) {
    return "D";
  }
  else{
  return "F";
  }
}


