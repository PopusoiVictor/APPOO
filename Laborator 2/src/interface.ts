export interface IComputerDescription {
    GetDescription();
    GetColor();
}
export interface IComputerPrice {
    GetPrice();
}
export interface IPriceCalculation {
    CalculatePriceWithDiscount(calculate : IComputerPrice);
}