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

function populateDisplay(num) {
    const display = document.querySelector('#display');
    display.textContent = num;

}
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => button.addEventListener('click', (e) => {
    number.push(e.target.id);
    newNumber = parseInt(number.join(''));
    populateDisplay(newNumber);
}));


const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => button.addEventListener('click', (e) => {
    if(!firstNumber) {
        firstNumber = parseFloat(number.join(''));
        number = [];
        return firstNumber;
    } else if(!secondNumber) {
        secondNumber = parseFloat(number.join(''));
        number = [];
        return secondNumber;
    }
    console.log(firstNumber);
    console.log(secondNumber);
    //operator = e.target.id;
    //console.log(operator);
    number = [];
    console.log(number);
}));






