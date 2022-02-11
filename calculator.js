const numberKeys = document.querySelectorAll('.numberKey');
const nonNumericKeys = document.querySelectorAll('.nonNumericKey')
const container = document.querySelector('#output');
let firstNumber = 0;
let operand;

// Event listener for number buttons
numberKeys.forEach((numberKey) => {

    numberKey.addEventListener('click', () => {
        firstNumber += (numberKey.dataset.value);

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = firstNumber;
        
        container.appendChild(content);
        });
});

console.log(container);


// Event listener for operand buttons
nonNumericKeys.forEach((nonNumericKey) => {

    nonNumericKey.addEventListener('click', () => {
        operand = (nonNumericKey.dataset.value);

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = operand;
        
        container.appendChild(content);
        });
});


// Event listener for equal button - not finished, need to add 2nd number first
// nonNumericKey.addEventListener('click', () => {
//     operand = (nonNumericKey.dataset.value);

//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.textContent = operand;
    
//     container.appendChild(content);
//     });






// Old Calculator project
// const add = function(number1, number2) {
//     return number1 + number2;
//   };
  
//   const subtract = function(number1, number2) {
//       return number1 -  number2;
//   };
  
  
  
//   const sum = function(arr) {
//     let total = 0;
//     if (arr.length == 0) {
//       return 0;
//     }
//     for (i = 0; i < arr.length; i++) {
//       total += arr[i];
//     }
//     return total;
//   };
  
  
//   const multiply = function(arr) {
//     let total = 1;
//     for (i = 0; i < arr.length; i++) {
//       total = total * arr[i];
//     }
//     return total;
//   };
  
//   const power = function(number1, number2) {
//     return number1 ** number2;
//   };
  
  
//   const factorial = function(number) {
//     let total = 1;
//     if (number == 0 || number == 1) {
//       return 1;
//     }
//     for (i = number; i > 0; i--) {
//         total = total * i;
//         console.log(total);
//       }
//       return total;
//     }
  