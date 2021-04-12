function zegarekjs() {
  var dzisiaj = new Date();

  var dzien = dzisiaj.getDate();
  if (dzien < 10) dzien = "0" + dzien;
  var miesiac = dzisiaj.getMonth() + 1;
  if (miesiac < 10) miesiac = "0" + miesiac;
  var rok = dzisiaj.getFullYear();

  var godzina = dzisiaj.getHours();
  if (godzina < 10) godzina = "0" + godzina;
  var minuta = dzisiaj.getMinutes();
  if (minuta < 10) minuta = "0" + minuta;
  var sekunda = dzisiaj.getSeconds();
  if (sekunda < 10) sekunda = "0" + sekunda;

  document.getElementById("zegardata").innerHTML = dzien + "/" + miesiac + "/" + rok;
  document.getElementById("zegarczas").innerHTML = godzina + ":" + minuta + ":" + sekunda;

  setTimeout("zegarekjs()",1000);
}

function galerytransport(png) {
  var fspng = document.getElementById("fspng");
  var textpng = document.getElementById("tekstpng");
  var galerytransportfsimg = document.getElementById("galerytransportfsimg");
  var beltalt = document.getElementById("beltalt")
  var caralt = document.getElementById("caralt")
  var trainalt = document.getElementById("trainalt")
  var dronalt = document.getElementById("dronalt")

  fspng.src = png.src;
  fspng.style.visibility = "visible";
  fspng.style.height = "auto"

  if(png.id == "belgif"){
    textpng.innerHTML = beltalt.innerHTML;
  }
  if(png.id == "cargif"){
    textpng.innerHTML = caralt.innerHTML;
  }
  if(png.id == "trainpng"){
    textpng.innerHTML = trainalt.innerHTML;
  }
  if(png.id == "drongif"){
    textpng.innerHTML = dronalt.innerHTML;
  }
  galerytransportfsimg.style.display = "block";
}
