const display = document.querySelector('.display');

const clearButton = document.querySelector('.clear');

const deleteButton = document.querySelector('.delete');

const numberButtons = document.querySelectorAll('.numbers');

const operatorButtons = document.querySelectorAll('.operators');

const equalsButton = document.querySelector('.equals');

const floatButton = document.querySelector('.float');

// Can I get rid of these?
let inputValue = 0;
display.textContent = inputValue;

let valueStorage = {
    initialValue: null,
};

// Assigns to specified object member and displays the selected number input 
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        if (valueStorage["initialValue"] != null && valueStorage["operatorValue"] == undefined) {
            valueStorage["initialValue"] += numberButton.id;
            display.textContent = valueStorage["initialValue"];
            console.log(valueStorage["initialValue"]);
        } else if (valueStorage["initialValue"] != null && valueStorage["nextValue"] != null) {
            valueStorage["nextValue"] += numberButton.id;
            display.textContent = valueStorage["nextValue"];
            console.log(valueStorage["nextValue"]);
        } else if (valueStorage["initialValue"] != null) {
            valueStorage["nextValue"] = numberButton.id;
            display.textContent = valueStorage["nextValue"];
            console.log(valueStorage["nextValue"]);
        } else {
            valueStorage["initialValue"] = numberButton.id;
            display.textContent = valueStorage["initialValue"];
            console.log(valueStorage["initialValue"]);
        }
    })
})

// Assigns selected operator input to object member
// Calculates and displays result if operator has been input after first number pair (e.g. 4+5+ will display 9)
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if (valueStorage["operatorValue"] !== undefined) {
            operate(valueStorage["operatorValue"], valueStorage["initialValue"], valueStorage["nextValue"]);
            display.textContent = valueStorage["initialValue"];
            valueStorage["operatorValue"] = operatorButton.id;
            valueStorage["nextValue"] = null;
            console.log(valueStorage["initialValue"]);
            console.log(valueStorage["operatorValue"]);
        } else {
            valueStorage["operatorValue"] = operatorButton.id;
            console.log(valueStorage["operatorValue"]);
        }
    })
})

// Calculates and displays the result
equalsButton.addEventListener('click', () => {
    operate(valueStorage["operatorValue"], valueStorage["initialValue"], valueStorage["nextValue"]);
    display.textContent = valueStorage["initialValue"];
    valueStorage["operatorValue"] = null;
    console.log(valueStorage["initialValue"]);
})

// Arithmetic functions
const add = () => valueStorage["initialValue"] = +valueStorage["initialValue"] + +valueStorage["nextValue"];
const subtract = () => valueStorage["initialValue"] = +valueStorage["initialValue"] - +valueStorage["nextValue"];
const multiply = () => valueStorage["initialValue"] = +valueStorage["initialValue"] * +valueStorage["nextValue"];
const divide =  () => valueStorage["initialValue"] = +valueStorage["initialValue"] / +valueStorage["nextValue"];

// Calls on selected operator arithmetic function
function operate() {
    return valueStorage["operatorValue"] === '+' ? add()
    : valueStorage["operatorValue"] === '-' ? subtract()
    : valueStorage["operatorValue"] === '*' ? multiply()
    : valueStorage["operatorValue"] === '/' ? divide() : false
}