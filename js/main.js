// Allows theme change
import "./theme.js";

//Calculatr
const resultScreen = document.getElementById('result');
const deleteButton = document.getElementById('del-btn');
const resetButton = document.getElementById('reset');
const numberButtons = document.getElementsByClassName('num-btn');
const operationButtons = document.getElementsByClassName('sign-btn');

let operationSet = false;
let firstInput = true;
let placeholder = 0;

resultScreen.innerHTML = placeholder;


// Functions
const setOperation = (element) => {
    console.log('Clicked set operation button');
    if(!firstInput && resultScreen.innerHTML !== '') {
        if(resultScreen.innerHTML.slice(-1) !== '*' && resultScreen.innerHTML.slice(-1) !== '/' && resultScreen.innerHTML.slice(-1) !== '+' && resultScreen.innerHTML.slice(-1) !== '-') {
            console.log('First if is working');
            resultScreen.innerHTML += element.value;
            operationSet = true; 
        }
    }
}

const deletePlaceholder = () => {
    resultScreen.innerHTML = resultScreen.innerHTML.substring(1);
}

const addNumber = (element) => {
    console.log('Clicked number button');
    if(firstInput) {
        deletePlaceholder();
        firstInput = false;
    };

    resultScreen.innerHTML += element.value;
}


// Event listeners
[...numberButtons].forEach(element => {
    element.addEventListener('click', () => {
        addNumber(element);            
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
    firstInput = true;
})


//  Todo:
// block adding 0 at beggining