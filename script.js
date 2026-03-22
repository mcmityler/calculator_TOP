
let number1 = 0;
let number2 = 0;
let operator = "";
let isNumberStarted = false; //clears screen when you start a new number


function operate(num1, num2, operate){
    switch(operate){
        case "+":
            addition(num1,num2);
            break;
        case "-":
            subtraction(num1,num2);
            break;
        case "/":
            division(num1,num2);
            break;
        case "*":
            multi(num1,num2);
            break;
    }
}

function addition(num1, num2){
    return +num1 + +num2;
}
function subtraction(num1, num2){
    return +num1 - +num2;
}
function multi(num1, num2){
    return +num1 * +num2;
}
function division(num1, num2){
    return +num1 / +num2;
}
function numPress(num){
    if(numPressed == false){
        numPressed = true;
        screenText.innerText = "";
    }
    screenText.innerText += num;
}

let screenText = document.querySelector(".screenText");
let oneButton = document.querySelector("#numberOne");
oneButton.addEventListener("click", () => numPress(1));

let twoButton = document.querySelector("#numberTwo");
twoButton.addEventListener("click", () => numPress(2));

let threeButton = document.querySelector("#numberThree");
threeButton.addEventListener("click", () => numPress(3));

let fourButton = document.querySelector("#numberFour");
fourButton.addEventListener("click", () => numPress(4));

let fiveButton = document.querySelector("#numberFive");
fiveButton.addEventListener("click", () => numPress(5));

let sixButton = document.querySelector("#numberSix");
sixButton.addEventListener("click", () => numPress(6));

let sevenButton = document.querySelector("#numberSeven");
sevenButton.addEventListener("click", () => numPress(7));

let eightButton = document.querySelector("#numberEight");
eightButton.addEventListener("click", () => numPress(8));

let nineButton = document.querySelector("#numberNine");
nineButton.addEventListener("click", () => numPress(9));

let zeroButton = document.querySelector("#numberZero");
zeroButton.addEventListener("click", () => numPress(0));