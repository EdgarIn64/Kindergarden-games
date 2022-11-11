contador = 0;
palomita = true;
comida = ["platano", "helado", "galletas", "manzana", "zanahoria", 
          "sabritas", "aguacate", "chocolate", "uvas", "paleta"];
saludable = [true, false, false, true, true, false, 
            true, false, true, false];
path = "imagenes/figuras/";

function btnPalomita() {
  palomita = true;
  evaluar();
}

function btnTache() {
  palomita = false;
  evaluar();
}

function evaluar() {
  (saludable[contador] == palomita) ? bien() : mal();
}

function mal() {
  setTimeout(() => {
    document.getElementById("mal").hidden = true;
  }, 800);
  document.getElementById("mal").hidden = false;
}

function bien() {
  setTimeout(() => {
    document.getElementById("indicacion").hidden = false;
    document.getElementById("juego").hidden = false;
    document.getElementById("bien").hidden = true;
    (contador < comida.length-1) ? pasar() : fin();
  }, 1000);
  document.getElementById("indicacion").hidden = true;
  document.getElementById("juego").hidden = true;
  document.getElementById("bien").hidden = false;
}

function pasar() {
  contador++;
  document.getElementById("comida").src = path+comida[contador]+".png";

}

function fin() {
  document.getElementById("fin").hidden = false;
  document.getElementById("juego").hidden = true;
  document.getElementById("indicacion").hidden = true;
}
