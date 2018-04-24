"use strict";
exports.__esModule = true;
var Desktop = /** @class */ (function () {
    function Desktop(desktopPrice) {
        this.desktopPrice = desktopPrice;
    }
    Desktop.prototype.GetDescription = function () {
        return "Calculator Desktop";
    };
    Desktop.prototype.GetColor = function () {
        return "Negru";
    };
    Desktop.prototype.GetPrice = function () {
        return this.desktopPrice;
    };
    return Desktop;
}());
var Laptop = /** @class */ (function () {
    function Laptop(laptopPrice) {
        this.laptopPrice = laptopPrice;
    }
    Laptop.prototype.GetDescription = function () {
        return "Laptop";
    };
    Laptop.prototype.GetColor = function () {
        return "Negru, alb";
    };
    Laptop.prototype.GetPrice = function () {
        return this.laptopPrice;
    };
    return Laptop;
}());
var GiftItem = /** @class */ (function () {
    function GiftItem() {
    }
    GiftItem.prototype.GetDescription = function () {
        return "Stick USB";
    };
    GiftItem.prototype.GetColor = function () {
        return "Rosu, negru, alb";
    };
    return GiftItem;
}());
var CalculateComputerPrice = /** @class */ (function () {
    function CalculateComputerPrice() {
    }
    CalculateComputerPrice.prototype.CalculatePriceWithDiscount = function (calculate) {
        return calculate.GetPrice() - calculate.GetPrice() * 0.1;
    };
    return CalculateComputerPrice;
}());
var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop.prototype.GetMyComputer = function (cmptype) {
        var myComp = cmptype.GetDescription();
        return myComp;
    };
    Shop.prototype.GetMyComputerPrice = function (cmpCal, cmpPrice) {
        var myCompprice = "Pretul este " + cmpCal.CalculatePriceWithDiscount(cmpPrice);
        return myCompprice;
    };
    Shop.prototype.GetAvailableColor = function (cmptype) {
        var myCompcolor = cmptype.GetColor();
        return myCompcolor;
    };
    Shop.prototype.WhatIsTheColorOfGiftItem = function (cmptype) {
        return this.GetAvailableColor(cmptype);
    };
    Shop.prototype.IsThereAnyGiftItem = function (gftType) {
        return this.GetMyComputer(gftType);
    };
    return Shop;
}());
var queryForLaptop = new Laptop(18999);
var queryForDesktop = new Desktop(30000);
var queryForGiftItem = new GiftItem();
var computerShop = new Shop();
var responsibleForCalculation = new CalculateComputerPrice();
var laptopType = computerShop.GetMyComputer(queryForLaptop);
var desktopType = computerShop.GetMyComputer(queryForDesktop);
var priceAnswerLaptop = computerShop.GetMyComputerPrice(responsibleForCalculation, queryForLaptop);
var priceAnswerDesktop = computerShop.GetMyComputerPrice(responsibleForCalculation, queryForDesktop);
var anyGiftAnswer = computerShop.IsThereAnyGiftItem(queryForGiftItem);
var colorAnswer = computerShop.WhatIsTheColorOfGiftItem(queryForGiftItem);
var myAnswer = computerShop.GetAvailableColor(queryForLaptop);
console.log("cumparator: Care este pretul unui laptop si calculator desktop?");
console.log("vinzator: " + priceAnswerLaptop + " pentru laptop si pentru desktop " + priceAnswerDesktop);
console.log("vinzator: " + laptopType + " sau " + desktopType + "?");
console.log("cumparator: Daca procur un laptop voi primi un cadou sau ceva gratuit?");
console.log("vinzator: " + anyGiftAnswer);
console.log("cumparator: Care sunt culorile disponibile pentru stick-ul usb?");
console.log("vinzator: " + colorAnswer);
console.log("cumparator: Care sunt culorile disponibile pentru laptop?");
console.log("vinzator: " + myAnswer);
