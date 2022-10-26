let numeriPari = [];

for (i=0; i<6; i++) {
    let number=Number(prompt("inserisci un numero"));
    if (number % 2 === 0) {
        numeriPari.push(number);
        console.log(numeriPari);
    }
}