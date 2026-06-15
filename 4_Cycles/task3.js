let currentNumber = 1;
let currentRow = 1;
let maxRows = 5;

while (currentRow <= maxRows) {
    let line = "";
    let currentColumn = 1;
    
    while (currentColumn <= currentRow) {
        line += currentNumber + " ";
        currentNumber++;
        currentColumn++;
    }
    
    console.log(line);
    currentRow++;
}