class Person{
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male"){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._gender = gender;
    }
    sayFullName(){
        return this._firstName + " " + this._lastName;
    }
    greetExtraTerrestrials(raceName){
        return `Welcome to Planet Earth ${raceName}`;
    }
}

const person1 = new Person();
console.log(person1.sayFullName());
console.log(person1.greetExtraTerrestrials('Martians'));

const person2 = new Person('Alisya', 'Lue', 25, 'Female');
console.log(person2.sayFullName());