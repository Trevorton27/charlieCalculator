const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const displayNumber = document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = '';
document.getElementById('equalsButton').addEventListener('click', (e) =>{
    e.preventDefault();
    performCalculation(operator);
});

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    e.preventDefault();
    if (!operator) {
      num1 += e.target.value;
      displayNumber.textContent = num1;
    }
    if (num1 && operator){
      num2 += e.target.value;
      displayNumber.textContent = num2;
    }
    else if (num1 && num2 && operator) { 
      num2 += e.target.value;
      //num2 = performCalculation();
      displayNumber.textContent = num2;     
      //console.log('operator:', operator);
    }
  });
});

operators.forEach((operatorValue) => {
  operatorValue.addEventListener('click', (e) => {
    e.preventDefault();
    if (num1 && num2){
      let newOperator = e.target.value;
      runContinuousOperation(newOperator);
    }
    if (num1){
     operator = e.target.value;
    } 
    console.log('operator: ', operator);
  });

});

function runContinuousOperation(newOperator){
  num1 = performCalculation(operator);
  displayNumber.textContent = num1;
  num2 = '';
  operator = newOperator;
}

function performCalculation() { 
  const firstInt = parseInt(num1);
  const secondInt = parseInt(num2);

  if(operator){

  } 
  switch (operator) {
    case '+':
      displayNumber.textContent = firstInt + secondInt;
      break;
    case '-':
      displayNumber.textContent = firstInt - secondInt;
      break;
    case '*':
      displayNumber.textContent = firstInt * secondInt;
      break;
    case '/':
      displayNumber.textContent = firstInt / secondInt;
      break;
    default:
        console.log('not an operator');
      break;
  }
  return displayNumber.textContent;
}

//Pseudo for performCalc(); checklist
//convert num1 and num2 to numbers
// check textContentof operator
// execute correct calculation based on textContentof operator and
  //num1 and num2