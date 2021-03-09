//Array contente i 16 numeri casuali generati
var numeriErrore = [];
//Generare 16 numeri casuali da 1 a 100
randomNumber(1, 16)
  //Controllare se nei numeri generati ci sono dei duplicati
  //Chiedere all'utente di inserire numeri uno alla volta - capire quante volte
  //L'utente non può inserire più volte lo stesso numero.
  //Controllare se il numero messo dall'utente è presente nella lista dei numeri generati
  //Se presente la partita termina, se non è presente chiedere un altro numero

//La partita termina quando si inserisce un numero vietato o si finiscono il numero massimo di numeri consentiti
//Stampare resoconto partita
  //Esito partita
  //Numero di volte che è stato inserito un numero giusto


// FUNCTIONS

// Funzione per generare numeri random da minimo a massimo
function randomNumber(min, max) {
  var numeroRandom = "";

  for (var i = min; i <= max; i++) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numeroRandom);
  }

  return numeroRandom;
}
