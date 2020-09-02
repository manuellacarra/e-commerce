
var embutidos = [
    {"name":"JAMÓN COCIDO", "price":80, "imgPath":"images/jamon-cocido.jpeg"},
    {"name":"JAMÓN CRUDO", "price":100, "imgPath":"images/jamon-crudo.png"},
    {"name":"SALAMÍN PICADO FINO", "price":120, "imgPath":"images/salamin-fino.jpg"},
    {"name":"SALAMÍN PICADO GRUESO", "price":120,"imgPath":"images/salamin-grueso.jpg"},
    {"name":"BONDIOLA", "price":140, "imgPath":"images/bondiola.jpg"} 
];

var quesos = [
    {"name":"MAR DEL PLATA", "price":120, "imgPath":"images/queso-mdp.jpg"},
    {"name":"SARDO", "price":120, "imgPath":"images/queso-sardo.png"},
    {"name":"CHEDDAR", "price":150, "imgPath":"images/queso-cheddar.jpg"},
    {"name":"VEGANO", "price":180, "imgPath":"images/queso-vegano.jpg"}
];


var snacks = [
    {"name":"DORITOS", "price":150, "imgPath":"images/doritos.jpg"},
    {"name":"PALITOS SALADOS", "price":80, "imgPath":"images/palitos.jpg"},
    {"name":"PAPAS LAYS", "price":100, "imgPath":"images/lays.jpg"},
    {"name":"MANÍ SALADO", "price":80, "imgPath":"images/mani.jpg"},
    {"name":"ACEITUNAS VERDES", "price":200, "imgPath":"images/aceitunas.jpg"},
    {"name":"CHEETOS", "price":130, "imgPath":"images/cheetos.png"}
];

var panes = [
    {"name":"PAN DE CAMPO", "price":150, "imgPath":"images/pan-campo.jpg"},
    {"name":"PAN INTEGRAL", "price":180, "imgPath":"images/pan-integral.jpg"}
];
var bebidas = [
    {"name":"AGUA MINERAL 1LT.", "price":80, "imgPath":"images/agua-mineral.jpg"},
    {"name":"COCA-COLA 1.5 LTS", "price":120, "imgPath":"images/coca-cola.jpg"},
    {"name":"CERVEZA QUILMES 1LT", "price":150, "imgPath":"images/quilmes.png"},
    {"name":"VINO CASA VALDEZ", "price":200, "imgPath":"images/vino.jpg"}
];



window.onload = () =>{
  construirHTML("embutidos",embutidos, crearProductos);
  construirHTML("quesos", quesos, crearProductos);
  construirHTML("snacks", snacks, crearProductos);
  construirHTML("panes", panes, crearProductos);
  construirHTML("bebidas", bebidas, crearProductos);
}

function crearProductos(producto) { 
    return `
			<div class="row justify-content-center">
			<div class="col-4 text-center">
				<img src="${producto.imgPath}" class="foto-picada">
				<button type="button" class="btn" onclick="addToCart(event)">+</button>
				<h3>${producto.name}</h3>
				<h4 id="priceHTML">$${producto.price}</h4>
			</div>
			</div>
     `;
};   

function crearDescuento(producto) { 

	return `
				<div class="row justify-content-center">
				<div class="col-4 text-center">
					<img src="${producto.imgPath}" class="foto-picada">
					<button type="button" class="btn" onclick="addToCart(event)">+</button>
					<h3>${producto.name}</h3>
					<h4 class="descuento" id="priceHTML">$${producto.price * 0.9}</h4>
				</div>
				</div>
     `;
};  


function construirHTML (ContainerID, array, funcion){
  var productosHtml = document.getElementById(ContainerID);
  productosHtml.innerHTML = "";
  var html = "";
  array.forEach((producto) =>{
    html += funcion(producto);
  });
  productosHtml.innerHTML = html;
}


//MODO OSCURO

var d = document;
d.title = "Tu Picada";
 
var darkMode = d.getElementById('darkMode')
var botonStyle = d.getElementsByClassName('btn')
var boton = d.getElementsByTagName('button')

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


/*function removeFromCart(event) {
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  if (currentValue >= 0){
  	let counter.innerHTML = parseInt(currentValue) - 1;
  }else{
  	counter.innerHTML = currentValue;
  }
}*/

// CUPÓN DE DESCUENTO

const cupon = d.getElementById('cupon')
const precios = d.getElementsByClassName('descuento')


cupon.addEventListener('click', function descuento(e){
	codigo = prompt("Ingrese el código del cupón y presione la tecla 'Enter': ");

	if ( codigo != ""){
		swal("!Excelente¡", "Se te aplicó un 10% de descuento sobre los embutidos", "success");
		construirHTML("embutidos",embutidos, crearDescuento)

	} else{
		swal("Por favor ingrese un código");
	}
})





/*OBJETOS

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

