let testScore1 = 85;
let testScore2 = 92;
let isActive = true;
let complexity = 0.95;

let averageScore = (testScore1 + testScore2) / 2.0;
let overallScore = averageScore * complexity;

let isSuccessful = (overallScore >= 90) && isActive;

let finalGrade;
switch(true){
    case overallScore >= 95:
        finalGrade = 'A';
        break;
    case overallScore >= 85:
        finalgrade = 'B';
        break;
    case overallScore >= 75:
        finalGrade = 'C';
        break;
    default:
        finalGrade = 'D';
        break;
}

console.log(`Общий средний балл: ${overallScore.toFixed(2)}. Средний балл без коэффициента сложности - ${averageScore.toFixed(2)}`);
console.log(`Статус успешности: ${isSuccessful}`);
console.log(`Финальная оценка: ${finalGrade}`);