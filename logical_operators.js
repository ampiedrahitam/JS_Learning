/*let currentUserAge = prompt ('What is your age?', '');

if (currentUserAge >= 14 && currentUserAge <= 90) {
    alert('Nailed It!')
} else {
    alert("I've got it wrong!")
};

if (currentUserAge = ! (currentUserAge >= 14 && currentUserAge <= 90)) {
    alert('Nailed It!')
} else {
    alert("I've got it wrong!")
};

if (currentUserAge < 14 || currentUserAge > 90) {
    alert('Nailed It!')
} else {
    alert("I've got it wrong!")
};


alert( null || 2 || undefined ); // 2 correct
alert( alert(1) || 2 || alert(3) ); // 1 incorrect 1 then 2
alert( 1 && null && 2 ); // null correct
alert( alert(1) && alert(2) ); // 2 incorrect 1 then undefined
alert( null || 2 && 3 || 4 ); // 3 correct

if (-1 || 0) alert( 'first' ); // executed
if (-1 && 0) alert( 'second' ); // not executed
if (null || -1 && 1) alert( 'third' ); //executed */

let currentUserName = prompt('Who is there?', '');

if (currentUserName == null ) {
    alert('Canceled')
} else if (currentUserName != 'Admin') {
    alert('I do not know you!')
} else {
    if (currentUserName == 'Admin') {
        currentUserPassword = prompt('Password?')
        if (currentUserName == 'Admin' && currentUserPassword == null) {
            alert('Canceled')
        } else if (currentUserName == 'Admin' && currentUserPassword != 'TheMaster'){
            alert('Wrong Password')
        }else {
            alert('Welcome!')
        }
    }
};