//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21

var yourName = prompt("What's your name?");

var yourSurname = prompt("What's your surname?");

var yourFavColor = prompt("What is your favourite color?");

document.getElementById('userData').innerHTML= yourName + " " + yourSurname + " " + yourFavColor + " " + "21";

console.log(yourName + " " + yourSurname + " " + yourFavColor);
