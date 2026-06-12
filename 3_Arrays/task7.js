const mixedArray = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];
let sum = 0;

for (let i = 0; i < mixedArray.length; i++) {
    if (Array.isArray(mixedArray[i])) {
        for (let j = 0; j < mixedArray[i].length; j++) {
            if (typeof mixedArray[i][j] === 'number') {
                sum += mixedArray[i][j];
            }
        }
    } else if (typeof mixedArray[i] === 'number') {
        sum += mixedArray[i];
    }
}
console.log("Сумма чисел:", sum); // 66