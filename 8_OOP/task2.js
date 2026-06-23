class Shape{
    constructor(name, sides){
        this._name = name;
        this._sides = sides;
    }
}

class Square extends Shape{
    constructor(sideLength){
        super('square', 4);
        this._sideLength = sideLength;
    }
    calcPerimeter(){
        return this._sides * this._sideLength;
    }
    caclArea(){
        return this._sideLength * this._sideLength;
    }
}

const square = new Square(5);
console.log(`Фигура: ${square._name}. Количество строн: ${square._sides}.`)
console.log(`Периметр: ${square.calcPerimeter()}`);
console.log(`Площадь: ${square.caclArea()}`);