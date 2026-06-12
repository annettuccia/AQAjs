let s = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
let original = s;

s.charAt(0);
s.substring(1, 4);
s.slice(-3);
s.indexOf("l");
s.split("of");
s.replace("l", "L");
s.toUpperCase();

console.log(s === original); // true - исходная строка не изменилась
//  cтроки в JavaScript неизменяемы; все методы строк возвращают новую строку, не изменяя исходную