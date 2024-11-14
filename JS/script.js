function add(a,b) {
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
    if(operat == '+') return add(num1, num2);
    if(operat == '-') return subtract(num1, num2);
    if(operat == '*') return multiply(num1, num2);
    if(operat == '/') return divide(num1, num2);
}

console.log(operate('/', 4, 4));