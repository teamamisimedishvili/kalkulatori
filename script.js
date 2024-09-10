var inputValue = document.getElementsByClassName("zero")[0];

function inputZero() {
    inputValue.value += 0;
}

function inputOne() {
    inputValue.value += 1;
}
function inputTwo() {
    inputValue.value += 2;
}
function inputThree() {
    inputValue.value += 3;
}
function inputFour() {
    inputValue.value += 4;
}

function inputFive() {
    inputValue.value += 5;
}

function inputSix() {
    inputValue.value += 6;
}
function inputSeven() {
    inputValue.value += 7;
}
function inputEight() {
    inputValue.value += 8;
}
function inputNine() {
    inputValue.value += 9;
}
function divide() {
    inputValue.value += "/";
}

function multiply() {
    inputValue.value += "*";
}

function subtraction() {
    inputValue.value += "-";
}

function addition() {
    inputValue.value += "+";
}


function calculate() {
    inputValue.value = eval(inputValue.value);
}

function gasuptaveba() {
    inputValue.value = "";
}