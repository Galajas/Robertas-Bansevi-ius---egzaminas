/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(firstDigit, secondDigit) {
  this.numOne = firstDigit;
  this.numTwo = secondDigit;
  this.sum = () => {
    return this.numOne + this.numTwo;
  };
  this.subtraction = () => {
    return this.numOne - this.numTwo;
  };
  this.multiplication = () => {
    return this.numOne * this.numTwo;
  };
  this.division = () => {
    return this.numOne / this.numTwo;
  };
}

const result = new Calculator(10, 5);

console.log(`Calculator get these values: ${result.numOne} and ${
  result.numTwo
}. \n 
These two digits sum is: ${result.sum()} \n
These two digits subtraction is: ${result.subtraction()} \n
These two digits multiplication is: ${result.multiplication()} \n
These two digits division is: ${result.division()} \n
`);
