const display = document.querySelector('.display');

const clearButton = document.querySelector('.clear');

const deleteButton = document.querySelector('.delete');

const numberButtons = document.querySelectorAll('.numbers');

const operatorButtons = document.querySelectorAll('.operators');

const equalsButton = document.querySelector('.equals');

const floatButton = document.querySelector('.float');


display.textContent = 0;

let valueStorage = {
    initialValue: null,
};

// Assigns selected number to specified object member and displays the input 
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        if (valueStorage["initialValue"] != null && valueStorage["operatorValue"] == undefined) { // Allows more than one digit for initialValue and assigns it
            valueStorage["initialValue"] += numberButton.id;
            display.textContent = valueStorage["initialValue"];
            console.log(valueStorage["initialValue"]);
        } else if (valueStorage["initialValue"] != null && valueStorage["nextValue"] != null && display.textContent != "Nope!") { // Allows more than one digit for nextValue and assigns it
            valueStorage["nextValue"] += numberButton.id;
            display.textContent = valueStorage["nextValue"];
            console.log(valueStorage["nextValue"]);
        } else if (valueStorage["initialValue"] != null && display.textContent != "Nope!") {      // Assigns nextValue
            valueStorage["nextValue"] = numberButton.id;
            display.textContent = valueStorage["nextValue"];
            console.log(valueStorage["nextValue"]);
        } else {                                                // Assigns initialValue
            valueStorage["initialValue"] = numberButton.id;
            delete valueStorage["operatorValue"];
            delete valueStorage["nextValue"];
            delete valueStorage["resultValue"];
            display.textContent = valueStorage["initialValue"];
            console.log(valueStorage["initialValue"]);
        }
    })
})

// Assigns selected operator input to object member
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if (valueStorage["operatorValue"] != undefined) { // Calculates and displays result if operator has been input after first number pair (e.g. 4+5+ will display 9)
            operate(valueStorage["operatorValue"], valueStorage["initialValue"], valueStorage["nextValue"]);
            valueStorage["initialValue"] = valueStorage["resultValue"];
            display.textContent = Math.round(valueStorage["resultValue"] * 10000000) / 10000000;;
            valueStorage["operatorValue"] = operatorButton.id;
            delete valueStorage["nextValue"];
            delete valueStorage["floatValue"];
            console.log(valueStorage["initialValue"]);
            console.log(valueStorage["operatorValue"]);
        } else {
            valueStorage["operatorValue"] = operatorButton.id;
            delete valueStorage["floatValue"];
            console.log(valueStorage["operatorValue"]);
        }
    })
})

// Calculates and displays the result
equalsButton.addEventListener('click', () => {
    if (valueStorage["initialValue"] == null || valueStorage["operatorValue"] == undefined || valueStorage["nextValue"] == undefined) { // Prevents incorrect equals sign input error
        return false;
    } else if (valueStorage["operatorValue"] === '/' && valueStorage["nextValue"] === "0") { // Prevents divide by 0 error
        display.textContent = "Nope!";
        return false;
    } else {
        operate(valueStorage["operatorValue"], valueStorage["initialValue"], valueStorage["nextValue"]);
        valueStorage["initialValue"] = valueStorage["resultValue"];
        display.textContent = Math.round(valueStorage["resultValue"] * 10000000) / 10000000;
        delete valueStorage["operatorValue"];
        delete valueStorage["floatValue"];
        console.log(valueStorage["initialValue"]);
    }
})

// Allows for decimal number inputs
floatButton.addEventListener('click', () => {
    if (valueStorage["nextValue"] == undefined && valueStorage["floatValue"] == undefined) { // Decimal point for initialValue
        valueStorage["initialValue"] += floatButton.id;
        display.textContent = valueStorage["initialValue"];
    } else if (valueStorage["initialValue"] != null && valueStorage["floatValue"] == undefined) { // Decimal point for nextValue
        valueStorage["nextValue"] += floatButton.id;
        display.textContent = valueStorage["nextValue"];
    } else if (valueStorage["floatValue"] == ".") { // Disallows more than 1 decimal point per number
        return false;
    }
    valueStorage["floatValue"] = floatButton.id;
})

// Clears all values and sets display to 0
clearButton.addEventListener('click', () => {
    valueStorage["initialValue"] = null;
    delete valueStorage["operatorValue"];
    delete valueStorage["nextValue"];
    delete valueStorage["resultValue"];
    delete valueStorage["floatValue"];
    display.textContent = 0;
})

// Deletes current number only and clears display
deleteButton.addEventListener('click', () => {
    if (valueStorage["initialValue"] != null) {
        delete valueStorage["nextValue"];
        delete valueStorage["floatValue"];
        display.textContent = "";
    } else {
        delete valueStorage["initialValue"];
        delete valueStorage["floatValue"];
        display.textContent = "";
    }
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

document.addEventListener('keydown', (event) => {
    if (event.key == "0") {numberAssignment(event.key)}
    else if (event.key == "1") {numberAssignment(event.key)}
    else if (event.key == "2") {numberAssignment(event.key)}
    else if (event.key == "3") {numberAssignment(event.key)}
    else if (event.key == "4") {numberAssignment(event.key)}
    else if (event.key == "5") {numberAssignment(event.key)}
    else if (event.key == "6") {numberAssignment(event.key)}
    else if (event.key == "7") {numberAssignment(event.key)}
    else if (event.key == "8") {numberAssignment(event.key)}
    else if (event.key == "9") {numberAssignment(event.key)}
    else if (event.key == "+") {operatorAssignment(event.key)}
    else if (event.key == "-") {operatorAssignment(event.key)}
    else if (event.key == "*") {operatorAssignment(event.key)}
    else if (event.key == "/") {operatorAssignment(event.key)}
    else if (event.key == "=") {equalAssignment(event.key)}
});

let numberAssignment = (key) => {
    if (valueStorage["initialValue"] != null && valueStorage["operatorValue"] == undefined) { // Allows more than one digit for initialValue and assigns it
        valueStorage["initialValue"] += key;
        display.textContent = valueStorage["initialValue"];
        console.log(valueStorage["initialValue"]);
    } else if (valueStorage["initialValue"] != null && valueStorage["nextValue"] != null && display.textContent != "Nope!") { // Allows more than one digit for nextValue and assigns it
        valueStorage["nextValue"] += key;
        display.textContent = valueStorage["nextValue"];
        console.log(valueStorage["nextValue"]);
    } else if (valueStorage["initialValue"] != null && display.textContent != "Nope!") {      // Assigns nextValue
        valueStorage["nextValue"] = key;
        display.textContent = valueStorage["nextValue"];
        console.log(valueStorage["nextValue"]);
    } else {                                                // Assigns initialValue
        valueStorage["initialValue"] = key;
        delete valueStorage["operatorValue"];
        delete valueStorage["nextValue"];
        delete valueStorage["resultValue"];
        display.textContent = valueStorage["initialValue"];
        console.log(valueStorage["initialValue"]);
    }
}

let operatorAssignment = (key) => {
    if (valueStorage["operatorValue"] != undefined) { // Calculates and displays result if operator has been input after first number pair (e.g. 4+5+ will display 9)
        operate(valueStorage["operatorValue"], valueStorage["initialValue"], valueStorage["nextValue"]);
        valueStorage["initialValue"] = valueStorage["resultValue"];
        display.textContent = Math.round(valueStorage["resultValue"] * 10000000) / 10000000;;
        valueStorage["operatorValue"] = key;
        delete valueStorage["nextValue"];
        delete valueStorage["floatValue"];
        console.log(valueStorage["initialValue"]);
        console.log(valueStorage["operatorValue"]);
    } else {
        valueStorage["operatorValue"] = key;
        delete valueStorage["floatValue"];
        console.log(valueStorage["operatorValue"]);
    }
}

let equalAssignment = () => {
    if (valueStorage["initialValue"] == null || valueStorage["operatorValue"] == undefined || valueStorage["nextValue"] == undefined) { // Prevents incorrect equals sign input error
        return false;
    } else if (valueStorage["operatorValue"] === '/' && valueStorage["nextValue"] === "0") { // Prevents divide by 0 error
        display.textContent = "Nope!";
        return false;
    } else {
        operate(valueStorage["operatorValue"], valueStorage["initialValue"], valueStorage["nextValue"]);
        valueStorage["initialValue"] = valueStorage["resultValue"];
        display.textContent = Math.round(valueStorage["resultValue"] * 10000000) / 10000000;
        delete valueStorage["operatorValue"];
        delete valueStorage["floatValue"];
        console.log(valueStorage["initialValue"]);
    }
}