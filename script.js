const display = document.querySelector('.display');

const clearButton = document.querySelector('.clear');

const deleteButton = document.querySelector('.delete');

const numberButtons = document.querySelectorAll('.numbers');

const operatorButtons = document.querySelectorAll('.operators');

const equalsButton = document.querySelector('.equals');

const floatButton = document.querySelector('.float');

let input = prompt("Input: ");
let inputArray = input.split(' ');
let firstNumber = +inputArray[0];
let operator = inputArray[1];
let secondNumber = +inputArray[2];
// let result = 0;

const add = () => result = firstNumber + secondNumber;

const subtract = () => result = firstNumber - secondNumber;

const multiply = () => result = firstNumber * secondNumber;

const divide =  () => result = firstNumber / secondNumber;

function inputDisplay() {
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener('click', () => {
            
        })
    })
}

function operate() {
    return operator === '+' ? add()
    : operator === '-' ? subtract()
    : operator === '*' ? multiply()
    : operator === '/' ? divide() : false
}

operate(operator, firstNumber, secondNumber);
console.log(result);
