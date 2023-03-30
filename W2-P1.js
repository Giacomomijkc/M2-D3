/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let firstNumber = 4;
let secondNumber = 5;

if(firstNumber > secondNumber) {
  console.log("firstNumber is the biggest number")
} else {
  console.log("secondNumber is the biggest number")
}*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let number = 6;

if(number !== 5) {
  console.log("not equal")
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* SCRIVI QUI LA TUA RISPOSTA */
/*let newNumber = 10;

if(newNumber % 5 === 0){
  console.log("divisible by 5")
}*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let a = 2;
let b = 8;

if ((a === 8) || (b === 8) || (a + b === 8) || (a - b === 8)){
  console.log(true)
} else {
  console.log(false)
}*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let totalShoppingCart = 49;
let checkout;
let shipping = 10;

if(totalShoppingCart > 50){
  checkout = totalShoppingCart;
  console.log(checkout)
} else{
  checkout = totalShoppingCart + shipping;
  console.log(checkout)
}*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let totalShoppingCart = 51;
let checkout;
let shipping = 10;
let discount = 0.8;

if(totalShoppingCart > 50){
  checkout = totalShoppingCart*discount;
  console.log(checkout)
} else{
  checkout = (totalShoppingCart*discount) + shipping;
  console.log(checkout)
}*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ //non vengono tutti i risultati
/*let a = 2;
let b = 3;
let c = 1;

let min;
let med;
let max;

if ((b > a) && (b < c)){
  min = a;
  med = b;
  max = c;
  console.log(max, med, min) 
} else if ((b < a) && (a < c)) {
  min = b;
  med = a;
  max = c;
  console.log(max, med, min)
  } else if ((b > a) && (b > c) && (a > c)){
    console.log(max, med, min)
    }*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let number = 5.2;

if(number === parseInt(number)){
  console.log("il numero è intero")
} else{
  console.log("il numero non è intero")
}*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let number = 3;

if(number % 2 === 0){
  console.log(true)
} else {
  console.log(false)
}*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 4;
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/


/* SCRIVI QUI LA TUA RISPOSTA */
  /*let val = 10;
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let num = 21;

if(num < 5){
  console.log("Tiny")
} else if (num < 10){
  console.log("Small")
} else if (num < 15) {
  console.log("Medium")
} else if (num < 20){
  console.log("Large")
} else {
  console.log("Huge")
}*/

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let isMale;

let gender = isMale ? "male" : "female"
console.log(gender)*/


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let n = 0;

while (n <= 5){
  console.log(n) //se lo metto dopo mi conta fino a 6, perché?
  n++;
}*/

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*for(let i = 0; i <= 10; i++){
  console.log(i)
}*/

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*for(let i = 0; i <= 10; i++){
  if ((i === 3) || (i === 8)){
    continue;
  }
  console.log(i)
}*/

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*for(let i = 0; i < 15; i++){
  if(i % 2 === 0){
    console.log(true)
  } else {
    console.log(false)
  }
}*/


/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*switch(day) {
  case (day=1):
    console.log("lunedì")
    break;
  case (day=2):
    console.log("martedì")
    break;
}*/