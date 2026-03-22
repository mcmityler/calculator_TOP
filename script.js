
let number1 = 0;
let number2 = 0;
let operator = "";

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

let screenText = document.querySelector(".screenText");
let oneButton = document.querySelector("#numberOne");
oneButton.addEventListener("click", () => screenText.innerText += "1")

let twoButton = document.querySelector("#numberTwo");
twoButton.addEventListener("click", () => screenText.innerText += "2")

let threeButton = document.querySelector("#numberThree");
threeButton.addEventListener("click", () => screenText.innerText += "3")

let fourButton = document.querySelector("#numberFour");
fourButton.addEventListener("click", () => screenText.innerText += "4")

let fiveButton = document.querySelector("#numberFive");
fiveButton.addEventListener("click", () => screenText.innerText += "5")

let sixButton = document.querySelector("#numberSix");
sixButton.addEventListener("click", () => screenText.innerText += "6")

let sevenButton = document.querySelector("#numberSeven");
sevenButton.addEventListener("click", () => screenText.innerText += "7")

let eightButton = document.querySelector("#numberEight");
eightButton.addEventListener("click", () => screenText.innerText += "8")

let nineButton = document.querySelector("#numberNine");
nineButton.addEventListener("click", () => screenText.innerText += "9")

let zeroButton = document.querySelector("#numberZero");
zeroButton.addEventListener("click", () => screenText.innerText += "0")