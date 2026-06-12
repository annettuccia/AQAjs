let year = 2026;
let isLeap = false;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeap = true;
        } else {
            isLeap = false;
        }
    } else {
        isLeap = true;
    }
} else {
    isLeap = false;
}

if (isLeap) {
    console.log(year + " год - високосный");
} else {
    console.log(year + " год - не високосный");
}