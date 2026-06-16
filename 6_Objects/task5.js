const person = {
name: "John",
age: 30,
occupation: "Engineer",
sayHello: function() {
  		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
};

person.sayHello();

// 1. Hello, my name is John and I am 30 years old.
// Потому что this внутри метода ссылается на объект person
// this.name = "John", this.age = 30 и строка подставляет эти значения