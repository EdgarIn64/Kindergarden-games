figuras = ["uvas", "estrella", "oveja", "iglu", "abeja",  
		  "isla" , "elefante", "unicornio", "oso"];
path = "imagenes/figuras/";
contador = 0;

function bien() {
	document.getElementById("titulo").hidden = true;
	document.getElementById("bien").hidden = false;
	document.getElementById("flecha").hidden = false;
	document.getElementById("botones").hidden = true;
}

function mal() {
	setTimeout(() => {
		document.getElementById("mal").hidden = true;
		document.getElementById("titulo").hidden = false;
	}, 950);
	document.getElementById("mal").hidden = false;
	document.getElementById("titulo").hidden = true;
}

function siguiente() {
	(contador < figuras.length)? continuar() : fin();
}

function fin() {
	document.getElementById("juego").hidden = true;
	document.getElementById("fin").hidden = false;
}

function continuar() {
	vocales = "aeiou".split("");
	win = Math.floor(Math.random() * 3);
	inicial = figuras[contador][0];
	eliminar = vocales.indexOf(inicial);
	
	(eliminar == 0)? vocales.shift() : 
	vocales.splice(eliminar, eliminar);

	a = Math.floor(Math.random() * (vocales.length-1));
	b = Math.floor(Math.random() * (vocales.length-2));
	c = Math.floor(Math.random() * (vocales.length-3));

	izq = vocales[a].toUpperCase();
	(a == 0)? vocales.shift() : 
	vocales.splice(a, a);
	der = vocales[b].toUpperCase();
	(b == 0)? vocales.shift() : 
	vocales.splice(b, b);
	cen = vocales[c].toUpperCase();
	inicial = inicial.toUpperCase();

	izquierda = document.getElementById("izquierda");
	izquierda.innerHTML = izq;
	izquierda.onclick = function() {mal()};

	centro = document.getElementById("derecha");
	centro.innerHTML = cen;
	centro.onclick = function() {mal()};

	derecha = document.getElementById("centro");
	derecha.innerHTML = der;
	derecha.onclick = function() {mal()};

	switch (win) {
		case 0: izquierda.innerHTML = inicial;
  			izquierda.onclick = function() {bien()};
		break;
		case 1: derecha.innerHTML = inicial;
  			derecha.onclick = function() {bien()};
		break;
		default: centro.innerHTML = inicial;
			 centro.onclick = function() {bien()};
	}
	revelar();
}

function revelar() {
	document.getElementById("figura").src = path+figuras[contador]+".png";
	document.getElementById("titulo").hidden = false;
	document.getElementById("bien").hidden = true;
	document.getElementById("flecha").hidden = true;
	document.getElementById("botones").hidden = false;

	contador++;
}
