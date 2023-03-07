// 1. Створіть функцію яка клонує об'єкти

function cloneObject(object) {
    let clone = {};
    for (let objectKey in object) {

        if (typeof objectKey === Object) {
            cloneObject(objectKey)
        }

        clone[objectKey] = object[objectKey];
    }
    return clone;
}


//2. Створіть функцію яка порівнює два об'єкти

function compareObj(obj1, obj2) {

    for (let obj1Key in obj1) {

        if (!obj2.hasOwnProperty(obj1Key)) {
            return false;
        }

        if (typeof obj1Key === Object) {
            compareObj(obj1[obj1Key], obj2[obj1Key])
        }

        if (obj1[obj1Key].valueOf() !== obj2[obj1Key].valueOf()) {
            return false;
        }
    }
    return true;
}


// 3. Створіть об'єкт, який містить список товарів в інтернет-магазині.
// Кожен товар повинен мати назву, ціну та кількість на складі.
// Реалізуйте функцію, яка приймає назву товару та кількість, і повертає загальну вартість замовлення.

let shop = {

    items: [
        {
            name: "book",
            price: 100,
            inStorage: 200,
        },
        {
            name: "laptop",
            price: 2000,
            inStorage: 7,
        },
        {
            name: "phone",
            price: 700,
            inStorage: 5,
        },
    ],

    orderPrice: function order(itemName, amount) {
        const searchedItem = this.items.find(item => item.name === itemName);
        if (!searchedItem) {
            console.log("We don't have this item")
            return 0;
        }

        if (searchedItem.inStorage < amount) {
            console.log("We don't have enought of this item")
            return 0;
        }

        return searchedItem.price * amount;
    }

}


//5. Напишіть функцію, яка приймає на вхід число та перевіряє, чи є воно простим числом.

function checkPrime(number) {
    if (number <= 0) {
        console.log("Number should be greater then 0")
        return false;
    }

    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i !== 1 && i !== number) {
            return false;
        }
    }

    return true;
}


//6. Напишіть функцію, яка приймає на вхід число та повертає його факторіал.

function factorial(number) {
    let result = 1;

    for (let i = 1; i < number; i++) {
        result = result * (i + 1);
    }
    return result;

}


//7. Напишіть функцію, яка приймає на вхід рядок та перевіряє, чи є він паліндромом

function isPalindrome(string) {

    let stringToArray = string.split("")
    let newString = stringToArray.reverse().join("")

    return string === newString;

}


//8. Напишіть функцію, яка приймає на вхід рядок та перетворює його в рядок з верхнім регістром.

function toUppercase(string) {

    return string.toUpperCase();
}


//9. Напишіть функцію, яка приймає на вхід масив строк та повертає новий масив, який містять тільки унікальні значення.

function uniqueValues(...stringArray) {
    let filteredArray = [];

    for (let stringArrayElement of stringArray) {

        if (!filteredArray.find(el => el === stringArrayElement)) {
            filteredArray.push(stringArrayElement)
        }

    }

    return filteredArray;
}


//10. Напишіть функцію, яка приймає на вхід дату та повертає час у форматі "години:хвилини AM/PM".

function timeConverter(Date) {
    let hours = Date.getHours();
    let minutes = Date.getMinutes();
    let ampm = hours < 12 ? "AM" : "PM";

    return hours + ":" + minutes + " " + ampm;

}