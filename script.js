console.log('JS OK')

// Metto il DOM nel JS
const trainTicketPrice = document.getElementById('train-ticket-price');
console.log('trainTicketPrice');

// Chiedo al cliente quanti chilometri vuole fare
const tripLenght = parseInt(prompt('Quanti KM vuoi percorrere?', '20'));
console.log('tripLenght');

// Chiedo l'eta al cliente
const userAge = prompt('Quanti Anni hai?', '18');
console.log('userAge');

// Creo una variabile con il prezzo del biglietto a kilometro
const kmPrice = parseInt(0.21);
console.log('kmPrice');

// Calcolo il prezzo del biglietto
const ticketPrice = tripLenght * kmPrice;
console.log('ticketPrice');

