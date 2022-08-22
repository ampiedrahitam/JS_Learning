/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let test = {};

function isEmpty (object) {
    for (let key in object) {
        return false;
    }
    return true;
}

alert(isEmpty(test));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = function(obj) {
    for (key in obj){
        sum += obj[key];
    }
}

alert(sum(salaries));

let menu = {
    width: 400,
    height: 600,
    title: "My menu"
}

function multiplyNumeric(obj) {
    for (let key in obj){
        obj[key]*2;
        alert (obj[key]);
    }
}

multiplyNumeric(menu);

let menu = {
    width: 400,
    height: 600,
    title: "My menu"
}

function multiplyNumeric(obj) {
    for (let key in obj){
       if (typeof obj[key] == "number") {
        obj[key] *= 2;
       }
        alert (obj[key]);
    }
}

multiplyNumeric(menu);

let calculator = {
    read() {
        let a = +prompt("Pleaset type in value 1", 0);
        let b = +prompt("Pleaset type in value 2", 0);
    },
    sum() {
        return calculator.read.a + calculator.read.b;
    },
    mul() {
        return calculator.read.a * calculator.read.b;
    },
}

calculator.read();
alert( calculator.sum());
alert( calculator.mul());

let calculator = {
    read() {
        this.a = +prompt("Pleaset type in value 1", 0);
        this.b = +prompt("Pleaset type in value 2", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
}

calculator.read();
alert( calculator.sum());
alert( calculator.mul());
  
function A() {
    this.A = this
}

function B() {
    this.B = this
}

let a = new A();
let b = new B();

alert( a == b);

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

function Calculator () {
    this.read = function () {
        this.a = +prompt("Pleaset type in value 1", 0);
        this.b = +prompt("Pleaset type in value 2", 0);
    },
    this.sum = function() {
        return this.a + this.b;
    },
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

function Accumulator(startingValue) {
    this.read = function() {
        this.value = +prompt("Please type in any number", 0);
    },
    this.add = function() {
        return this.startingValue =+ this.value
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values