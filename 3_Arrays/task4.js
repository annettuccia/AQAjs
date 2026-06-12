// Первая последовательность
const seq1 = ['(', ')', '(', ')', ')'];
// Вторая последовательность
const seq2 = ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a'];
// Третья последовательность
const seq3 = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')'];

// Проверка для первой последовательности
let stack = [];
let isValid = true;

for (let i = 0; i < seq1.length; i++) {
    if (seq1[i] === '(' || seq1[i] === '{' || seq1[i] === '[') {
        stack.push(seq1[i]);
    } else if (seq1[i] === ')' || seq1[i] === '}' || seq1[i] === ']') {
        if (stack.length === 0) {
            isValid = false;
            break;
        }
        let last = stack.pop();
        if ((seq1[i] === ')' && last !== '(') ||
            (seq1[i] === '}' && last !== '{') ||
            (seq1[i] === ']' && last !== '[')) {
            isValid = false;
            break;
        }
    }
}
if (stack.length !== 0) isValid = false;
console.log("Первая последовательность:", isValid);

// Для второй последовательности
stack = [];
isValid = true;
for (let i = 0; i < seq2.length; i++) {
    if (seq2[i] === '(' || seq2[i] === '{' || seq2[i] === '[') {
        stack.push(seq2[i]);
    } else if (seq2[i] === ')' || seq2[i] === '}' || seq2[i] === ']') {
        if (stack.length === 0) {
            isValid = false;
            break;
        }
        let last = stack.pop();
        if ((seq2[i] === ')' && last !== '(') ||
            (seq2[i] === '}' && last !== '{') ||
            (seq2[i] === ']' && last !== '[')) {
            isValid = false;
            break;
        }
    }
}
if (stack.length !== 0) isValid = false;
console.log("Вторая последовательность:", isValid);

// Для третьей последовательности
stack = [];
isValid = true;
for (let i = 0; i < seq3.length; i++) {
    if (seq3[i] === '(' || seq3[i] === '{' || seq3[i] === '[') {
        stack.push(seq3[i]);
    } else if (seq3[i] === ')' || seq3[i] === '}' || seq3[i] === ']') {
        if (stack.length === 0) {
            isValid = false;
            break;
        }
        let last = stack.pop();
        if ((seq3[i] === ')' && last !== '(') ||
            (seq3[i] === '}' && last !== '{') ||
            (seq3[i] === ']' && last !== '[')) {
            isValid = false;
            break;
        }
    }
}
if (stack.length !== 0) isValid = false;
console.log("Третья последовательность:", isValid);