let wallHeight = 5;
let upPerDay = 3;
let downPerNight = 2;
let days;

if (wallHeight <= upPerDay) {
    days = 1;
} else {
    let remainingHeight = wallHeight - upPerDay;
    let netProgress = upPerDay - downPerNight;
    days = Math.ceil(remainingHeight / netProgress) + 1;
}

console.log("Улитка доползет за " + days + " дней");