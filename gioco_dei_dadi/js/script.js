let giocoUtente = Math.round((Math.random() * 5) + 1);

let giocoPc = Math.round((Math.random() * 5) + 1);


if (giocoUtente > giocoPc) {
    console.log("il tuo valore è : " + giocoUtente);
    console.log("il valore del pc è : " + giocoPc);
    console.log("HAI VINTO, complimenti");
} else if (giocoUtente < giocoPc) {
    console.log("il tuo valore è : " + giocoUtente);
    console.log("il valore del pc è : " + giocoPc);
    console.log("HAI PERSO, riprova");
}