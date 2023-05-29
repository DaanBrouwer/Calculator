let number = 0;
let operator = "";
function add(a, b) {
  () => a + b;
}
function subtract(a, b) {
  () => a - b;
}
function multiply(a, b) {
  () => a * b;
}
function divide(a, b) {
  () => a / b;
}

function numberpress(btn) {
  number = btn;
  return number;
}

const operatorpress = (btn) => {
  operator = btn;
  console.log(operator);
};

function operate(operatorpress, a, b) {}
