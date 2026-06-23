class Car{
    constructor(model, color, productionYear){
        this._model = model;
        this._color = color;
        this._year = productionYear;
    }
}

class Zhigulu extends Car{
    constructor(model, color, productionYear, productionPlace, maxSpeed){
        super(model, color, productionYear);
        this._place = productionPlace;
        this._maxSpeed = maxSpeed;
    }

    getInformation(){
        return `Модель: ${this._model}. Цвет: ${this._color}. Год выпуска: ${this._year}. Место производства: ${this._place}. Максимальная скорость: ${this._maxSpeed} км/ч.`;
    }
}

const zhiguli = new Zhigulu('ВАЗ 2107', 'белый', 2005, 'Тольятти', 150);
console.log(zhiguli.getInformation());