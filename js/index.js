/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//creo una variabile per prendere il div in cui inserire i numeri random del pc
let numeriRandom = document.getElementById('numeri-random');
//creo una variabile per prendere il form
const form = document.querySelector('form');
//creo una variabile per prendere tutti gli input
let numeriScelti = document.querySelectorAll ('input');
//creo l'evento submit al form in cui prendere i dati
form.addEventListener('submit', invia );


//funzione per generare numeri interi random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//funzione per generare ed inserire nell'array i numeri casuali (5 numeri random da 1 a 50)
function generaNumeri (min, max) {
    const numeriPc = [];
    while (numeriPc.length < 5) {
        let numeroPc = getRandomNumber(1, 50);
        numeriPc.push(numeroPc);
    }
    return numeriPc;
}

//creo una variabile per prendere i numeri random generati nell'array e inserirli nel suo contenitore
let numeriPc = generaNumeri(1, 50);
numeriRandom.innerText = `${numeriPc}`;

//creo una set time out per creare un countdown che elimina i numeri generati dal pc
setTimeout(cancella, 30000);

//creo una variabile da aggiungere nel set time out in cui inserisco il testo che sostituirà i numeri random
function cancella () {
    numeriRandom.innerHTML = '<H4 class = "text-white">Inserisci i numeri che ricordi nelle caselle sotto</h4>' ;
}

//funzione collegato all'evento per prendere i valori dell'utente e confrontarli con i numeri del pc per avere il punteggio
function invia (e) {
    e.preventDefault ();
    //creo una variabile per prendere il paragrafo nel div risultato
    let paragrafo = document.querySelector ('p')
    //creo una variabile per inserire il numero del punteggio
    let indovinati = 0;
    //ciclo for per avere tutti i l'indice e tutti i numeri dell'utente da confrontare
    for (i = 0; i <numeriScelti.length; i++) {
        //creo una variabile per prendere il valore esatto di ogni singolo input
        let numeroGiocatore = parseInt(numeriScelti[i].value);
           //if che se i parametri inseriti dall'utente saranno uguali ai numeri random aumenterà il punteggio per ogni parametro uguale
                if (numeroGiocatore === numeriPc[i]) {
                indovinati++;              
                paragrafo.innerText = `Il tuo punteggio è : ${indovinati}`
            //else in cui tutti i parametri inseriti dall'utente saranno diversi e allora il punteggio sarà 0     
            } else {
                paragrafo.innerText = `Il tuo punteggio è : ${indovinati}`
            }
           
    } 
    
   
     

}
