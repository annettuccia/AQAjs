function snailClimb(wallHeight, dayClimb, nightSlide) {
    function isAtTop(currentHeight) {
        return currentHeight >= wallHeight;
    }
    
    let currentHeight = 0;
    let days = 0;
    while (currentHeight < wallHeight) {
        days++;
        currentHeight += dayClimb;
        if (isAtTop(currentHeight)) {
            return days;
        }
        currentHeight -= nightSlide;
    }
    return days;
}

const daysNeeded = snailClimb(5, 3, 2);
console.log(`Улитка доползет за ${daysNeeded} дней`);