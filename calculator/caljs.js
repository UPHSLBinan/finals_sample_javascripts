let value = "";
let previousResult = 0;
let equalClicked = false;

function appendValue(val) {
  var inputField = document.getElementById("input");
  inputField.value += val;
}

function clearInput() {
  var inputField = document.getElementById("input");
  inputField.value = "";
}

function calculate() {
  var inputField = document.getElementById("input");
  var expression = inputField.value;
  var result = eval(expression);
  if (equalClicked == false) {
    previousResult = result; // store the current result as the previous result
  }
  inputField.value = result;
  equalClicked = true; // reset the equalClicked variable
}

function equal() {
  var inputField = document.getElementById("input");
  var expression = inputField.value;
  var result;
  if (equalClicked == true && previousResult != 0) { // if the equal button has been clicked before and there is a previous result
    result = eval(previousResult + expression); // perform the operation with the previous result
  } else {
    result = eval(expression); // perform the operation as usual
  }
  previousResult = result; // store the new result as the previous result
  inputField.value = result;
  equalClicked = true; // set equalClicked to true
}
