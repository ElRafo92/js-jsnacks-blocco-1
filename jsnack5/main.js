let numeriDispari = [];

for (i=0; i<6; i++) {
    let number=Number(prompt("inserisci un numero"));
    if (number % 2 === 1) {
        numeriDispari.push(number);
    }
}
console.log(numeriDispari);
