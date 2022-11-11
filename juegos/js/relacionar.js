contador = 0;
figuras = ["serpiente", "oso", "abanico", "iglu", "burro", "piñata", "platano", "avion",
		  "arbol", "oveja", "gato", "manzana"];
ganador = [1,0,1,2,2,0,2,1,0,1,0,2];

path = "imagenes/figuras/";

function mal() {
  setTimeout(() => {
    document.getElementById("mal").hidden = true;
  }, 950);
  document.getElementById("mal").hidden = false;
}

function bien() {
  setTimeout(() => {
    document.getElementById("bien").hidden = true;
    document.getElementById("juego").hidden = false;
    document.getElementById("figura").src = path + figuras[contador] + ".png";
    (contador < figuras.length)? siguiente() : fin();
  }, 950);
  document.getElementById("bien").hidden = false;
  document.getElementById("juego").hidden = true;

}

function siguiente() {
  win = ganador[contador];
  max = figuras.length;
  do {
    uno = Math.floor(Math.random() * max/3);
  } while (contador == uno);
  do {
    dos = Math.floor(Math.random() * (max-(max/3)))+(max/3);
  } while (contador == dos || dos == uno);
  do {
    tres = Math.floor(Math.random() * (max-8))+8;
  } while (contador == tres || tres == dos);


  switch (win) {
  	case 1: document.getElementById("uno").innerHTML = figuras[uno];
  			document.getElementById("uno").onclick = function() {mal()};
  	        document.getElementById("dos").innerHTML = figuras[contador];
  			document.getElementById("dos").onclick = function() {bien()};
  	        document.getElementById("tres").innerHTML = figuras[tres];
  			document.getElementById("tres").onclick = function() {mal()};
  	break;
  	case 2: document.getElementById("uno").innerHTML = figuras[uno];
  			document.getElementById("uno").onclick = function() {mal()};
  	        document.getElementById("dos").innerHTML = figuras[dos];
  			document.getElementById("dos").onclick = function() {mal()};
  	        document.getElementById("tres").innerHTML = figuras[contador];
  			document.getElementById("tres").onclick = function() {bien()};
  	break;
  	default: document.getElementById("uno").innerHTML = figuras[contador];
  			document.getElementById("uno").onclick = function() {bien()};
  	        document.getElementById("dos").innerHTML = figuras[dos];
  			document.getElementById("dos").onclick = function() {mal()};
  	        document.getElementById("tres").innerHTML = figuras[tres];
  			document.getElementById("tres").onclick = function() {mal()};

  }
  contador++;
}

function fin() {
  document.getElementById("indicacion").hidden = true;
  document.getElementById("juego").hidden = true;
  document.getElementById("fin").hidden = false;
}