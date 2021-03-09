//Definisco array
var numeriErrore = [];

console.log(createErrore(numeriErrore));


  //Contare 84 (da 1 e 100(numeri totali) - 16(numeri mortali))
  //L'utente non può inserire più volte lo stesso numero.
  //Controllare se il numero messo dall'utente è presente nella lista dei numeri generati
  //Se presente la partita termina, se non è presente chiedere un altro numero

//La partita termina quando si inserisce un numero vietato o si finiscono il numero massimo di numeri consentiti
//Stampare resoconto partita
  //Esito partita
  //Numero di volte che è stato inserito un numero giusto


// FUNCTIONS

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



// Funzione per generare numeri random da minimo a massimo
function creatorNumberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
