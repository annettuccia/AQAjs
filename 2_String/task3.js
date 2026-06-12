const monthNumber = 1;
let result3 = ""; // const поменяла на let, так как будем присваивать

switch (monthNumber) {
    case 1:          // убрала кавычки
        result3 = "January";
        break;
    case 2:         // убрала кавычки
        result3 = "February";
        break;
    case 3:         // убрала кавычки
        result3 = "March";
        break;       // добавила break
    case 4:         // убрала кавычки
        result3 = "April";
        break;
    case 5:
        result3 = "May";  // исправила results3 на result3
        break;
    case 6:               // добавила двоеточие
        result3 = "June"; // исправила == на =
        break;
    default:
        result3 = "Invalid month";
}

console.log(result3); // January