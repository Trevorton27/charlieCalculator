const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const displayNumber = document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = '';

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    e.preventDefault();
    if (!operator) {
      num1 += e.target.value;
      //console.log('num1: ', num1);
      displayNumber.value = num1;
    }
    if (num1 && operator) {
      num2 += e.target.value;
      //console.log('num2: ', num2);
      displayNumber.value = num2;
    }
  });
});

operators.forEach((operatorValue) => {
  operatorValue.addEventListener('click', (e) => {
    e.preventDefault();
    if (num1) operator += e.target.value;
    //console.log('operator: ', operator);
  });
  performCalculation();
});

function performCalculation() { 
  const firstInt = parseInt(num1, 10);
  const secondInt = parseInt(num2, 10);
  // check value of operator
  switch (operator) {

    case add:
      const operatorValue = operator.value;
      break;

    case subtract:
      const operatorValue = operator.value;
      break;

    case multiply:
      const operatorValue = operator.value;
      break;
    default:
      const operatorValue = operator.value;
  }
  // execute correct calculation based on value of operator and
  //num1 and num2
  const result = (firstInt + operator + secondInt);
  //update display with result
  displayNumber.value = result;
}

//Pseudo for performCalc(); checklist
//convert num1 and num2 to numbers