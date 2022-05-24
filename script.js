const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const displayNumber = document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = '';
document.getElementById('equalsButton').addEventListener('click', (e) =>{
    e.preventDefault();
    performCalculation();
});

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    e.preventDefault();
    if (!operator) {
      num1 += e.target.value;
      displayNumber.value = num1;
    }
    if (num1 && operator){
      num2 += e.target.value;
      displayNumber.value = num2;
    }
    else if (num1 && num2 && operator) { 
      num2 += e.target.value;
      //num2 = performCalculation();
      displayNumber.value = num2;     
      //console.log('operator:', operator);
    }
  });
});

operators.forEach((operatorValue) => {
  operatorValue.addEventListener('click', (e) => {
    e.preventDefault();
    if (num1){
     operator = e.target.value;
    } 
    console.log('operator: ', operator);
  });
  performCalculation();
});

function performCalculation() { 
  const firstInt = parseInt(num1);
  const secondInt = parseInt(num2);

  if(operator){

  } 
  switch (operator) {
    case '+':
      displayNumber.value = firstInt + secondInt;
      break;
    case '-':
      displayNumber.value = firstInt - secondInt;
      break;
    case '*':
      displayNumber.value = firstInt * secondInt;
      break;
    case '/':
      displayNumber.value = firstInt / secondInt;
      break;
    default:
        console.log('not an operator');
      break;
  }
}

//Pseudo for performCalc(); checklist
//convert num1 and num2 to numbers
// check value of operator
// execute correct calculation based on value of operator and
  //num1 and num2