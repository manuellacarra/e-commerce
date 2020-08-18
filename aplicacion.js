
function hola (){
	let primeraVez = prompt("Bienvenid@ a TU PICADA ¿Es tu primera vez en el sitio?")
	if (primeraVez == "no"){
		usuario = prompt("Ingresá tu usuario");
		contraseña = prompt("Ingresá tu constraseña");
		alert("Qué bueno tenerte de vuelta " + usuario )
	}else if (primeraVez == "si"){
		nombre = prompt("Ingresá tu nombre y apellido completo:");
		mail = prompt("Ingresá tu correo electrónico:");
		usuario = prompt("Creá tu usuario");
		contraseña = prompt("Creá tu contraseña");
		alert("Bienvenid@ " + usuario + ", ya podes empezar a armar la picada perfecta.");
	} else{
		alert("Tu respuesta no fue ingresada correctamente. Por favor ingrese 'si' o 'no' como respuesta.")
	}
}

var picada = ["Embutidos", "Quesos", "Snacks", "Panes", "Bebidas"]; 
var embutidos = ["Jamón Cocido", "Jamón Crudo", "Salamín Picado Fino", "Salamín Picado Grueso", "Bondiola"];
var quesos = ["Queso Mar del Plata", "Queso Sardo", "Queso Cheddar", "Queso Vegano"]; 
var snacks = ["Doritos", "Palitos Salados", "Papas Lays", "Maní Salado", "Aceitunas Verdes", "Cheetos"];
var panes = ["Pan de Campo", "Pan Integral"];
var bebidas = ["Agua Mineral", "Coca-Cola", "Cerveza Quilmes", "Vino Casa Valdes"];

function aptoVeganos(){
	separo = quesos.slice(3);
	queSna = separo.concat(snacks)
	vegano = queSna.concat(panes)
	console.log(vegano);
}

function agregarEmbutido(){
	ne = prompt("¿Te gustaría que agreguemos algún otro embutido a nuestra web?")
	if(ne == "si"){
		ae = prompt ("¿Qué embutido te gustaría que agreguemos?")
	}else{
		console.log(embutidos)
	}
	console.log(embutidos.push(ae));
}

function agregarQueso(){
	nq = prompt("¿Te gustaría que agreguemos algún otro queso a nuestra web?")
	if(nq == "si"){
		aq = prompt ("¿Qué queso te gustaría que agreguemos?")
	}else{
		console.log(quesos)
	}
	console.log(quesos.push(aq));
}

function agregarSnack(){
	ns = prompt("¿Te gustaría que agreguemos algún otro snack a nuestra web?")
	if(ns == "si"){
		as = prompt ("¿Qué snack te gustaría que agreguemos?")
	}else{
		console.log(snacks)
	}
	console.log(snacks.push(as));
}

function agregarBebida(){
	nb = prompt("¿Te gustaría que agreguemos algúna otra bebida a nuestra web?")
	if(nb == "si"){
		ab = prompt ("¿Qué bebida te gustaría que agreguemos?")
	}else{
		console.log(bebidas)
	}
	console.log(bebidas.push(ae));
}



/*
OBJETOS

var computadoras = ["Apple", "Lenovo", "LG", "HP", "Dell", "Exo"];

function PC(marca, tipo, serial){
	this.marca = marca;
	this.tipo = tipo;
	this.serial = serial;

	this.presentacion = function (){
		mensaje = "Esta computadora es una " + tipo + " de " + marca +".";
		alert(mensaje);
	}

	this.GetDatosPC = function(){
		return console.log("Esta computadora es una " + tipo + " de " + marca +".");
	} 
	
}
 
var HP = new PC(computadoras[3], "Notebook", 5); 
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
SWITCH
switch(i){
 			case 2:
            	console.log("Es par");
            	break;
        	case 4:
            	console.log("Es par");
            	break;
        	case 6:
            	console.log("Es par");
            	break;      
         	case 8:
            	console.log("Es par");
            	break;
 		}
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

CONTINUE Y BREAK
function listarDias (){
	for (var i=0; i<7; i++) {	
		if (i==5){
			continue; O break; ---> saltea uno o termina ahí 
		}
		console.log(dias[i]);
	}
}
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

ARRAY
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log(dias[4]) --> muestra el viernes
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

FUNCTION
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", "Lunes"];

function listarDias (){
	for (var i=0; i <= dias.length; i++){
		if (i==7){
			alert("Hola, llegaste al día 7.")
		}
 		if (i%2){
 			console.warn("Es par");
 		}
 		console.log(dias[i]);
 	}
} 

sumar ();
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

IF STATEMENT:
var numero = prompt("Ingrese un número");

if (numero >= 10 && numero <= 50){
	alert("Ingresaste un número entre el 10 y el 50")
} 
else{
  console.error("El número no está entre el 10 y el 50")
}
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

 ALERT Y PROMPT:
var apellido = prompt ("Ingrese su apellido");
var nombreYApellido = nombre +" "+ apellido;

alert( "Hola" +" "+ nombreYApellido);
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////




function hola (){
	let bienvenido = document.getElementById("exampleInputUser"). value;
	alert("Hola "+ bienvenido + ", bienvenido de nuevo." );
}

function bienvenido (){
	let pass1 = document.getElementById("exampleInputPassword1"). value;
	let pass2 = document.getElementById("exampleInputPassword2"). value;

	if (pass1 != pass2){
		alert("Las contraseñas ingresadas no son iguales.")
	} else{
		let usuarioNuevo = document.getElementById("exampleInputUser"). value;
	}
	alert("Hola "+ usuarioNuevo + ", bienvenido a TU PICADA." );
}	








*/

