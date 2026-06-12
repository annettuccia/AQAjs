const numbers = [4, 81, 3, -12, 99, 14];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log("Самое маленькое число:", min); // -12