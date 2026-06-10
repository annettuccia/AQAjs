let age = 18;
let isAdult = age >= 18;
let typeOfIsAdult = typeof isAdult;
console.log(typeOfIsAdult);

//typeOfIsAdult = boolean, так как при age=18 условие 18>=18 истинно следовательно 
// isAdult = true и typeof true возвращает строку "boolean"