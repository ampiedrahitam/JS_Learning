/*let i = 3;

while (i) {
  alert( i-- );
} // 1 because when the i reaches 0 the alert is not triggered*/

/*let i = 0;

while (++i < 5) alert( i ); // 1,2,3,4 prefix shows the new value*/

/*let i = 0;

while (i++ < 5) alert( i ); // 0,1,2,3 postfix show the previous value / incorrect 1,2,3,4,5*/

/*for (let i = 0; i < 5; i++) alert( i );

i = 0 ; 0 < 5 ; i = 1 0
i = 1 ; 1 < 5 ; i = 2 1
i = 2 ; 2 < 5 ; i = 3 2
i = 3 ; 3 < 5 ; i = 4 3
i = 4 ; 4 < 5 ; i = 5 4
i = 5 ; 5 < 5*/

/*for (let i = 0; i < 5; ++i) alert( i );

i = 0 ; 0 < 5 ; i = 1 1
i = 1 ; 1 < 5 ; i = 2 2
i = 2 ; 2 < 5 ; i = 3 3
i = 3 ; 3 < 5 ; i = 4 4
i = 4 ; 4 < 5 ; i = 5 5
i = 5 ; 5 < 5 incorrect the body is executed before the increment*/

for (let i = 2; i <= 10; i++) {

    if (i % 2 != 0) continue;
  
    alert(i);
};

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
};

let i = 0

while (i < 3) {
    alert( `number ${i++}!` );
};

let flag;

while (flag == undefined){
    let loopNumber = prompt('Please type in a number greater than 100','');
    if (loopNumber > 100 || loopNumber == null || loopNumber == ''){
        flag = 1
    };
};

let prime = 2;
let inputNumber = prompt('Please type in a number greater than 2', 2);

outer: for (prime = 2; prime < inputNumber; prime++){
    for (let divisor = 2; divisor < prime; divisor++){
        if (prime % divisor == 0) continue outer;
    };
    alert(prime)
};