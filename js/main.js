// Allows theme change
import "./theme.js";

//Calculatr
const resultScreen = document.getElementById('result');
const deleteButton = document.getElementById('del-btn');
const resetButton = document.getElementById('reset');
const countButton = document.getElementById('calc');
const numberButtons = document.getElementsByClassName('num-btn');
const operationButtons = document.getElementsByClassName('sign-btn');

let firstInput = true;
let placeholder = 0;

resultScreen.innerHTML = placeholder;


// Functions
// Checking if last screen result element is operation symbol
const checkLastSymbol = () => {
    if(['*','/','+','-'].includes(resultScreen.innerHTML.slice(-1))) {
        return false;
    } else { 
        return true;
    };

}

// Adding operation symbol to screen
const setOperation = (element) => {
    console.log('Clicked set operation button');
    if(!firstInput && resultScreen.innerHTML !== '' && checkLastSymbol()) {
        console.log('First if is working');
        resultScreen.innerHTML += element.value;
    }
}

// Deleting first 0
const deletePlaceholder = () => {
    resultScreen.innerHTML = resultScreen.innerHTML.substring(1);
}


// Adding number to screen
const addNumber = (element) => {
    console.log('Clicked number button ' + element.value);

    if(firstInput && element.value !== '0') {
        console.log('First input if working ' + firstInput + element.value);
        deletePlaceholder();
        firstInput = false;
        console.log('After firstInput ' + firstInput + element.value);
    };

    if(!firstInput) {
        resultScreen.innerHTML += element.value;
    };
    
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

// Count
countButton.addEventListener('click', () => {
    console.log('Clicked count button');
    if(checkLastSymbol()) {
        resultScreen.innerHTML = eval(resultScreen.innerHTML);  
    }
})