//Task #2
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
   return  age > 18 ? true : confirm ('Did parents allow you?')
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

//Task #3
function min(a, b) {
   return a < b ? a : b;
}

//Task #4

let x = +prompt("x?", '');
let n = +prompt("n?", '');

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}