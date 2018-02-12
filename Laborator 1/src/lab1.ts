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