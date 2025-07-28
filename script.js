let display = document.getElementById("display");
function addToDisplay(input) {
  display.value = display.value + input;
}
function textClear() {
  display.value = " ";
}
function calculate() {
  display.value = eval(display.value);
}
