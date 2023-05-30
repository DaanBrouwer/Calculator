let number = 0;
let number2 = 0;
let operator = "";

function numberToInput(btn) {
  document.getElementById("inputField").value += btn;
}

function operatorpress(btn) {
  number = parseInt(document.getElementById("inputField").value);
  btn == "=" ? operate() : (operator = btn);
  document.getElementById("inputField").value = "";
}

function operate() {
  number2 = parseInt(document.getElementById("inputField").value);
  switch (operator) {
    case "+":
      add();
      break;
    case "-":
      subtract();
      break;
    case "/":
      divide();
      break;
    case "*":
      multiply();
      break;
    default:
      break;
  }
}
function add() {
  document.getElementById("inputField").value = number + number2;
}
function subtract() {
  document.getElementById("inputField").value = number - number2;
}
function multiply() {
  document.getElementById("inputField").value = number * number2;
}
function divide() {
  document.getElementById("inputField").value = number / number2;
}
