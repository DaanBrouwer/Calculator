let number = "";
let number2 = "";
let operator = "";

function numberToInput(btn) {
  number += btn;
  document.getElementById("inputField").value = number;
}

function operatorpress(btn) {
  number2 = number;
  number = "";
  operator = btn;

  console.log(number, operator, number2);
}

function operate() {
  number = parseFloat(number2);
  number2 = parseFloat(document.getElementById("inputField").value);
  console.log(number, number2);
  switch (operator) {
    case "+":
      add();

      console.log(number, number2, operator);
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
  document.getElementById("inputField").value = number;
}
function add() {
  number += number2;
}
function subtract() {
  number = number - number2;
}
function multiply() {
  number *= number2;
}
function divide() {
  number /= number2;
}
