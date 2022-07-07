const Rectangle = function (a, b, c, d) {
    this.a = a
    this.b = b
    this.c = c
    this.d = d

    this.square = function () {
        return this.a * this.b
    }
    this.perimeter = function () {
        return this.a + this.b + this.c + this.d
    }
}
const Square = function (a, b, c, d) {
    this.a = a
    this.b = b
    this.c = c
    this.d = d

}
Square.prototype = new Rectangle


const rectangle = new Rectangle(6, 2, 6, 2)
const square = new Square(2, 2, 2, 2)

console.log(rectangle.square())
console.log(square.square())

console.log(rectangle.perimeter())
console.log(square.perimeter())