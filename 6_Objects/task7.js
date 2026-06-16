const desserts = [
        { name: "Пирожное", price: 65 },
        { name: "Мороженое", price: 35 },
        { name: "Торт Наполеон", price: 250 },
        { name: "Песочное Печенье", price: 50 },
        { name: "Пудинг", price: 80 },
        { name: "Фруктовый Тарт", price: 40 },
        { name: "Желе Земляничное", price: 40 },
        { name: "Вафли Шоколадные", price: 36 },
        { name: "Булочка с Изюмом", price: 28 }
    ];

const cheapest = desserts.reduce((min, current) => current.price < min.price ? current : min);
const mostExpensive = desserts.reduce((max, current) => current.price > max.price ? current : max);

console.log(`Самый дешевый десерт - ${cheapest.name} (${cheapest.price} руб.)`);
console.log(`Самый дорогой десерт - ${mostExpensive.name} (${mostExpensive.price} руб.)`);