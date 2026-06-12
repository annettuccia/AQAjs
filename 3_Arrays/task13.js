for (let i = 10; i >= 1; i--) {
    let spaces = "";
    for (let s = 0; s < (10 - i) * 2; s++) {
        spaces += " ";
    }
    let numbers = "";
    for (let j = 0; j < i; j++) {
        numbers += j + " ";
    }
    console.log(spaces + numbers);
}