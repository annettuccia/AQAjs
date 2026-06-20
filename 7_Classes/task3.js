class Employee{
    constructor(name, age, position, salary){
        this._name = name;
        this._age = age;
        this._position = position;
        this._salary;
    }

    get age(){
        return this._age;
    }
    set age(newAge){
        this._age = newAge;
    }

    get position(){
        return this._position;
    }
    set position(newPosition){
        this._position = newPosition;
    }

    get salary(){
        return this._salary;
    }
    set salary(newSalary){
        this._salary = newSalary;
    }
}

const emoloyee = new Employee('Иванов Иван', 28, 'Разработчик', 4000);
console.log(emoloyee.age);
emoloyee.position = 'Head of department';
console.log(emoloyee);