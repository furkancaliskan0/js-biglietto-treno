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

    pricePassenger= (km * priceForKm ).toFixed(2);

    console.log(pricePassenger);

    

// se è minorenne verrà applicato lo sconto del 20%
let discountYoung = pricePassenger * 20 / 100;


//se è anziano verrà applicato lo sconto del 40%
let discounOld =  pricePassenger * 40 / 100;



// Calcolare il prezzo del biglietto in base ai dati 

if (age < 18){
    let priceYoung = (pricePassenger - discountYoung).toFixed(2);
    
    document.getElementById("title").innerHTML = `Con l'acquisto di questo biglietto, Lei ha ${age} anni, kilometri da percorrere ${km}km, il prezzo scontato da noi e 20% per lei e: ${priceYoung}.€  euro`;

}else if( age > 65 ){
    let priceOld = (pricePassenger - discountOld).toFixed(2);

    document.getElementById("title").innerHTML = `Con l'acquisto di questo biglietto, Lei ha ${age} anni, kilometri da percorrere ${km}km, il prezzo scontato da noi e 20% per lei e: ${priceOld}. € euro`;

}else{
    pricePassenger;

    document.getElementById("title").innerHTML = `Con l'acquisto di questo biglietto, Lei ha ${age} anni, kilometri da percorrere ${km}km, il prezzo scontato da noi e 20% per lei e: ${pricePassenger}. € euro`;

}

