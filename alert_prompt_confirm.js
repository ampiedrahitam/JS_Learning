let currentUserName = prompt('What is your name?');
let currentUserConfirmation = confirm(`Are you sure that your name is ${currentUserName}?`);

alert(currentUserConfirmation);
if (currentUserConfirmation==false) {
    alert('Thank you for your honesty')
} else {
    alert(`Thank you for confirming, ${currentUserName}`)
};
