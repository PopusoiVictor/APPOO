interface ISquare {
    SquareArea(a: number)
}
interface IRectangle {
    RectanglePerimeter(a: number, b: number)
}
interface ICircle {
    CircleArea(r: number)
}
interface ITriangle {
    TrianglePerimeter(a: number, b: number, c: number)
}
interface IType {
    TriangleType(a: number, b: number, c: number)
}
class Square implements ISquare {
    public a: number
    constructor(a: number) {
        this.a = a
    }
    SquareArea(a): void {
        let result = a * a
        console.log("-----SQUARE-----")
        console.log("Square sides: a = " + a)
        console.log("Square area: " + result)
    }
}
class Rectangle implements IRectangle {
    public a: number
    public b: number
    constructor(a: number, b: number) {
        this.a = a
        this.b = b
    }
    RectanglePerimeter(a, b): void {
        let result = (2 * a) + (2 * b)
        console.log("-----RECTANGLE-----")
        console.log("Rectangle sides: a = " + a + ", b = " + b)
        console.log("Rectangle perimeter: " + result)
    }
}
class Circle implements ICircle {
    public r: number
    constructor(r: number) {
        this.r = r
    }
    CircleArea(r): void {
        let pi = 3.14
        let result = pi * Math.pow(r, 2)
        console.log("-----CIRCLE-----")
        console.log("Circle radius: r = " + r)
        console.log("Circle area: " + result)
    }
}
class Triangle implements ITriangle {
    public a: number
    public b: number
    public c: number
    constructor(a: number, b: number, c: number) {
        this.a = a
        this.b = a
        this.c = a
    }
    TrianglePerimeter(a, b, c): void {
        let result = a + b + c
        console.log("-----TRIANGLE-----")
        console.log("Triangle sides: a = " + a + ", b = " + b + ", c = " + c)
        console.log("Triangle perimeter: " + result)
    }
}
class Type implements IType {
    public a: number
    public b: number
    public c: number
    constructor(a: number, b: number, c: number) {
        this.a = a
        this.b = b
        this.c = c
    }
    TriangleType(a, b, c): void {
        if (a === b === c) {
            console.log("Triangle is equilateral")
        }
        else if (a != b != c) {
            console.log("Triangle is scalene")
        }
        else if (a === b || a === c || b === c) {
            console.log("Triangle is isosceles")
        }
    }
}
const area = new FigureArea(5, 7)
area.SquareArea(5)
area.CircleArea(7)
const perimeter = new FigurePerimeter(5, 7, 5)
perimeter.RectanglePerimeter(5, 7)
perimeter.TrianglePerimeter(5, 7, 6)
const type = new Type(5, 6, 7)
type.TriangleType(5, 6, 7)