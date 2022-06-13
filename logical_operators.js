let currentUserAge = prompt ('What is your age?', '');

/*if (currentUserAge >= 14 && currentUserAge <= 90) {
    alert('Nailed It!')
} else {
    alert("I've got it wrong!")
};*/

/*if (currentUserAge = ! (currentUserAge >= 14 && currentUserAge <= 90)) {
    alert('Nailed It!')
} else {
    alert("I've got it wrong!")
};*/

if (currentUserAge < 14 || currentUserAge > 90) {
    alert('Nailed It!')
} else {
    alert("I've got it wrong!")
};


/*alert( null || 2 || undefined ); // 2 correct
alert( alert(1) || 2 || alert(3) ); // 1 incorrect 1 then 2
alert( 1 && null && 2 ); // null correct
alert( alert(1) && alert(2) ); // 2 incorrect 1 then undefined
alert( null || 2 && 3 || 4 ); // 3 correct*/