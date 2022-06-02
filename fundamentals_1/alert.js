let currentVisitorName = 'John';
let admin = currentVisitorName;
let planetName = 'Earth';
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
let e = 2;
let x = 1 + (e *= 2); // 5
let f = prompt("First number?", 1);
let g = prompt("Second number?", 2);

alert(admin);
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${currentVisitorName}` ); // hello John
alert(c);
alert(d);
alert(x);
alert(+f + +g);