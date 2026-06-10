// КОД ПОДПУНКТА A
const number = 15;
const result = number + 5;
console.log(result);
// Код выведет: 20
// Потому что это простое сложение чисел - обе переменные (number и число 5) числа и оператор "+" выполняет сложение

// КОД ПОДПУНКТА B
const number2 = "28";
const result = number2 + 2;
console.log(result);
// Код выведет: 282
// Потому что number2 - это строка, а оператор "+" при сложении строки и числа (в данном случае это число 2) выполняет 
// склеивание строк (если не ошибаюсь, это называется конкатенацией)

// КОД ПОДПУНКТА C
console.log( null || 2 || undefined );
// Код выведет: 2
// Потому что оператор || выводит первое истинное значение, так как null - false, переход дальше и проверка 2 - true; 
// до underfined очередь не доходит

// КОД ПОДПУНКТА D
const x = 5;
const y = 10;

console.log(x > 0 && y < 20); 
console.log(x < 0 && y > 0); 
console.log(x < 0 && y < 0); 
console.log(x > 0 && "Hello");
// Код выведет: true, false, false, Hello
// Потому что оператор && возвращает первое ложное значение, а если все истинны — последнее: 
// 5>0=true, 10<20=true оба истинны возвращается true; 5<0 = false возвращается false остальное не проверяется; 
// 5<0=false возвращается false; 5>0=true проверяет "Hello" (истинно)  возвращается "Hello"

// КОД ПОДПУНКТА E
const a = 0;
const b = "World";

console.log(a > 0 || b.length > 0); 
console.log(a > 0 || b.length === 0); 
console.log(a > 0 || ""); 
console.log(a < 0 || "Hello");
// Код выведет: true, false, "", "Hello"
// Потому что оператор || возвращает первое истинное значение: a>0=false проверяет b.length>0=5>0=true возвращается true; 
// a>0=false проверяет b.length===0=5===0=false возвращается false; a>0=false проверяет "" (пустая строка) = ложное значение возвращается ""; 
// a<0=false проверяет "Hello" истинное возвращается "Hello"

// КОД ПОДПУНКТА F
let x = 5;
let y = 10;
let z = 15;
let result = (x > y || y < z) && !(z === x);
// Код выведет: true
// Потому что 1. x > y = 5 > 10 = false; 2. y < z = 10 < 15 = true; 3. false || true = true;
// 4. z === x = 15 === 5 = false; 5. !(false) = true; 6. true && true = true