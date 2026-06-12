let age = 8;
let isStudent = false;
let basePrice = 100;
let discount = 0;
let finalPrice;

if (age < 2) {
    console.log("Бесплатно");
} else {
    if (age < 10) {
        discount = 50;
    } else if (age >= 65) {
        discount = 15;
    } else if (isStudent === true) {
        discount = 10;
    }
    
    finalPrice = basePrice * (100 - discount) / 100;
    console.log("Стоимость билета: " + finalPrice + " руб. (скидка " + discount + "%)");
}