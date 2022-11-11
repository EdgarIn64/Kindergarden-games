  limite = 0;
    enemigos = 50;
    fracaso = true;
    vidas = 5;
    inicio = false;
    velocidad = 5;
	fin = false;
	
    function iniciar() {
	document.getElementById('inicio').hidden = true;
	document.getElementById('sidebar').hidden = false;
	document.getElementById('juego').hidden = false;
     	document.getElementById("contador").innerHTML = "x"+enemigos;
	velocidad = document.getElementById("dificultad").value;
	inicio = true;
	juego();
    }

    function final() {
	let resultado = "";
	document.getElementById('juego').hidden = true;
	document.getElementById('final').hidden = false;
        (vidas>0) ? resultado = "victoria" : resultado = "fracaso";
	document.getElementById(resultado).hidden = false;
	inicio = false;
	fin = true;
    }

    function juego() {
      fracaso = true;
      let start = Date.now();
      limite = screen.height - 270;
      let distancia = 0;
      let enemigo = Math.floor(Math.random() * (9) + 1);

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        distancia = moverEnemigo(enemigo, timePassed, velocidad);
        
        if (distancia > limite) { 
          clearInterval(timer);
          if(enemigos>1)
	        reset();
	  else {
     		document.getElementById("contador").innerHTML = "x0";
		final();
	  }
        }
      }, 10);
    }

    function moverEnemigo(enemigo, timePassed, velocidad) {
      switch (enemigo) {
        case 1: uno.style.top = timePassed / velocidad + 'px';
	return parseInt(uno.style.top);
        break;
        case 2: dos.style.top = timePassed / velocidad + 'px';
	return parseInt(dos.style.top);
        break;
        case 3: tres.style.top = timePassed / velocidad + 'px';
	return parseInt(tres.style.top);
        break;
        case 4: cuatro.style.top = timePassed / velocidad + 'px';
	return parseInt(cuatro.style.top);
        break;
        case 5: cinco.style.top = timePassed / velocidad + 'px';
	return parseInt(cinco.style.top);
        break;
        case 6: seis.style.top = timePassed / velocidad + 'px';
	return parseInt(seis.style.top);
        break;
        case velocidad: siete.style.top = timePassed / velocidad + 'px';
	return parseInt(siete.style.top);
        break;
        case 8: ocho.style.top = timePassed / velocidad + 'px';
	return parseInt(ocho.style.top);
        break;
        case 9: nueve.style.top = timePassed / velocidad + 'px';
	return parseInt(nueve.style.top);
        break;
        default: uno.style.top = timePassed / velocidad + 'px';
	return parseInt(uno.style.top);
      }
    }

    function reset() {
      uno.style.top = 0;
      dos.style.top = 0;
      tres.style.top = 0;
      cuatro.style.top = 0;
      cinco.style.top = 0;
      seis.style.top = 0;
      siete.style.top = 0;
      ocho.style.top = 0;
      nueve.style.top = 0;

      if (fracaso) {
	setTimeout(() => { 
		vidas--;
		document.getElementById("vidas").src = "imagenes/evaluacion/vidas_"+vidas+".png";
		(vidas <= 0) ? final() : juego();     
	}, 400);
	document.getElementById("golpe").hidden = false;
      } 
      else {
	enemigos--;
	document.getElementById("contador").innerHTML = "x"+enemigos;
	juego();
      }
    }

    function acierto() {
	limite = 0; 
	fracaso=false;
    } 
    function moverNave(posicion) {
        nave = document.getElementById("nave");
        laser = document.getElementById("laser");
	laser.hidden=false;
	setTimeout(() => {
		laser.hidden = true;
	}, 200);
        nave.style.left = posicion;
        laser.style.left = posicion;

    }

function atacar(e) {
  if(inicio) {
       	e.preventDefault();
	switch (e.keyCode) {
	case (49 || 97): moverNave("10px");
		(uno.style.top != "0px") ? acierto() : fracaso=true;
	break;
	case (50 || 98): moverNave("115px");
		(dos.style.top != "0px") ? acierto() : fracaso=true;
	break;
	case (51 || 99): moverNave("220px");
		(tres.style.top != "0px") ? acierto(): fracaso=true;
	break;
	case (52 || 100): moverNave("330px");
		(cuatro.style.top != "0px") ? acierto() : fracaso=true;
	break;
	case (53 || 101): moverNave("430px");
		(cinco.style.top != "0px") ? acierto(): fracaso=true;
	break;
	case (54 || 102): moverNave("530px");
		(seis.style.top != "0px") ? acierto() : fracaso=true;
	break;
	case (55 || 103): moverNave("640px");
		(siete.style.top != "0px") ? acierto() : fracaso=true;
	break;
	case (56 || 104): moverNave("745px");
		(ocho.style.top != "0px") ? acierto() : fracaso=true;
	break;  
	case (57 || 105): moverNave("850px");
		(nueve.style.top != "0px") ? acierto() : fracaso=true;
	break;  
	}
  }
  else if (fin) {
       	e.preventDefault();
	if (e.keyCode == 13)
		window.location.reload(false);
  }  else {
       	e.preventDefault();
	let valorOpcion =  dificultad.selectedIndex;
	switch (e.keyCode) {
		case (13): iniciar();
		break;
		case (50): valorOpcion -= 1;  
		break;
		case (52): valorOpcion -= 1;  
		break;
		case (54): valorOpcion += 1;  
		break;
		case (56): valorOpcion += 1;  
		break;
		default: alert(e.keyCode);
	}
	if (valorOpcion < dificultad.options.length && valorOpcion >= 0)
		dificultad.selectedIndex = valorOpcion;
  }
}