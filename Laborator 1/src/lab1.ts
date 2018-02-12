interface IVehicle {
    nr(number: string)
}
abstract class Car implements IVehicle {
    private model: string
    private number: string
    public engineModel(): string {
        switch (this.model) {
            case 'TDI':
                return this.model = 'Engine ' + `${this.model}`
            case 'CDI':
                return this.model = 'Engine ' + `${this.model}`
            default:
                return this.model = 'Only TDI and CDI engine'
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
        console.log(`${this.engineModel()} have the number ${number}`)
    }
}
const engine: IVehicle = new Engine('TDI')
engine.nr('H22AM03737')