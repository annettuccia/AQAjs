let coffeeType = "латте"; // варианты: латте, капучино, эспрессо
let size = "medium"; // small, medium, large
let price = 0;
let name = "";
let recipe = "";

// Цены
if (size === "small") {
    price = 150;
} else if (size === "medium") {
    price = 200;
} else if (size === "large") {
    price = 250;
} else {
    price = 0;
}

// Выбор кофе
if (coffeeType === "латте") {
    name = "Латте";
    recipe = "Эспрессо + вспененное молоко + тонкий слой молочной пенки";
} else if (coffeeType === "капучино") {
    name = "Капучино";
    recipe = "Эспрессо + горячее молоко + толстая молочная пенка + какао";
} else if (coffeeType === "эспрессо") {
    name = "Эспрессо";
    recipe = "Чистый кофе из кофемашины под высоким давлением";
} else {
    name = "Неизвестный кофе";
    recipe = "Нет рецепта";
}

console.log(name);
console.log("Размер: " + size);
console.log("Рецепт: " + recipe);
console.log("Стоимость: " + price + " руб.");