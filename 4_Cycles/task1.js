let maxNumber = 9;
let minNumber = 0;

do{
    let spaces = "";
    let spaceCount = 0;
    while(spaceCount < minNumber * 2){
        spaces += " ";
        spaceCount++;
    }

    let decreasing = "";
    let k = maxNumber - minNumber;
    while(k >= 0){
        decreasing += k + " ";
        k--;
    }
    
    let increasing = "";
    let m = 1;
    while(m <= maxNumber - minNumber){
        increasing += m + " ";
        m++;
    }
    
    console.log(spaces + decreasing + increasing)
    minNumber++
}while (minNumber <= maxNumber)