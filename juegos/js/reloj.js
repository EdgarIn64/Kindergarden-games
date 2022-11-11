contador = 0;
hora = [3,1,7,4,9,6,11,5,8,10,2];

function evaluar() {
	intento = document.getElementById("intento").value;
	(intento == hora[contador]) ? bien() : mal();
}

function bien() {
	setTimeout(() => {
	    document.getElementById("bien").hidden = true;
	    document.getElementById("juegoReloj").hidden = false;
	    document.getElementById("intento").value = "";
	    (contador < hora.length) ? pasar() : fin();
	}, 950);
    document.getElementById("bien").hidden = false;
    document.getElementById("juegoReloj").hidden = true;
}

function mal() {
	setTimeout(() => {
	    document.getElementById("mal").hidden = true;
	}, 900);
    document.getElementById("mal").hidden = false;
}

function pasar() {
	contador++;
	switch (hora[contador]) {
		case 1: uno();
		break;
		case 2: dos();
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
		default: fin();
	}
}

function fin() {
    document.getElementById("fin").hidden = false;
    document.getElementById("juegoReloj").hidden = true;
}

function uno() {
	document.getElementById("hora").style.transform = "rotate(-60deg)";
	document.getElementById("hora").style.bottom = 125;
	document.getElementById("hora").style.left = 64;
}

function dos() {
	document.getElementById("hora").style.transform = "rotate(-30deg)";
	document.getElementById("hora").style.bottom = 80;
	document.getElementById("hora").style.left = 110;
}

function cuatro() {
	document.getElementById("hora").style.transform = "rotate(30deg)";
	document.getElementById("hora").style.bottom = -40;
	document.getElementById("hora").style.left = 110;
}

function cinco() {
	document.getElementById("hora").style.transform = "rotate(60deg)";
	document.getElementById("hora").style.bottom = -80;
	document.getElementById("hora").style.left = 60;
}

function seis() {
	document.getElementById("hora").style.transform = "rotate(90deg)";
	document.getElementById("hora").style.bottom = -100;
	document.getElementById("hora").style.left = 0;
}

function siete() {
	document.getElementById("hora").style.transform = "rotate(120deg)";
	document.getElementById("hora").style.bottom = -80;
	document.getElementById("hora").style.left = -60;
}

function ocho() {
	document.getElementById("hora").style.transform = "rotate(150deg)";
	document.getElementById("hora").style.bottom = -40;
	document.getElementById("hora").style.left = -110;
}

function nueve() {
	document.getElementById("hora").style.transform = "rotate(180deg)";
	document.getElementById("hora").style.bottom = 20;
	document.getElementById("hora").style.left = -130;
}

function diez() {
	document.getElementById("hora").style.transform = "rotate(210deg)";
	document.getElementById("hora").style.bottom = 80;
	document.getElementById("hora").style.left = -110;
}

function once() {
	document.getElementById("hora").style.transform = "rotate(240deg)";
	document.getElementById("hora").style.bottom =125;
	document.getElementById("hora").style.left = -64;
}
