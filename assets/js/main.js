//Definisco array
var numeriErrore = [];

//Contare da 1 a 16
  //Creare numeri casuali da 1 e 100
  //Controllare se nei numeri generati ci sono dei duplicati presenti in array



  //Contare 84 (da 1 e 100(numeri totali) - 16(numeri mortali))
  //L'utente non può inserire più volte lo stesso numero.
  //Controllare se il numero messo dall'utente è presente nella lista dei numeri generati
  //Se presente la partita termina, se non è presente chiedere un altro numero

//La partita termina quando si inserisce un numero vietato o si finiscono il numero massimo di numeri consentiti
//Stampare resoconto partita
  //Esito partita
  //Numero di volte che è stato inserito un numero giusto


// FUNCTIONS

function createErrore(array) {
  var i = 0;
  while (i < 16) {
    var numeroRandom = creatorNumberRandom(1, 100);
  }
}



// Funzione per generare numeri random da minimo a massimo
function creatorNumberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}









// var numeriErrore = []
//
// arrayBombe = creatorErrore(numeriErrore, 100)

// //Funzione per generare i 16 numeri casuali
// function creatorErrore(numeriErrore, max) {
// while (numeriErrore.lenght < 16) {
//   var numeroRandom = creatorNumberRandom(1, max)
// }
//
//   return numeriErrore;
// }
//
// // Funzione per generare numeri random da minimo a massimo
// function creatorNumberRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
