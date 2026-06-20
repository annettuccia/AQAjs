class Shape{
    constructor(name, sides, sideLength){
        this._name = name;
        this._sides = sides;
        this._sideLength = sideLength;
    }
    calcPerimeter(){
        const perimeter = this._sides * this._sideLength;
        console.log(`Периметр фигуры ${this._name} равен: ${perimeter}`)
    }
}

const square = new Shape('square', 4, 5);
square.calcPerimeter();

const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();