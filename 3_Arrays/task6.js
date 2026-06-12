const numbers = [4, 81, 3, -12, 99, 14];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Самое большое число:", max); // 99