let stupneFarenheita = prompt("Zadej teploty ve stupních Farenheita.")
let stupneCelsia = (5*(stupneFarenheita-32))/9;

document.body.innerHTML = stupneFarenheita + "°F = " + stupneCelsia + "°C"
