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

alert(isEmpty(test));*/

/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);*/

/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = function(obj) {
    for (key in obj){
        sum += obj[key];
    }
}

alert(sum(salaries));*/

/*let menu = {
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

multiplyNumeric(menu);*/

/*let menu = {
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

multiplyNumeric(menu);*/

/*let calculator = {
    read() {
        let a = +prompt("Pleaset type in value 1", 0);
        let b = +prompt("Pleaset type in value 2", 0)
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
alert( calculator.mul());*/

let calculator = {
    read() {
        this.a = +prompt("Pleaset type in value 1", 0);
        this.b = +prompt("Pleaset type in value 2", 0)
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