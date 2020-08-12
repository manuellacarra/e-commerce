

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

*/

