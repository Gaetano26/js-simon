/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


let numeriRandom = document.getElementById('numeri-random');

const form = document.querySelector('form');
let numeriScelti = document.getElementById ('numero');
form.addEventListener('submit', invia );



//funzione per generare numeri interi random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//funzione per generare ed inserire nell'array di numeri casuali, 5 numeri random da 1 a 50
function generaNumeri (min, max) {
    const numeriPc = [];
    while (numeriPc.length < 5) {
        let numeroPc = getRandomNumber(1, 50);
        numeriPc.push(numeroPc);
    }
    return numeriPc;
}

//genero i numeri e li stampo nell'html
let numeriPc = generaNumeri(1, 50);
numeriRandom.innerText = `${numeriPc}`;


setTimeout(cancella, 3000);

function cancella () {
    numeriRandom.innerHTML = '<H4>Inserisci i numeri che ricordi nelle caselle sotto</h4>' ;
}


function invia (e) {
    e.preventDefault ();
    let input = document.getElementById ('numero');
    let numeroGiocatore = input.value;
}
console.log (numeroGiocatore);