// THE BLOODY THING WORKS!!!! YAYYYY!!

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let operator = prompt("Enter Operator");
let result = 0;
if (operator === "+") {
    result = num1 + num2;}
else if(operator === "-") {
    result = num1 - num2;}
else if(operator === "*") {
    result = num1 * num2;}
else if(operator === "/") {
    result = num1 / num2;}
alert(num1+operator+num2+"="+result);