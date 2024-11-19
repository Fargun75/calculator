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
    if (b == 0) {
        return 'Seriously!'
    } else {
        return a / b;
    }
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

function populateDisplay(num) {
    const display = document.querySelector('#display');
    if (typeof num == 'number') {
        display.textContent = num.toString().slice(0, 11);
    } else
        display.textContent = num;

}

const display = document.querySelector('#display');
display.textContent = '0';
let number = [];


const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => button.addEventListener('click', (e) => {
    number.push(e.target.id);
    let newNumber = parseFloat(number.join(''));
    populateDisplay(newNumber);
}));


const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => button.addEventListener('click', (e) => {
    if (!firstNumber) {
        firstNumber = parseFloat(number.join(''));
        operator = e.target.id;
        number = [];
        return firstNumber;
    } else {
        secondNumber = parseFloat(number.join(''));
        let result = operate(operator, firstNumber, secondNumber);
        firstNumber = result;
        populateDisplay(result);
        operator = e.target.id;
        number = [];
        return secondNumber;
    }

}));

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    if (!firstNumber) {
        display.textContent = 0;
    } else {
        secondNumber = parseFloat(number.join(''));
        let result = operate(operator, firstNumber, secondNumber);
        console.log(result);
        populateDisplay(result);
    }
})


const clear = document.querySelector('#ac');
clear.addEventListener('click', () => {
    display.textContent = '0';
    number = [];
    firstNumber = undefined;
    secondNumber = undefined;
})

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => button.addEventListener('mousedown', (e) => {
    e.target.classList.add('clicked');
}));

buttons.forEach((button) => button.addEventListener('mouseup', (e) => {
    e.target.classList.remove('clicked');
}));





