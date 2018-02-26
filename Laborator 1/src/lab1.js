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
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    Car.prototype.Model = function () {
        switch (this.model) {
            case 'TDI':
                return this.model = 'Engine ' + ("" + this.model);
            case 'CDI':
                return this.model = 'Engine ' + ("" + this.model);
            case 'BBS':
                return this.model = 'Wheels ' + ("" + this.model);
            default:
                return this.model = 'The model do not';
        }
    };
    return Car;
}());
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine(model) {
        return _super.call(this, model) || this;
    }
    Engine.prototype.nr = function (number) {
        console.log(this.Model() + " have the number " + number);
    };
    return Engine;
}(Car));
var Wheel = /** @class */ (function (_super) {
    __extends(Wheel, _super);
    function Wheel(model) {
        return _super.call(this, model) || this;
    }
    Wheel.prototype.nr = function (number) {
        console.log(this.Model() + " have the " + number);
    };
    return Wheel;
}(Car));
var engine = new Engine('TDI');
var wheel = new Wheel('BBS');
engine.nr('H22AM03737');
wheel.nr('original size 15');
