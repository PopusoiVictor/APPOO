var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Square = /** @class */ (function () {
    function Square(a) {
        this.a = a;
    }
    Square.prototype.SquareArea = function (a) {
        var result = a * a;
        console.log("-----SQUARE-----");
        console.log("Square sides: a = " + a);
        console.log("Square area: " + result);
    };
    return Square;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.RectanglePerimeter = function (a, b) {
        var result = (2 * a) + (2 * b);
        console.log("-----RECTANGLE-----");
        console.log("Rectangle sides: a = " + a + ", b = " + b);
        console.log("Rectangle perimeter: " + result);
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(r) {
        this.r = r;
    }
    Circle.prototype.CircleArea = function (r) {
        var pi = 3.14;
        var result = pi * Math.pow(r, 2);
        console.log("-----CIRCLE-----");
        console.log("Circle radius: r = " + r);
        console.log("Circle area: " + result);
    };
    return Circle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = a;
        this.c = a;
    }
    Triangle.prototype.TrianglePerimeter = function (a, b, c) {
        var result = a + b + c;
        console.log("-----TRIANGLE-----");
        console.log("Triangle sides: a = " + a + ", b = " + b + ", c = " + c);
        console.log("Triangle perimeter: " + result);
    };
    return Triangle;
}());
var Type = /** @class */ (function (_super) {
    __extends(Type, _super);
    function Type() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Type.prototype.TriangleType = function (a, b, c) {
        if (a === b === c) {
            console.log("Triangle is equilateral");
        }
        else if (a != b != c) {
            console.log("Triangle is scalene");
        }
        else if (a === b || a === c || b === c) {
            console.log("Triangle is isosceles");
        }
    };
    return Type;
}(Triangle));
var square = new Square(5);
square.SquareArea(5);
var rectangle = new Rectangle(5, 7);
rectangle.RectanglePerimeter(5, 7);
var circle = new Circle(4);
circle.CircleArea(4);
var triangle = new Type(5, 6, 7);
triangle.TrianglePerimeter(5, 6, 7);
triangle.TriangleType(5, 6, 7);
