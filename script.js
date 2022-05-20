let num1;
let num2;
let operator;

const numbers = document.querySelectorAll('.number-button');
numbers.forEach((number) => {
       
      number.addEventListener("click", (e) => {
        const click1 = document.getElementById('buttonOne').value;
        handleDisplay(click1);       
      }); 
           
      //number.addEventListener("click", (e) => {
        //const click2 = document.getElementById('buttonTwo').value;
        //handleDisplay(click2);
      //});
});


function handleDisplay(digit){
  const displayNumber = document.getElementById('display');
  displayNumber.value = digit;

  performCalculation(digit);
}

function performCalculation(num1) {

}










/*
const operators = document.querySelectorAll('.operator-button');
operators.forEach((operator) (e) => {

});

buttonTwo.addEventlistener("click", (e) => displayNumbers());
plusButton.addEventlistener();
equals.addEventlistener();
minusButton.addEventlistener();


        if (operator) {
          number.clicked === num1;
        } else {
          number.clicked === num2;
        }
*/
