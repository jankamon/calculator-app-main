// Allows theme change
import "./theme.js";

// Calculator
const numButtons = document.getElementsByClassName('num-btn');
const numBtn = [...numButtons];
const signButtons = document.getElementsByClassName('sign-btn');
const signBtn = [...numButtons];
const calc = document.getElementById('calc');

let numArr = [];
let sign;

numBtn.forEach(element => {
    element.addEventListener('click', (value) => {
        numArr.push(element.value);
        console.log([...numArr]);
    })
});

signBtn.forEach(element => {
    element.addEventListener('click', (value) => {
        numArr.push(element.value);
        console.log([...numArr]);
    })
});

calc.onclick = calculate(firstArr, secondArr);

const calculate = () => {

}