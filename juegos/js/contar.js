// Los nombres de las imagenes que se vayan a usar deben tener el siguiente formato: #_nombre.png
// Ejemplo:  5_ratones.png

// En figuras se pone el nombre de todas las imagenes que se vaya a usar.
var figuras = ["ratones", "pandas", "aviones", "balones", 
	"osos", "arcoiris", "vacas", "canarios", "flores", 
	"estrellas", "perros", "robots", "peras", "soles",
	"autos", "pinguinos", "yoyos"];

// En cantidad se escribe el numero de la imagen.
var cantidad = [5, 3, 4, 7, 7, 10, 8, 9, 11, 9, 7, 5, 9, 16, 5, 6, 4];
var contador = 0;

// En path esta la dirrecion en que estan ubicadas las imagenes
var path = "imagenes/multiples/";
var mensaje = "Cuenta el numero de ";

// Al pulsar un boton se llama la funcion evaluar(), que evalua si fue la opcion correcta.
function evaluar(boton) {
	correcto = cantidad[contador];
	elegido = document.getElementById(boton);
	(elegido.innerHTML == correcto) ? bien() : mal();
}

function mal() {
	//Se muestra rapidamente un tache para indicar que estuvo mal
	setTimeout(() => {
		document.getElementById("mal").hidden = true;
	}, 800);
	document.getElementById("mal").hidden = false;
}

function bien() {
	//Se muestra rapidamente un tache para indicar que estuvo mal
	contador++;
	var nombre = figuras[contador];
	var figura = cantidad[contador]+"_"+nombre+".png"
	setTimeout(() => {
		document.getElementById("bien").hidden = true;

		//Prepara la siguiente imagen y cambia los valores de los botones
		document.getElementById("indicacion").innerHTML = mensaje+nombre;
		document.getElementById("figura").src = path+figura;
		(contador < cantidad.length) ? generarOpciones() : fin();
	}, 500);
	document.getElementById("bien").hidden = false;
}

function generarOpciones() {
	//Establece aleatoriamente los valores de todas las opciones.
	izq = document.getElementById("izquierda");
	der = document.getElementById("derecha");
	abIzq = document.getElementById("abajoIzq");
	abDer = document.getElementById("abajoDer");

	correcto = cantidad[contador];
	if (correcto > 7)  {
		izq.innerHTML = correcto - 2;
		der.innerHTML = correcto + 4;
		abIzq.innerHTML = correcto - 5;
		abDer.innerHTML = correcto + 7;
	}
	else {
		izq.innerHTML = correcto + 4;
		der.innerHTML = correcto + 1;
		abIzq.innerHTML = correcto + 7;
		abDer.innerHTML = correcto - 2;
	}


	//Establece aleatoriamente la opcion correcta.
	ganador = Math.floor(Math.random (1) * 4);

	switch (ganador) {
		case 1: der.innerHTML = correcto;
		break;
		case 2: abIzq.innerHTML = correcto;
		break; 
		case 3: abDer.innerHTML = correcto;
		break;
		default: izq.innerHTML = correcto;
	}
}

function fin() {
	//Muestra la seccion final. 
	document.getElementById("fin").hidden = false;
	document.getElementById("juego").hidden = true;
}