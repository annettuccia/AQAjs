class Human{
    constructor(name, age, interest){
        if(this.constuctor === Human){
            throw new Error("Класс имеет абстрактный тип и не может быть создан экземпляр.");
        }
        this._name = name;
        this._age = age;
        this._interest = interest;
    }
    info(){
        return `Меня зовут ${this._name}, мне ${this._age} лет, мое хобби: ${this._interest}.`;
    }
}

class Person extends Human{
    constructor(name, age, interest){
        super(name, age, interest);
    }
}

const yulia = new Person('Юля', 6, 'рисование');
console.log(yulia.info());