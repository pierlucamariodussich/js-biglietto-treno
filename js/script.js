
var km = parseInt(prompt("Quanti Km devi fare ?"));
var eta = parseInt(prompt("Quanti anni hai ?"));
console.log( "kilometri: " + km + ", Età: "+ eta);
var totale = km * 0.21;


  if ( eta < "18"){
    var under = totale * 0.8;
    document.getElementById("totale").innerHTML = totale + " € - 20% di sconto = " + under + "€";
  } else if (eta > "65"){
    var over = totale * 0.6;
    document.getElementById("totale").innerHTML = totale + " € - 40% di sconto = " + over + "€";
  } else  {
    document.getElementById("totale").innerHTML = totale + "€";
  }
