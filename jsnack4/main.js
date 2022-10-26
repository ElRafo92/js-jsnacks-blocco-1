
const lista = ["rafa", "derian", "massi", "cala", "gaddo", "vale",];

let validazione = prompt("inserisci il nome");

let presente = false;

for (i=0; i<lista.length; i++) {
    if (validazione === lista[i]) {
        presente=true;
    }
}

if (presente == true) {
    alert("Welcome")
} 
else {
    alert("Not in the list")
}