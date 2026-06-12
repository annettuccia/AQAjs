let height = 5;
let up = 3;
let down = 2;
let current = 0;

for (let days = 1; days <= 10; days++) {
    current += up;
    if (current >= height) {
        console.log("Дней потребуется:", days); // 3
        break;
    }
    current -= down;
}