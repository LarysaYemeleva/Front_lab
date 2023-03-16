"use strict";

const shop = (function () {
    let balance = 0;
    let waterCount = 0;
    let waterPrice = 0;
    let coffeeCount = 0;
    let coffeePrice = 0;

    function getBalance() {
        return balance;
    }

    function getWaterCount(){
        return waterCount;
    }

    function getWaterPrice(){
        return waterPrice;
    }

    function getCoffeeCount(){
        return coffeeCount;
    }

    function getCoffeePrice(){
        return coffeePrice;
    }

    function sellWater(amount) {
        const totalPrice = amount * waterPrice;
        balance += totalPrice;
        waterCount -= amount;
    }

    function buyWater(amount, price) {
        const totalPrice = amount * price;
        balance -= totalPrice;
        waterCount += amount;
        waterPrice = price;
    }

    function sellCoffee(amount) {
        const totalPrice = amount * coffeePrice;
        balance += totalPrice;
        coffeeCount -= amount;
    }

    function buyCoffee(amount, price) {
        const totalPrice = amount * price;
        balance -= totalPrice;
        coffeeCount += amount;
        coffeePrice = price;
    }

    return {
        getBalance,
        sellWater,
        buyWater,
        sellCoffee,
        buyCoffee,
        getWaterCount,
        getWaterPrice,
        getCoffeeCount,
    };
})();