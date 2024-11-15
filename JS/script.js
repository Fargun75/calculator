function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operate(operat, num1, num2) {
    if (operat == '+') return add(num1, num2);
    if (operat == '-') return subtract(num1, num2);
    if (operat == '*') return multiply(num1, num2);
    if (operat == '/') return divide(num1, num2);
}

const display = document.querySelector('#display');
display.textContent = '0';
let number = [];

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => button.addEventListener('click', (e) => {
    number.push(e.target.id);
    firstNumber = parseInt(number.join(''));
    display.textContent = firstNumber;
}));

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => button.addEventListener('click', (e) => {
    if(!firstNumber) {
    }
    console.log(firstNumber);
}));


