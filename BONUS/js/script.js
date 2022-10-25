let mailUtente;

const listMail = ["claudio.crescenzi@hotmail.it", "alessio.crescenzi@hotmai.it", "laura.romoli@gmail.com", "simone.crescenzi@hotmail.com", "lazialett094@hotmail.it"];

for (let i = 0; i < listMail.length; i++) {

    mailUtente = document.querySelector(".email").value;

    if ((mailUtente.indexOf("@") === -1) || (mailUtente.indexOf(".") === -1)) {
    
       console.log("devi inserire una mail valida");

    }

    else { 

        if (mailUtente == listMail[i]) {

        // const btnPlay = document.createElement("button");
        // btnPlay.innerHTML = "Gioca";
           

    }  
        else {

        console.log("devi registrarti per entrare nel sito");
    }  
    }
}
    


// let buttonPlay = document.querySelector(".play");
// buttonPlay.addEventListener("click", function(){

// let giocoUtente = Math.round((Math.random() * 5) + 1);
// let giocoPc = Math.round((Math.random() * 5) + 1);
// let resultMe = document.querySelector(".result_me");
// let resultPC = document.querySelector(".result_pc");
// let results = document.querySelector(".results");

// resultMe.innerHTML = "il tuo valore è : " + giocoUtente;
// resultPC.innerHTML = "il valore del pc è : " + giocoPc;

// if (giocoUtente > giocoPc) {
//     results.innerHTML = "HAI VINTO, ammazza che grande ao.";
// } else if (giocoUtente < giocoPc) {
//     results.innerHTML = "HAI PERSO, sei 'no sfigato.";
// } else {
//     results.innerHTML = "HAI PAREGGIATO, nun se butta niente.";
// }
// })