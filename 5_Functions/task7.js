function getGreetingsDeclaration() {
    return [ "Hello world!", "!Hola mundo!", "Hallo wereld!", "Привет мир!" ];
}

const getGreetingsExpression = function() {
    return [ "Hello world!", "!Hola mundo!", "Hallo wereld!", "Привет мир!" ];
};

const getGreetingsArrow = () => [ "Hello world!", "!Hola mundo!", "Hallo wereld!", "Привет мир!" ];

console.log(getGreetingsDeclaration());
console.log(getGreetingsExpression());
console.log(getGreetingsArrow());