let currentUserName = prompt('What is your name?');
let currentUserConfirmation = confirm(`Are you sure that your name is ${currentUserName}?`);

alert(currentUserConfirmation);
alert(`Thank you for confirming, ${currentUserName}`);