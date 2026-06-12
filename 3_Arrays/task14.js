const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) { // Проверка на нечетные индексы
        sum += numbers[i];
    }
}
console.log(sum);

// Результат: 6. Потому что суммируются элементы с индексами 1 и 3 (2 + 4 = 6)