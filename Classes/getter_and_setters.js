class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
        this.numberRequestForArea = 0;
    }

    get area(){
        this.numberRequestForArea ++;
        return this.width  * this.height;
    }
    set area (area){
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}


let square1 = new Square(25);

console.log(square1.area);

square1.area = 30;

console.log(square1.area);
console.log(square1.area);
console.log(square1.area);

console.log(square1.numberRequestForArea); 