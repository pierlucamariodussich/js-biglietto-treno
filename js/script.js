
var name = document.getElementById("nome").value
var surname = document.getElementById("cognome").value
var km = document.getElementById("km").value
var eta = document.getElementById("eta").value
var totale = km * 0.21;
var btnSend = document.getElementById("send");
var btnReset = document.getElementById("reset")
var carriageEL = (Math.floor(Math.random()* 10) + 1);
var cpEl = (Math.floor(Math.random()* 100000) + 1);
var boxT =document.getElementById("boxT")

btnSend.addEventListener("click",
  function (){

  if (isNaN(km) || isNaN(eta)){
    document.getElementById("totale").innerHTML = "Inserisci correttamente i dati";
  } else {
    if ( eta < 18){
      var under = Math.floor(totale * 0.8);
      document.getElementById("totale").innerHTML =  under + "€";
      discountEl = "-20%";
      document.getElementById("discount").innerHTML =  discountEl;
      document.getElementById("user").innerHTML =  name + " " + surname;
      document.getElementById("carriage").innerHTML = carriageEL;
      document.getElementById("cp").innerHTML =  cpEl;
      boxT.className -= "hidden";
    } else if (eta > 65){
      var over = Math.floor(totale * 0.6);
      document.getElementById("totale").innerHTML =  over + "€";
      discountEl = "-40%";
      document.getElementById("discount").innerHTML =  discountEl;
      document.getElementById("user").innerHTML =  name + " " + surname;
      document.getElementById("carriage").innerHTML = carriageEL;
      document.getElementById("cp").innerHTML =  cpEl;
      boxT.className -= "hidden";
    } else  {
      document.getElementById("totale").innerHTML = totale + "€";
      discountEl = "-";
      document.getElementById("discount").innerHTML =  discountEl;
      document.getElementById("user").innerHTML =  name + " " + surname;
      document.getElementById("carriage").innerHTML = carriageEL;
      document.getElementById("cp").innerHTML =  cpEl;
      boxT.className -= "hidden";
    }
  }

})

btnReset.addEventListener("click",
  function (){
  document.getElementById("nome").value =  "";
  document.getElementById("cognome").value =  "";
  document.getElementById("km").value =  "";
  document.getElementById("eta").value =  "";
  boxT.className = "biglietto hidden";


})
