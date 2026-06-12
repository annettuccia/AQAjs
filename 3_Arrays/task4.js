// Первая последовательность
const seq1 = ['(', ')', '(', ')', ')'];
// Вторая последовательность
const seq2 = ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a'];
// Третья последовательность
const seq3 = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')'];

// Проверка для первой последовательности
let openRound = 0;
let openCurly = 0;
let openSquare = 0;
let isValid;

for(let i = 0; i < seq1.length; i++){
     switch(seq1[i]){
        case '(':
            openRound++;
            break;
        case ')':
            openRound--;
            break;
        case '{':
            openCurly++;
            break;
        case '}':
            openCurly--;
            break;
        case '[':
            openSquare++;
            break;
        case ']':
            openSquare--;
            break;
        default:
            break;
     }
}

if(openRound === 0 && openCurly === 0 && openSquare === 0){
    isValid = true;
}
else{
    isValid = false
}

console.log("Первая последовательность:", isValid);

// Проверка для второй последовательности
openRound = 0;
openCurly = 0;
openSquare = 0;
isValid;


for(let i = 0; i < seq2.length; i++){
     switch(seq2[i]){
        case '(':
            openRound++;
            break;
        case ')':
            openRound--;
            break;
        case '{':
            openCurly++;
            break;
        case '}':
            openCurly--;
            break;
        case '[':
            openSquare++;
            break;
        case ']':
            openSquare--;
            break;
        default:
            break;
     }
}

if(openRound === 0 && openCurly === 0 && openSquare === 0){
    isValid = true;
}
else{
    isValid = false
}

console.log("Вторая последовательность:", isValid);

// Проверка для третьей последовательности
openRound = 0;
openCurly = 0;
openSquare = 0;
isValid;


for(let i = 0; i < seq3.length; i++){
     switch(seq3[i]){
        case '(':
            openRound++;
            break;
        case ')':
            openRound--;
            break;
        case '{':
            openCurly++;
            break;
        case '}':
            openCurly--;
            break;
        case '[':
            openSquare++;
            break;
        case ']':
            openSquare--;
            break;
        default:
            break;
     }
}

if(openRound === 0 && openCurly === 0 && openSquare === 0){
    isValid = true;
}
else{
    isValid = false
}

console.log("Третья последовательность:", isValid);
