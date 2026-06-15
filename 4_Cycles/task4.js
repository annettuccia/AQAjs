let currentRow = 1;
let maxRows = 5;

while (currentRow <= maxRows) {
    let line = "";
    let currentNumber = currentRow;
    let currentColumn = 1;
    
    while (currentColumn <= currentRow) {
        line += currentNumber + " ";
        currentNumber = currentNumber + (maxRows - currentColumn);
        currentColumn++;
    }
    
    console.log(line);
    currentRow++;
}