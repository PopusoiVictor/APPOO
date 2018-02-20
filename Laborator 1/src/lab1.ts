interface IVehicle {
    nr(number: string)
}
abstract class Car implements IVehicle {
    private model: string
    private number: string
    public Model(): string {
        switch (this.model) {
            case 'TDI':
                return this.model = 'Engine ' + `${this.model}`
            case 'CDI':
                return this.model = 'Engine ' + `${this.model}`
            case 'BBS':
                return this.model = 'Wheels ' + `${this.model}`
            default:
                return this.model = 'The model do not'
        }
    }
    constructor(model: string) {
        this.model = model
    }
    abstract nr(number: string)
}
class Engine extends Car {
    constructor(model: string) {
        super(model)
    }
    nr(number): void {
        console.log(`${this.Model()} have the number ${number}`)
    }
}
class Wheel extends Car {
    constructor(model: string) {
        super(model)
    }
    nr(number): void {
        console.log(`${this.Model()} have the ${number}`)
    }
}
const engine = new Engine('TDI')
const wheel = new Wheel('BBS')
engine.nr('H22AM03737')
wheel.nr('original size 15')