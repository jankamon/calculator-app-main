// Allows theme change
import "./theme.js";

//Calculatr
const resultScreen = document.getElementById('result');
const deleteButton = document.getElementById('del-btn');
const resetButton = document.getElementById('reset');
const numberButtons = document.getElementsByClassName('num-btn');
const operationButtons = document.getElementsByClassName('sign-btn');

let operationSet = false;
let firstNumber = false;
let placeholder = 0;

resultScreen.innerHTML = placeholder;


// Functions
const setOperation = (element) => {
    console.log('Clicked set operation button');
    if(firstNumber) {
        resultScreen.innerHTML += element.value;
        operationSet = true;
    }
}

const deletePlaceholder = () => {
    if(!firstNumber) {
        resultScreen.innerHTML = resultScreen.innerHTML.substring(1);
    }
}


// Event listeners
[...numberButtons].forEach(element => {
    element.addEventListener('click', () => {
            console.log('Clicked number button');
            deletePlaceholder();
            firstNumber = true;
            resultScreen.innerHTML += element.value;
            
    });
});

[...operationButtons].forEach(element => {
    element.addEventListener('click', () => {
        setOperation(element);
    });
});

// Deleting last added character
deleteButton.addEventListener('click', () => {
    console.log('Clicked delete button');
    resultScreen.innerHTML = resultScreen.innerHTML.slice(0, -1);
});

// Reseting calculator
resetButton.addEventListener('click', () => {
    console.log('Clicked reset button');
    resultScreen.innerHTML = 0;
})


//  Todo:
// block adding 0 at beggining
// block multiplying operators