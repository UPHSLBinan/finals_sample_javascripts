// Select the display element
const display = document.getElementById('display');

// Create variables to hold the values of the calculator
let firstValue = '';
let operator = '';
let secondValue = '';

// Function to add a value to the display
function addToDisplay(value) {
  // If the operator was just entered, append the value to the second value
  if (operator !== '') {
    secondValue += value;
    display.value = secondValue;
  } 
  // If the display is 0 or the operator was not just entered, replace the display value
  else if (display.value === '0') {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = '0';
  firstValue = '';
  operator = '';
  secondValue = '';
}

// Function to handle addition
function add() {
  firstValue = display.value;
  operator = '+';
  display.value = '';
}

// Function to handle subtraction
function subtract() {
  firstValue = display.value;
  operator = '-';
  display.value = '';
}

// Function to handle multiplication
function multiply() {
  firstValue = display.value;
  operator = '*';
  display.value = '';
}

// Function to handle division
function divide() {
  firstValue = display.value;
  operator = '/';
  display.value = '';
}

// Function to handle calculation
function calculate() {
  // Get the second value from the display
  secondValue = display.value;

  // Convert the values to numbers
  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(secondValue);

  // Perform the calculation
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }

  // Display the values and result
  display.value = `${firstValue} ${operator} ${secondValue} = ${result}`;

  // Reset the values
  firstValue = '';
  operator = '';
  secondValue = '';
}