function greet(name) {
    if (name === undefined) {
        return "Hello, stranger!";
    }
    else {
        return "Hello, " + name + "!";
    }
}
console.log(greet());

// a. "Hello, stranger!"
// Потому что при вызове greet без аргуметна значению name присваивается значение underfined; 
// условие name === undefined возвращает true