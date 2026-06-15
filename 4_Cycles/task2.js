let height = 10;
let i = 0;

// Верхняя часть ромба + включая середину
while (i < height) {
    let spaces = "";
    let spaceCount = height - i - 1;
    let s = 0;
    while (s < spaceCount) {
        spaces += " ";
        s++;
    }
    
    let numbers = "";
    let j = 1;
    while (j <= i + 1) {
        numbers += j;
        j++;
    }
    let k = i;
    while (k >= 1) {
        numbers += k;
        k--;
    }
    
    console.log(spaces + numbers);
    i++;
}

// Нижняя часть ромба
i = height - 2;
while (i >= 0) {
    let spaces = "";
    let spaceCount = height - i - 1;
    let s = 0;
    while (s < spaceCount) {
        spaces += " ";
        s++;
    }
    
    let numbers = "";
    let j = 1;
    while (j <= i + 1) {
        numbers += j;
        j++;
    }
    let k = i;
    while (k >= 1) {
        numbers += k;
        k--;
    }
    
    console.log(spaces + numbers);
    i--;
}