var firstName;
var age;
var userStatus;

firstName = prompt("Enter your first name:");
age = prompt("Enter your age:");

if (age >= 65) {
    userStatus = "Senior";
    document.getElementById("verify").innerHTML = "Free Friday Coffee Night for Seniors";
}
else {
    document.getElementById("verify").innerHTML = "Enjoy Music and Make Memories!";
}