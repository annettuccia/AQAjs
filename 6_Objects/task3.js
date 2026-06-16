function describeAnimal(name, color, legs){
    return `This ${color} ${name} has ${legs} legs.`;
}

const animal =  {name: "dog", legs: 4, color: "yellow"};
console.log(describeAnimal(animal.name, animal.color, animal.legs));