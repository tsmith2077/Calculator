const numberKeys = document.querySelectorAll('.numberKey');
const nonNumericKeys = document.querySelectorAll('.nonNumericKey')
const equalButton = document.querySelector('#equalButton');
const clearButton = document.querySelector('#clearButton');
const container = document.querySelector('#output');
inputNumber = "";
let firstNumber = "";
let total = "";
let operand = "";


// Event listener for number buttons and choosing first number
numberKeys.forEach((numberKey) => {

    numberKey.addEventListener('click', () => {
        container.textContent = "";
        inputNumber += numberKey.dataset.value;

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = inputNumber;
        
        container.appendChild(content);
        });
});


// Event listener for operand buttons
nonNumericKeys.forEach((nonNumericKey) => {

    nonNumericKey.addEventListener('click', () => {
        if (operand && inputNumber) {
            if (total != "") {
                firstNumber = total;
            }
            solution(firstNumber, inputNumber);
        }
        operand = (nonNumericKey.dataset.value);
        firstNumber = inputNumber;
        inputNumber = "";
    });
});


// Event listener for equal button 
equalButton.addEventListener('click', () => {
    if (inputNumber && firstNumber && operand) {
        solution(firstNumber, inputNumber);
        operand = "";
    }
});


// Event listener for clear button, removes all values
clearButton.addEventListener('click', () => {
    firstNumber = "";
    inputNumber = "";
    operand = "";
    total = "";

    container.textContent = "";
});


// Return solution function
function solution (firstNumber, inputNumber) {
    if (total) {
        firstNumber = total;
    }
    if (operand == '+') {
        add(firstNumber, inputNumber)
    } else if (operand == '-') {
        subtract(firstNumber, inputNumber)
    }  else if (operand == 'x') {
        multiply(firstNumber, inputNumber)
    }  else if (operand == '/') {
        divide(firstNumber, inputNumber)
    } 

    container.textContent = "";
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = total;
    container.appendChild(content);
}


// Operand functions
function add (firstNumber, inputNumber) {
    total = parseInt(firstNumber) + parseInt(inputNumber);
  };
  
function subtract (firstNumber, inputNumber) {
    total = parseInt(firstNumber) - parseInt(inputNumber);
  };
  
function multiply (firstNumber, inputNumber) {
    total = parseInt(firstNumber) * parseInt(inputNumber);
};
  
function divide (firstNumber, inputNumber) {
    if (inputNumber == "0"){
        alert("Derp, derp... You can't divide by 0!!")
    }
    total = parseInt(firstNumber) / parseInt(inputNumber);
};
  
  