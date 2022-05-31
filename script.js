const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const displayNumber = document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = '';
document.getElementById('equalsButton').addEventListener('click', (e) => {
    e.preventDefault();
    performCalculation(operator);
    num1 = '';
    num2 = '';
    operator = '';
});

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        e.preventDefault();
        if (!operator) {
            num1 += e.target.value;
            displayNumber.textContent = num1;
        }
        if (num1 && operator) {
            num2 += e.target.value;
            displayNumber.textContent = num2;
        }
    });
});

operators.forEach((operatorValue) => {
    operatorValue.addEventListener('click', (e) => {
        e.preventDefault();
        if (num1 && num2) {
            let nextOperator = e.target.value;
            runContinuousOperation(nextOperator);
        }
        if (num1) {
            operator = e.target.value;
        }
    });
});

function runContinuousOperation(nextOperator) {
    num1 = performCalculation(operator);
    displayNumber.textContent = num1;
    num2 = '';
    operator = nextOperator;
}

function performCalculation() {
    const firstInt = parseInt(num1);
    const secondInt = parseInt(num2);

    if (operator) {
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
            displayNumber.textContent =
                firstInt % secondInt === 0
                    ? firstInt / secondInt
                    : (firstInt / secondInt).toFixed(3);
            break;
    }
    return displayNumber.textContent;
}

document.getElementById('clearButton').addEventListener('click', (e) => {
    e.preventDefault();
    displayNumber.textContent = 0;
});
