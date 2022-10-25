// chiedere all'utente la sua email
// crea una lista delle email
// controlla nella lista delle email se esiste
// crea un alert se la mail appare nella lista

const mailUtente = prompt("qual'è la tua email?");

const listMail = ["claudio.crescenzi@hotmail.it", "alessio.crescenzi@hotmai.it", "laura.romoli@gmail.com", "simone.crescenzi@hotmail.com", "lazialett094@hotmail.it"];

for (let i = 0; i < listMail.length; i++) {

    if ((mailUtente.indexOf("@") === -1) || (mailUtente.indexOf(".") === -1)) {
    
       console.log("devi inserire una mail valida");

    }

    else { 
        if (mailUtente == listMail[i]) {

        console.log("la tua email è registrata");
    }  
        else {

        console.log("devi registrarti per entrare nel sito");
    }
        
    }
}
    