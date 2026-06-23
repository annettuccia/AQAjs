class Dog{
    constructor(name, breed){
        this._name = name;
        this._breed = breed;
    }
    getFood(foodType = null, amount = null, brand = null){
        if(!foodType && !amount && !brand){
            return `All dogs love to eat!`;
        }
        let message = `${this._breed} ${this._name} eats`;
        if(amount){
            message += ` ${amount} bowls a day of`
        }
        if(foodType){
            message += ` ${foodType} food`
        }
        if(brand){
            message += ` by ${brand}`;
        }
        return message + '.';
    }
}

const dog1 = new Dog('Sun', 'Any');
console.log(dog1.getFood());

const dog2 = new Dog('Masha', 'Shepherd');
console.log(dog2.getFood('dry'));

const dog3 = new Dog('Demi', 'Poodle');
console.log(dog3.getFood('wet', 2));

const dog4 = new Dog('Henry', 'Corgi');
console.log(dog4.getFood('dry', 3, 'Royаl Canin'));