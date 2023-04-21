let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let onOffBtn = document.getElementById("onOffBtn");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!onOffBtn.classList.contains("offBtn")) {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        input.value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        input.value = "0";
      } else if (e.target.innerHTML == "C") {
        string = string.substring(0, string.length - 1);
        input.value = string;
      } else {
        string += e.target.innerHTML;
        input.value = string;
      }
    }
  });
});

onOffBtn.addEventListener("click", () => {
  if (onOffBtn.classList.contains("onBtn")) {
    onOffBtn.classList.remove("onBtn");
    onOffBtn.classList.add("offBtn");
    input.value = "0";
  } else {
    onOffBtn.classList.remove("offBtn");
    onOffBtn.classList.add("onBtn");
    input.value = "0";
  }
});
