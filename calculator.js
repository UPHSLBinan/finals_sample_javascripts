var input = document.getElementById("input");

function appendInput(value) {
    input.value += value;
}

function clearInput() {
    input.value = "";
}

function calculate() {
    var expression = input.value;
    if (expression == "") {
        return;
    }
    try {
        var result = eval(expression);
        input.value = result;
    } catch (e) {
        input.value = "Error";
    }
}
