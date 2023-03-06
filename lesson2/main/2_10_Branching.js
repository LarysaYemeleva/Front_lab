// Task #1
if ("0") {
    alert( 'Hello' );
}

//yes

// Task #2
let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

// Task #3
let number = prompt('Number?', 0);

if (number > 0) {
    alert( 1 );
} else if (number < 0) {
    alert( -1 );
} else {
    alert( 0 );
}

// Task #4
let result;
if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

result = a + b < 4 ? 'Below' : 'Over';

// Task #5

let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

message = login == 'Employee' ? 'Hello' :
        (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';