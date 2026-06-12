let n = 5;
let stars = 1;
let spaces = 2;

// Верхняя половина
for (let i = 0; i < 3; i++) {
    let line = "";
    for (let s = 0; s < spaces; s++) {
        line += " ";
    }
    for (let st = 0; st < stars; st++) {
        line += "*";
    }
    console.log(line);
    stars += 2;
    spaces--;
}

// Нижняя половина
stars = 3;
spaces = 1;
for (let i = 0; i < 2; i++) {
    let line = "";
    for (let s = 0; s < spaces; s++) {
        line += " ";
    }
    for (let st = 0; st < stars; st++) {
        line += "*";
    }
    console.log(line);
    stars -= 2;
    spaces++;
}