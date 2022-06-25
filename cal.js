const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter Second number: "));
const operator = prompt("Enter operator (+, *, /, -)");
let result
if (Operator == "+") {
    result = num1 + num2;
} else if (operator == "*") {
    result = num1 * num2;
} else if (operator == "/") {
    result = num1 / num2;
} else if (operator == "-") {
    result = num1 - num2; 
}
alert(num1 + operator + num2 +'='+ result);