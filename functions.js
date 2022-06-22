/*function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
};

checkAge ();

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
};

checkAge ();*/

/*function checkMin(a, b) {
    return (a > b) ? alert(a) : alert(b);
};

checkMin (10,2);*/

let x = prompt('Please type in a number', '');
let n = prompt('Please type in a exponential number greater than 1','');


function calcPow(x, n) {
    let result = (x ** n);
    return result;
};

alert( calcPow(x, n) );
