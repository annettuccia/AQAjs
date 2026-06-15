function calculate(a, b, operator){
    switch(operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
           if (b !== 0) {
                return a / b;
            } else {
                return "Ошибка! Деление на ноль.";
            }
        default:
            return "Unknown operator. Try again."
    }
}

console.log(calculate(10, 3, "+"));
console.log(calculate(10, 3, "-"));
console.log(calculate(10, 3, "*"));
console.log(calculate(10, 3, "/"));
console.log(calculate(10, 0, "/"));
console.log(calculate(10, 3, "++"));