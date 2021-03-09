//Definisco array
var numeriErrore = [];
var numeriGiusti = [];
var maxTentativi = 84;

//Inserisco i 16 numeri da non pescare nell'array definito
numeriErrore = createErrore(numeriErrore);

//Salvare il punteggio
 var risultato = svolgimento(numeriErrore, numeriGiusti, 100);

 console.log("HAI PERSO");
 console.log("Hai totalizzato: " + risultato);

//Funzione per generare i 16 numeri da non pescare
function createErrore(dati) {
  //Contare da 1 a 16
  while (dati.length < 16) {
    //Creare numeri casuali da 1 e 100
    var numeroRandom = creatorNumberRandom(1, 100);
    // Verifico la presenza di duplicati nell'array
    if (dati.includes(numeroRandom) == false) {
      dati.push(numeroRandom);
    }
  }
  return dati;
}

//Contare 84 (da 1 e 100 (numeri totali) - 16 (numeri mortali)
function svolgimento(numeriErrore, numeriGiusti, maxTentativi) {
  while (numeriGiusti.length < maxTentativi) {
    //Utente inserisce il numero
    var numeroUtente = parseInt(prompt("Inserisci un numero:"));
    //Controllo che sia un numero, che è incluso tra 1 e 100 e che non sia stato precedentemente usato
    if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100 && numeriGiusti.includes(numeroUtente) == false) {
      if (numeriErrore.includes(numeroUtente) == false) {
        numeriGiusti.push(numeroUtente);
      } else {
        return numeriGiusti.length;
      }
    }
  }
  return numeriGiusti.length
}

// Funzione per generare numeri random da minimo a massimo
function creatorNumberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
