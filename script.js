
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