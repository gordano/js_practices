const Rectangle = function (a, b) {
    this.a = a
    this.b = b

    this.area = function () {
        return this.a * this.b
    }
    this.perimeter = function () {
        return 2 * ( this.a + this.b )
    }
}
const Square = function (a) {
    this.a = a
    this.b = a

}
Square.prototype = new Rectangle


const rectangle = new Rectangle(6, 2)
const square = new Square(2)

console.log(rectangle.area())
console.log(square.area())

console.log(rectangle.perimeter())
console.log(square.perimeter())