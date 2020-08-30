
const d = document;
d.title = "Tu Picada";
const darkMode = d.getElementById('darkMode')
const botonStyle = d.getElementsByClassName('btn')
const boton = d.getElementsByTagName('button')

darkMode.addEventListener('click', function modoOscuro(){
	d.body.classList.add('darkMode');
	for(i=0; i<botonStyle.length; i++){
		botonStyle[i].classList.add('darkMode');
	}
})

darkMode.addEventListener('dblclick', function modoOscuro(){
	d.body.classList.remove('darkMode');
	for(i=0; i<botonStyle.length; i++){
		botonStyle[i].classList.remove('darkMode');
	}
	d.body.style.transition = "1s ease-in";
})

//CARRO DE COMPRAS

var container = d.getElementsByClassName("container");

function addToCart(event) {
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  counter.innerHTML = parseInt(currentValue) + 1;

}

/*
function removeFromCart(event) {
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  if (currentValue >= 0){
  	let counter.innerHTML = parseInt(currentValue) - 1;
  }else{
  	counter.innerHTML = currentValue;
  }
}

//

const cupon = d.getElementById('cupon')
const precios = d.getElementsByClassName('descuento')
//var jamonDescuento = parseInt(fiambre);


cupon.addEventListener('click', function descuento(e){
	codigo = prompt("Ingrese el código del cupón y presione la tecla 'Enter': ");

	if ( codigo != "" && event.keyCode == 13){
		swal("!Excelente¡", "Se te aplicó un 10% de descuento sobre los embutidos", "success");
		precios.innerHTML = descuentoAplicado();

	} else{
		swal("Por favor ingrese un código");
	}
})


var ls = localStorage; 
var boton = d.getElementsByClassName("btn");





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

