// 1. Деструктуризация массива
const arr = [10, 20, 30, 40];

// a — первый элемент, b — второй, c — пропускаем третий
const [a, b, , c] = arr; // с получает четвертый элемент

console.log(`\na = ${a}, b = ${b}, c = ${c}`);

// 2. Объединение массивов
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

const mergedArray = [...array1, ...array2, ...array3];
console.log('Объединенный массив:', mergedArray);