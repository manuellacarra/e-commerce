window.onload = () =>{

		var urlLocal= 'data.json';

		$.ajax({
			url:urlLocal,
			dataType: 'json',
			success: function(data, status, jqXHR){
				swal("", "Se estableció la conexión exitosamente", "success");
				var embutidos=data[0].embutidos;
				var quesos=data[0].quesos;
				var panes=data[0].panes;
				var snacks=data[0].snacks;
				var bebidas=data[0].bebidas
				//CREAR HTML
				construirHTML("embutidos",embutidos, crearProductos);
  				construirHTML("quesos", quesos, crearProductos);
  				construirHTML("snacks", snacks, crearProductos);
  				construirHTML("panes", panes, crearProductos);
  				construirHTML("bebidas", bebidas, crearProductos);
				//
			}, error: function(error){
				error = alert("", 'No se establecio la conexión', "error");
			}
				
		})

}
		
function crearProductos(producto) { 
    return `
			<div class="contenedor">
				<img src="${producto.imgPath}" class="foto-picada">
				<button type="button" class="btn buttonPlus" onclick="addToCart(${producto.id})">+</button>
				<h3>${producto.name}</h3>
				<h4 id="priceHTML">$${producto.price}</h4>
			</div>
     `;
};   

function crearDescuento(producto) { 

	return `
				<div class="contenedor">
					<img src="${producto.imgPath}" class="foto-picada">
					<button type="button" class="btn buttonPlus" onclick="addToCart(${producto.id})">+</button>
					<h3>${producto.name}</h3>
					<h4 class="descuento" id="priceHTML">$${producto.price * 0.9}</h4>
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


var d = document;
d.title = "Tu Picada";
 

// MOSTRAR CARRO

$("#cartIcon").css("cursor", "pointer");
$("#cartIcon").click(function(){
   $("#productCardMask").css("width", "100%");
   $("#productsOnCart").css("width", "400px");

})

$("#closeCart").css("cursor", "pointer");
$("#closeCart").click(function(){
  $("#productCardMask").css("width", "0");
  $("#productsOnCart").css("width", "0");


})

// MODO OSCURO CON JQUERY

$(function modoOscuro(){
	$("#darkMode").on({
		click:function(){
			$("#comidaYbebida").addClass("bodyDarkMode");
		},
		dblclick:function(){
			$("#comidaYbebida").removeClass("bodyDarkMode");
			$("#comidaYbebida").css("transition", "1s ease-in");
		}
	})
})



// CUPÓN DE DESCUENTO

const cupon = d.getElementById('cupon')
const precios = d.getElementsByClassName('descuento')


cupon.addEventListener('click', function descuento(e){
	codigo = prompt("Ingrese el código del cupón y presione la tecla 'Enter': ");

	if ( codigo != "" || event.keycode == 13 ){
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

