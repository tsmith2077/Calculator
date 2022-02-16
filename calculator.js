const numberKeys = document.querySelectorAll('.numberKey');
const nonNumericKeys = document.querySelectorAll('.nonNumericKey')
const equalButton = document.querySelector('#equalButton');
const deleteButton = document.querySelector('#deleteButton');
const clearButton = document.querySelector('#clearButton');
const decimalButton = document.querySelector('#decimalButton');
const container = document.querySelector('#output');
inputNumber = "";
let firstNumber = "";
let total = "";
let operand = "";
const operators =  ['+', '-', '*', '/'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


// Event listener for number buttons and choosing first number
numberKeys.forEach((numberKey) => {


    // Event listener for clicking button number keys
    numberKey.addEventListener('click', () => {
        container.textContent = "";
        if (total != "" && operand == "") {
            inputNumber = numberKey.dataset.value;
            total = "";
        } else {
            inputNumber += numberKey.dataset.value;
        }
        if (numberKey.dataset.value == ".") {
            decimalButton.disabled = true;
        }

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = inputNumber;
        
        container.appendChild(content);
        });
});

// Event listener for hitting keyboard keys
// window.addEventListener('keydown', (e) => {
//     const isOperator = (e) => operators.includes(e);
//     const isNumber = (e) => numbers.includes(e);

//     if (isNumber || e.key == "."){     // Check to see if keypress is a number
//         container.textContent = "";
//         if (total != "" && operand == "") {
//             inputNumber = e.key;
//             total = "";
//         } else {
//             inputNumber += e.key;
//         }
//         if (e.key == "." && inputNumber.includes(".")) {
            
//         } else {
//             decimalButton.disabled = true;
//         }
    // } else if (isOperator) {                // Check to see if keypress is an operator
    //     if (operand && inputNumber) {
    //         if (total != "") {
    //             firstNumber = total;
    //         }
    //         solution(firstNumber, inputNumber);
    //     }
    //     decimalButton.disabled = false;
    //     operand = (e.key);
    //     firstNumber = inputNumber;
    //     inputNumber = "";
    // } else if (e.key == "=") {                          // Check to see if keypress is "="
    //     if (inputNumber && firstNumber && operand) {
    //         solution(firstNumber, inputNumber);
    //         operand = "";
    //         decimalButton.disabled = false;
    //     }
    // } else {
        
    // }
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.textContent = inputNumber;
    
//     container.appendChild(content);
//     }
// });



// Event listener for operand buttons
nonNumericKeys.forEach((nonNumericKey) => {

    nonNumericKey.addEventListener('click', () => {
        if (operand && inputNumber) {
            if (total != "") {
                firstNumber = total;
            }
            solution(firstNumber, inputNumber);
        }
        decimalButton.disabled = false;
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
        decimalButton.disabled = false;
    }
});


// Event listener for clear button, removes all values
clearButton.addEventListener('click', () => {
    firstNumber = "";
    inputNumber = "";
    operand = "";
    total = "";
    decimalButton.disabled = false;

    container.textContent = "";
});

deleteButton.addEventListener('click', () => {
    inputNumber = inputNumber.slice(0, -1);
    container.textContent = ""
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = inputNumber;
    
    container.appendChild(content);
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

    decimalButton.disabled = false;
}


// Operand functions
function add (firstNumber, inputNumber) {
    total = (parseFloat(firstNumber) + parseFloat(inputNumber)).toFixed(2);
    total = total.replace(/\.00$/,'');
  };
  
function subtract (firstNumber, inputNumber) {
    total = (parseFloat(firstNumber) - parseFloat(inputNumber)).toFixed(2);
    total = total.toString();
    total = total.replace(/\.00$/,'');
  };
  
function multiply (firstNumber, inputNumber) {
    total = (parseFloat(firstNumber) * parseFloat(inputNumber)).toFixed(2);
    total = total.toString();
    total = total.replace(/\.00$/,'');
};
  
function divide (firstNumber, inputNumber) {
    if (inputNumber == "0"){
        alert("Derp, derp... You can't divide by 0!!")
    }
    total = (parseFloat(firstNumber) / parseFloat(inputNumber)).toFixed(2);
    total = total.toString();
    total = total.replace(/\.00$/,'');
};

  
  
// Add keyboard support
// Numbers work but even hitting shift key will print out to output
