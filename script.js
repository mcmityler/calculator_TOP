
let number1 = 0;
let number2 = 0;
let operator = "";
let isNumberStarted = false; //clears screen when you start a new number


function operate(num1, num2, operate){

    switch(operate){
        case "+":
            return addition(num1,num2);
        case "-":
            return subtraction(num1,num2);
        case "/":
            return division(num1,num2);
        case "*":
            return multi(num1,num2);
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
    if(isNumberStarted == false){
        isNumberStarted = true;
        screenText.innerText = "";
    }
    screenText.innerText += num;
}

let screenText = document.querySelector(".screenText");


//NUMBER BUTTONS
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

//OPERATOR BUTTONS
let addButton = document.querySelector(".add");
addButton.addEventListener('click',  () => setOperator("+"));

let subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener('click',  () => setOperator("-"));

let multiButton = document.querySelector(".multi");
multiButton.addEventListener('click',  () => setOperator("*"));

let divideButton = document.querySelector(".divide");
divideButton.addEventListener('click', () => setOperator("/"));

function setOperator(opp){
    if(operator === ""){
        number1 = Number(screenText.textContent);
        isNumberStarted = false;
    }
    operator = opp;
    console.log(operator);
}


let equalButton = document.querySelector(".equals");
equalButton.addEventListener('click',  () => equals());

function equals(){
    number2 = Number(screenText.textContent);
    console.log(`num1: ${number1} num2: ${number2} operator: ${operator} calculation: ${operate(number1, number2, operator)}`)
    screenText.textContent = operate(number1, number2, operator);
    operator = "";
    isNumberStarted = false;
}
