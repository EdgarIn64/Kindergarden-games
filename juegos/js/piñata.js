contador = 1;
rondas = 0;
golpes = 39;

function golpe() {
  document.getElementById("golpes").innerHTML = golpes-contador-(rondas*13);
  switch(contador) {
    case 1: uno();
    break;
    case 2: dos();
    break;
    case 3: tres();
    break;
    case 4: cuatro();
    break;
    case 5: cinco();
    break;
    case 6: seis();
    break;
    case 7: siete();
    break;
    case 8: ocho();
    break;
    case 9: nueve();
    break;
    case 10: diez();
    break;
    case 11: once();
    break;
    case 12: doce();
    break;
    case 13: trece();
    break;
    default: contador == 1;
  }
}

function uno() {
  document.getElementById("uno").hidden = true;
  document.getElementById("dos").hidden = false;
  contador += 1;
}

function dos() {
  document.getElementById("dos").hidden = true;
  document.getElementById("tres").hidden = false;
  contador += 1;
}

function tres() {
  document.getElementById("tres").hidden = true;
  document.getElementById("cuatro").hidden = false;
  contador += 1;
}

function cuatro() {
  document.getElementById("cuatro").hidden = true;
  document.getElementById("cinco").hidden = false;
  contador += 1;
}

function cinco() {
  document.getElementById("cinco").hidden = true;
  document.getElementById("seis").hidden = false;
  contador += 1;
}

function seis() {
  document.getElementById("seis").hidden = true;
  document.getElementById("siete").hidden = false;
  contador += 1;
}

function siete() {
  document.getElementById("siete").hidden = true;
  document.getElementById("ocho").hidden = false;
  contador += 1;
}

function ocho() {
  document.getElementById("ocho").hidden = true;
  document.getElementById("nueve").hidden = false;
  contador += 1;
}

function nueve() {
  document.getElementById("nueve").hidden = true;
  document.getElementById("diez").hidden = false;
  contador += 1;
}

function diez() {
  document.getElementById("diez").hidden = true;
  document.getElementById("once").hidden = false;
  contador += 1;
}

function once() {
  document.getElementById("once").hidden = true;
  document.getElementById("doce").hidden = false;
  contador += 1;
}

function doce() {
  document.getElementById("doce").hidden = true;
  document.getElementById("trece").hidden = false;
  contador += 1;
}

function trece() {
  document.getElementById("trece").hidden = true;
  document.getElementById("uno").hidden = false;
  contador = 1;
  if (rondas >= 2) {
      document.getElementById("juego").hidden = true;
      document.getElementById("fin").hidden = false;
  }
  else
    rondas += 1;
}



