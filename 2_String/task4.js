let day = "monday";
let message;

if (day === "monday") {     // изменила на нижний регистр
     message = "It's Monday!";
} 
else if (day === "tuesday") {       // изменила на нижний регистр
     message = "It's Tuesday!";
} 
else if (day === "wednesday") {     // изменила на нижний регистр
     message = "It's Wednesday!";
} 
else if (day === "thursday") {
     message = "It's Thursday!";
} 
else if (day === "friday") {        // изменила на нижний регистр
     message = "It's Friday!";
} 
else if (day === "saturday") {      // изменила на нижний регистр
     message = "Its Saturday!";       // исправила Sunday на Saturday
} 
else if (day === "sunday") {        // изменила на нижний регистр
     message = "It's Sunday!";
} 
else {
     message = "Invalid day!";
}

console.log(message); // It's Monday!