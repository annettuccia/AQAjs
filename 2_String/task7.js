let num1 = 10;
let num2 = 5;
let operator = "+";
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Ошибка: деление на ноль";
    }
} else {
    result = "Ошибка: неизвестный оператор";
}

console.log(num1, operator, num2, "=", result);