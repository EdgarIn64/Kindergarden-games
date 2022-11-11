contador = 0;
figuras = ["serpiente", "oso", "aguacate",
		  "uvas", "manzana", "piñata", "estrella", "avion",
		  "arbol", "abeja", "oveja", "iglu"];
ganador = [0,2,1,1,0,1,0,2,0,2,1,0,1];

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
    document.getElementById("oculto").src = path + figuras[contador] + ".png";
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
  	case 1: document.getElementById("uno").src = path+figuras[uno]+".png";
  			document.getElementById("uno").onclick = function() {mal()};
  	        document.getElementById("dos").src = path+figuras[dos]+".png";
  			document.getElementById("dos").onclick = function() {mal()};
  	        document.getElementById("tres").src = path+figuras[contador]+".png";
  			document.getElementById("tres").onclick = function() {bien()};
  	break;
  	case 2: document.getElementById("uno").src = path+figuras[contador]+".png";
  			document.getElementById("uno").onclick = function() {bien()};
  	        document.getElementById("dos").src = path+figuras[dos]+".png";
  			document.getElementById("dos").onclick = function() {mal()};
  	        document.getElementById("tres").src = path+figuras[tres]+".png";
  			document.getElementById("tres").onclick = function() {mal()};
  	break;
  	default: document.getElementById("uno").src = path+figuras[uno]+".png";
  			document.getElementById("uno").onclick = function() {mal()};
  	        document.getElementById("dos").src = path+figuras[contador]+".png";
  			document.getElementById("dos").onclick = function() {bien()};
  	        document.getElementById("tres").src = path+figuras[tres]+".png";
  			document.getElementById("tres").onclick = function() {mal()};

  }
  
  contador++;

}

function fin() {
  document.getElementById("juego").hidden = true;
  document.getElementById("fin").hidden = false;
}