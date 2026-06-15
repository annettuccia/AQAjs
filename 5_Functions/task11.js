function sumNumbersInArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === 'number' && !isNaN(array[i])){
            sum += array[i];
        }
    }
    return sum;
}

const array1 = [1, 2, 3]; //6
const array2 = ['six', 6]; //6
const array3 = ['twelve', 8, 6, 'eleven', 4, 'two', 2, 'four']; //20

console.log(`\n${array1}`);
console.log(sumNumbersInArray(array1));
console.log(`\n${array2}`);
console.log(sumNumbersInArray(array2));
console.log(`\n${array3}`);
console.log(sumNumbersInArray(array3));