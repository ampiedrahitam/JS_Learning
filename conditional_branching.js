let officialName = prompt('What is the "official" name of JavaScript?', '');

if (officialName=='ECMAScript') {
    alert('Right!')
} else {
    alert("You don't know? ECMAScript!")
};

let currentNumber = prompt('Please type in any number', '');

if (currentNumber > 0) {
    alert('1')
} else if (currentNumber < 0){
    alert('-1')
} else if (currentNumber == 0){
    alert('0')
};

let a = 3
let b = 1
let result = (a + b < 4) ? 'Below': 'Over';

alert(result);

let login = 'Director'
let message = (login == 'Employee') ? 'Hello':
    (login == 'Director') ? 'Greetings':
    (login == '') ? 'No login':
    '';

alert(message)