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
        if (valueStorage["initialValue"] != null && valueStorage["operatorValue"] == undefined) { // Allows more than one digit for initialValue and assigns it
            valueStorage["initialValue"] += numberButton.id;
            display.textContent = valueStorage["initialValue"];
            console.log(valueStorage["initialValue"]);
        } else if (valueStorage["initialValue"] != null && valueStorage["nextValue"] != null) { // Allows more than one digit for nextValue and assigns it
            valueStorage["nextValue"] += numberButton.id;
            display.textContent = valueStorage["nextValue"];
            console.log(valueStorage["nextValue"]);
        } else if (valueStorage["initialValue"] != null) {      // Assigns nextValue
            valueStorage["nextValue"] = numberButton.id;
            display.textContent = valueStorage["nextValue"];
            console.log(valueStorage["nextValue"]);
        } else {                                                // Assigns initialValue
            valueStorage["initialValue"] = numberButton.id;
            display.textContent = valueStorage["initialValue"];
            console.log(valueStorage["initialValue"]);
        }
    })
})

// Assigns selected operator input to object member
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if (valueStorage["operatorValue"] !== undefined) { // Calculates and displays result if operator has been input after first number pair (e.g. 4+5+ will display 9)
            operate(valueStorage["operatorValue"], valueStorage["initialValue"], valueStorage["nextValue"]);
            valueStorage["initialValue"] = valueStorage["resultValue"];
            display.textContent = Math.round(valueStorage["resultValue"] * 10000000) / 10000000;;
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
    valueStorage["initialValue"] = valueStorage["resultValue"];
    display.textContent = Math.round(valueStorage["resultValue"] * 10000000) / 10000000;
    valueStorage["operatorValue"] = null;
    console.log(valueStorage["initialValue"]);
})

// Arithmetic functions
const add = () => valueStorage["resultValue"] = +valueStorage["initialValue"] + +valueStorage["nextValue"];
const subtract = () => valueStorage["resultValue"] = +valueStorage["initialValue"] - +valueStorage["nextValue"];
const multiply = () => valueStorage["resultValue"] = +valueStorage["initialValue"] * +valueStorage["nextValue"];
const divide =  () => valueStorage["resultValue"] = +valueStorage["initialValue"] / +valueStorage["nextValue"];

// Calls on selected operator arithmetic function
function operate() {
    return valueStorage["operatorValue"] === '+' ? add()
    : valueStorage["operatorValue"] === '-' ? subtract()
    : valueStorage["operatorValue"] === '*' ? multiply()
    : valueStorage["operatorValue"] === '/' ? divide() : false
}