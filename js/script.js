// Il programma deve Calcolare il prezzo del biglietto per il treno

// elenco variabili
let age, km, ticketCost;

let priceForKm = 0.21;

// chiedere quanti chilometri vuole percorrere l'utente

km= parseInt(prompt("Quanti Km vuole percorrere?"));
console.log(km);

// chiedere quanti anni ha l'utente

age= parseInt(prompt("Qual'è la sua età?"));
console.log(age);

// calcolare il prezzo totale del viaggio 

//prezzo per il biglietto è 0.21 € al km

    ticketCost= km * priceForKm;

    console.log(ticketCost);

    

// se è minorenne verrà applicato lo sconto del 20%
let discountYoung=  ticketCost * 20 / 100;


//se è anziano verrà applicato lo sconto del 40%
let discounOld =  ticketCost * 40 / 100;



// Calcolare il prezzo del biglietto in base ai dati 

if (age < 18){
    let priceYoung = (ticketCost - discountYoung).toFixed(2);
    
    document.getElementById("title").innerHTML = `Il prezzo del tuo biglietto è di ${priceYoung}€ euro`;

}else if( age > 65 ){
    let priceOld = (ticketCost - discounOld).toFixed(2);

    document.getElementById("title").innerHTML = `Il prezzo del tuo biglietto è di ${priceOld}€ euro`;
}else{
    ticketCost;

    document.getElementById("title").innerHTML = `Il prezzo del tuo biglietto è di ${ticketCost}€ euro`;
}

