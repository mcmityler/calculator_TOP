
let number1 = 0;
let number2 = 0;
let operator = "";
let isNumberStarted = false; //clears screen when you start a new number
let isNumOne = true; //mini screen to keep track of first or second number input
let answer = 0;

function removeOperatorHighlight(){
     addButton.classList.remove("operatorHighlight");
    multiButton.classList.remove("operatorHighlight");
    divideButton.classList.remove("operatorHighlight");
    subtractButton.classList.remove("operatorHighlight");
    console.log("remove highlight")
}

function operate(num1, num2, operate){
    
    removeOperatorHighlight();

    switch(operate){
        case "+":
            addButton.classList.add("operatorHighlight");
            return addition(num1,num2);
        case "-":
            subtractButton.classList.add("operatorHighlight");
            return subtraction(num1,num2);
        case "/":
            divideButton.classList.add("operatorHighlight");
            return division(num1,num2);
        case "*":
            multiButton.classList.add("operatorHighlight");
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
    if(num === "." && hasDecimal === true) return;
    

    if(isNumberStarted === false){
        isNumberStarted = true;
        screenText.innerText = "";
        if(isNumOne === true){
            number2 = 0;
        }
    }
    if(num === "."){
        if(screenText.innerText === ""){ //without it isnt a real number if pressed alone
            screenText.innerText += "0";
        }
        hasDecimal= true;
    }
    screenText.innerText += num;
    if(isNumOne){
        number1 = Number(screenText.textContent);
        highlightMini("num1");

    }
    else{
        number2 = Number(screenText.textContent);
        highlightMini("num2");
        console.log("test");
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
        number1 = hasMoreThanThreeDecimalsRegex(answer) === false ? answer: answer.toFixed(3);
        hasDecimal = false;
        number2 = 0;
        answer = 0;
    }
    if(operator === ""){
        isNumberStarted = false; //knows its now a new number
        isNumOne = false; // now is entering the second number
        hasDecimal = false;

    }
    if(isNumOne === false && isNumberStarted === true){
        //num2 has been started and another operator has been entered
        //make num 1 the answer and set new operator
        answer = operate(number1, number2, operator);
        screenText.textContent = hasMoreThanThreeDecimalsRegex(answer) === false ? answer: answer.toFixed(3);
        isNumberStarted = false;
        number1 = hasMoreThanThreeDecimalsRegex(answer) === false ? answer: answer.toFixed(3);
        answer = 0;
        number2 = 0;
        hasDecimal = false;

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
        number1 = hasMoreThanThreeDecimalsRegex(answer) === false ? answer: answer.toFixed(3);
        answer = operate(number1, number2, lastOperator);
        console.log(answer);
        screenText.textContent = hasMoreThanThreeDecimalsRegex(answer) === false ? answer: answer.toFixed(3);
        highlightMini("equals");
        setMiniScreen(lastOperator);
        
        return;
    }; //stop it from being clicked multiple times and removing
    answer = operate(number1, number2, operator);
    console.log(`num1: ${number1} num2: ${number2} operator: ${operator} calculation: ${answer.toFixed(3)}`)
    screenText.textContent = hasMoreThanThreeDecimalsRegex(answer) === false ? answer: answer.toFixed(3);
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
    let tempAnswer = operate(number1, number2, operator === "" ? (lastOpp === "" ? "" : lastOperator ) : operator);
    miniScreenEquals.innerText = `= ${hasMoreThanThreeDecimalsRegex(tempAnswer) === false ? tempAnswer: tempAnswer.toFixed(3)}`

    
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

function hasMoreThanThreeDecimalsRegex(value) {
   // Convert the number to a string to handle decimal places accurately
  const numberAsString = String(value);

  // Check if the string contains a decimal point
  if (numberAsString.includes('.')) {
    // Split the string by the decimal point
    const decimalPart = numberAsString.split('.')[1];

    // Check if the length of the decimal part is greater than 3
    return decimalPart.length > 3;
  }

  // If no decimal point, it has 0 decimal places, so return false
  return false;
}

let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener('click', () => clearCalc());

function clearCalc(){
    number1 = 0;
    number2 = 0;
    hasDecimal = false;
    operator = "";
    answer = 0;
    isNumOne = true;
    isNumberStarted = false;
    setMiniScreen();
    highlightMini("num1");
    screenText.textContent = "";
}


let decimalButton = document.querySelector(".decimalButton");
decimalButton.addEventListener('click', () => numPress("."));
let hasDecimal = false;
