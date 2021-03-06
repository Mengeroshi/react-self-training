class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }
    static equals(a, b){
        return a.width * a.height === b.width * b.height;
    }

    //statics are help that don't need instantiation
    static isValidDimentions(width, height){
        return width === height;
    }
}

let square1 = new Square(8);
let square2 = new Square(8);


console.log(Square.equals(square1, square2));

console.log(Square.isValidDimentions(6,6));


let obo = [1, 2, 3, 4];
console.log(obo.slice())