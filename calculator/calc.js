let expression = '';

function addCharacter(char) {
  expression += char;
  document.getElementById('result').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    alert('Invalid expression');
  }
}
