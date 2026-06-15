function findStringLongerThanFive(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === 'string' && array[i].length > 5){
            result.push(array[i]);
        }
    }
    return result;
}

const array1 = ["кот", "собака", "дом", "машина", "лес"];
const array2 = ["река", "солнце", "луна", "цветок", "птица"];
const array3 = ["мир", "кот", "дом", "река", "луна"];
const array4 = ["друг", "радость", "мир", "планета", "звезда"];

console.log(`\n${array1}`);
console.log(findStringLongerThanFive(array1));
console.log(`\n${array2}`);
console.log(findStringLongerThanFive(array2));
console.log(`\n${array3}`);
console.log(findStringLongerThanFive(array3));
console.log(`\n${array4}`);
console.log(findStringLongerThanFive(array4));