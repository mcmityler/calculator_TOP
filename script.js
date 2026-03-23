
let number1 = 0;
let number2 = 0;
let operator = "";
let isNumberStarted = false; //clears screen when you start a new number
let isNumOne = true; //mini screen to keep track of first or second number input
let answer = 0;

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
    if(isNumberStarted === false){
        isNumberStarted = true;
        screenText.innerText = "";
        if(isNumOne === true){
            number2 = 0;
        }
    }
    screenText.innerText += num;
    if(isNumOne){
        number1 = Number(screenText.textContent);
        highlightMini("num1");

    }
    else{
        number2 = Number(screenText.textContent);
        highlightMini("num2");
    }
    setMiniScreen();

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
    if(isNumOne === true && isNumberStarted === false){
        number1 = answer;
        number2 = 0;
        answer = 0;
    }
    if(operator === ""){
        isNumberStarted = false; //knows its now a new number
        isNumOne = false; // now is entering the second number
    }
    if(isNumOne === false && isNumberStarted === true){
        //num2 has been started and another operator has been entered
        //make num 1 the answer and set new operator
        answer = operate(number1, number2, operator);
        screenText.textContent = answer;
        isNumberStarted = false;
        number1 = answer;
        answer = 0;
        number2 = 0;
    }
    operator = opp;
   
    

    setMiniScreen();
    highlightMini("operator");
    console.log(operator);
    
}


let equalButton = document.querySelector(".equals");
equalButton.addEventListener('click',  () => equals());

let lastOperator = "";

function equals(){
    if(operator === "" && lastOperator !== "") {
        number1 = answer;
        answer = operate(number1, number2, lastOperator);
        console.log(answer);
        screenText.textContent = answer;
        highlightMini("equals");
        setMiniScreen(lastOperator);
        
        return;
    }; //stop it from being clicked multiple times and removing
    answer = operate(number1, number2, operator);
    console.log(`num1: ${number1} num2: ${number2} operator: ${operator} calculation: ${answer}`)
    screenText.textContent = answer;
    lastOperator = operator;
    setMiniScreen();
    operator = "";
    isNumberStarted = false;
    isNumOne = true;
    highlightMini("equals");

}


let miniScreenText = document.querySelector(".miniScreenText");
let miniScreenNum1 = document.querySelector(".miniNum1");
let miniScreenNum2 = document.querySelector(".miniNum2");
let miniScreenOperator = document.querySelector(".miniOperator");
let miniScreenEquals = document.querySelector(".miniEquals");

function setMiniScreen(lastOpp = ""){
    miniScreenNum1.innerText = `${number1} `
    miniScreenNum2.innerText = `${number2} `
    miniScreenOperator.innerText = `${operator === "" ? (lastOpp === "" ? "operator" : lastOperator ) : operator} `
    miniScreenEquals.innerText = `= ${operate(number1, number2, operator === "" ? (lastOpp === "" ? "" : lastOperator ) : operator)}`

    
}
function highlightMini(stage){
    miniScreenEquals.classList.remove("miniHighlight");
    miniScreenOperator.classList.remove("miniHighlight");
    miniScreenNum1.classList.remove("miniHighlight");
    miniScreenNum2.classList.remove("miniHighlight");

    switch(stage){
        case "num1":
            miniScreenNum1.classList.add("miniHighlight");
            break;
            case "operator":
            miniScreenOperator.classList.add("miniHighlight");
                break;
            case "num2":
            miniScreenNum2.classList.add("miniHighlight");
            break;
        case "equals":
            miniScreenEquals.classList.add("miniHighlight");
            break;
    }
}
