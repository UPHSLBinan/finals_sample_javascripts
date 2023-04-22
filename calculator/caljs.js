	
let value = "";

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
  inputField.value = result;
}// JavaScript Document