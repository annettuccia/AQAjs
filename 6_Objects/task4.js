const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key);
}

// 2. Будут выведены все ключи свойств объекта “person”.
// Потому что цикл перебирает перечисляемые свойства объекта и возвращая ключи (названия) свойств