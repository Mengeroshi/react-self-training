
class Rectangle{
    constructor(width, height, color){
        console.log("Rectangle created!!!");
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea(){
        return this.width * this.height;
    }

    printDescription(){
        return `I am rectangle of ${this.width} x ${this.height} and I am ${this.color}`;
    }
}

let myRectangle1 = new Rectangle(3, 5, "blue");

let myRectangle2 = new Rectangle(10, 5, "red");

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());

console.log(myRectangle1.printDescription());