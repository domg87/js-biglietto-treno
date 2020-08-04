// 1. QUANTI KM DEVE PERCORRERE IL PASSEGGERO?
var km = parseInt(prompt("Quanti km devi percorrere?"));
// 2. QUANTI ANNI HA IL PASSEGGERO?
var eta = parseInt(prompt("Quanti annni ha il passeggero?"));
// 3. IL PREZZO DEL BIGLIETTO è DI 0.21€ AL KM
var prezzo = km * 0.21.toFixed(2);
console.log(prezzo)
// 4. SCONTO DEL 20% SE MINORI DI 18 ANNI
// 5. SCONTO DEL 40% SE OVER 65

if (eta < 18) {
  var sconto = 0.2;
} else if (eta >= 65) {
  var sconto = 0.4;
} else {
  var sconto = 0;
}

var prezzoFinale = (prezzo - prezzo * sconto).toFixed(2);
console.log(prezzoFinale)
document.getElementById("km").innerHTML = km;
document.getElementById("eta").innerHTML = eta;
document.getElementById("prezzo").innerHTML = prezzo;
document.getElementById("sconto").innerHTML = sconto * 100;
document.getElementById("totale").innerHTML = prezzoFinale;
