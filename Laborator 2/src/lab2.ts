import {IComputerDescription} from "./interfaceBad"
class Desktop implements IComputerDescription {
    public desktopPrice: number 
    constructor(desktopPrice : number) {
        this.desktopPrice = desktopPrice
    }
    public GetDescription(): string{
        return "Calculator Desktop";
    }     
    public GetColor(){
        return "Negru";
    }
    public GetPrice(){
        return this.desktopPrice;
    }
    public CalculatePriceWithDiscount() : any {
        return this.desktopPrice - this.desktopPrice * 0.1;
    }
}
class Laptop implements IComputerDescription {
    public laptopPrice : number
    constructor(laptopPrice : number) {
        this.laptopPrice = laptopPrice
    }
    public GetDescription(): string {
        return "Laptop"
    }
    public GetColor(): string {
        return "Negru, alb"
    }
    public GetPrice(): number {
        return this.laptopPrice
    }
    public CalculatePriceWithDiscount() : any {
        return this.laptopPrice - this.laptopPrice * 0.1;
    }
}
class GiftItem implements IComputerDescription {
    public GetDescription(): string {
        return "Stick USB"
    }
    public GetColor(): string {
        return "Rosu, negru, alb"
    }
    public GetPrice(){
        return 0;
    }
    public CalculatePriceWithDiscount(){
        return 0;
    }
}
class Shop {
    public GetMyComputer(cmptype : IComputerDescription) {
        var myComp = cmptype.GetDescription();
        return myComp;
    }
    public GetMyComputerPrice(cmptype : IComputerDescription): any {
        var myCompprice = "Pretul este " + cmptype.CalculatePriceWithDiscount();
        return myCompprice;
    }
    public GetAvailableColor(cmptype : IComputerDescription): any {
        var myCompcolor = cmptype.GetColor();
        return myCompcolor;
    }
    public WhatIsTheColorOfGiftItem(cmptype : IComputerDescription) {
        return this.GetAvailableColor(cmptype);
    }
    public IsThereAnyGiftItem(gftType : IComputerDescription) {
        return this.GetMyComputer(gftType);
    }
}
const queryForLaptop = new Laptop(18999);
const queryForDesktop = new Desktop(30000);
const queryForGiftItem = new GiftItem();
const computerShop = new Shop();
const laptopType = computerShop.GetMyComputer(queryForLaptop);
const desktopType = computerShop.GetMyComputer(queryForDesktop);
const priceAnswerLaptop = computerShop.GetMyComputerPrice(queryForLaptop);
const priceAnswerDesktop = computerShop.GetMyComputerPrice(queryForDesktop);
const anyGiftAnswer = computerShop.IsThereAnyGiftItem(queryForGiftItem);
const colorAnswer = computerShop.WhatIsTheColorOfGiftItem(queryForGiftItem);
const myAnswer = computerShop.GetAvailableColor(queryForLaptop);
console.log("cumparator: Care este pretul unui laptop si calculator desktop?")
console.log("vinzator: " + priceAnswerLaptop + " pentru laptop si pentru desktop " + priceAnswerDesktop);
console.log("vinzator: " + laptopType + " sau " + desktopType + "?");
console.log("cumparator: Daca procur un laptop voi primi un cadou sau ceva gratuit?")
console.log("vinzator: " + anyGiftAnswer);
console.log("cumparator: Care sunt culorile disponibile pentru stick-ul usb?")
console.log("vinzator: " + colorAnswer);
console.log("cumparator: Care sunt culorile disponibile pentru laptop?")
console.log("vinzator: " + myAnswer)

