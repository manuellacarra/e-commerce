

let shoppingCart;
var carritoDeCompras = [];

window.onload = () =>{

		var urlLocal= 'data.json';

		$.ajax({
			url:urlLocal,
			dataType: 'json',
			success: function(data, status, jqXHR){
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

	
	shoppingCart = new Cart()
	shoppingCart.getProductsFromLS();
	shoppingCart.buildCart();
	shoppingCart.totalQuantity();
	shoppingCart.totalPrice(total);

}
		
//CREAR PRODUCTOS EN EL HTML

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



function construirHTML (ContainerID, array, funcion){
  var productosHtml = document.getElementById(ContainerID);
  productosHtml.innerHTML = "";
  var html = "";
  array.forEach((producto) =>{
    html += funcion(producto);
  });
  productosHtml.innerHTML = html;
}

//

var d = document;
d.title = "Tu Picada";
 

// MOSTRAR CARRITO

$("#cartIcon").css("cursor", "pointer");
$("#cartIcon").click(function(){
   $("#productCardMask").css("width", "100%");
   $("#productsOnCart").css("width", "400px");
   if (screen.width < 576){
		$("#productsOnCart").css("width", "300px");
    }
})

$("#closeCart").css("cursor", "pointer");
$("#closeCart").click(function(){
  $("#productCardMask").css("width", "0");
  $("#productsOnCart").css("width", "0");
  

})


// AGREGO PRODUCTOS AL CARRITO Y CAMBIA EL NÚMERO DE PRODUCTOS EN EL CARRO

function addToCart(id){ 
	shoppingCart.addProduct(id)
}

// AGREGO/SACO CANTIDADES DEL MISMO PRODUCTO


function add(id) {
	shoppingCart.addItem(id);
}
function less(id) {
	shoppingCart.takeItem(id);
}

// BORRO PRODUCTOS DEL CARRITO

function remove(id){
    let counter = document.getElementById("cartCounter");
    let currentValue = counter.innerHTML;
    counter.innerHTML = parseInt(currentValue) - 1;
    shoppingCart.removeProduct(id);
	shoppingCart.totalPrice(total);
	shoppingCart.buildCart();
}

// BORRO TODO EL CARRITO
$("#cleanCart").click(function(){
    $("#productInCart").slideUp();
    $("#cartCounter").html(0);
    carritoDeCompras = [];
    $("#productInCart").slideDown();
    shoppingCart.buildCart();
    shoppingCart.totalPrice(total);
    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
}) 


// CONFIRMAR COMPRA
var buyButton= document.querySelector("#buy");

function buy(){
	if(carritoDeCompras == 0){
		swal("", "Debes seleccionar la menos un producto para finalizar la compra", "error");
	}else{
		//$("#form").css("display", "auto");
		$("#productInCart").slideUp();
		$("#form").slideDown();
		$("#cleanCart").css("display", "none");
		$("#buy").css("display", "none");
	}
}

$("#back").click(function(){
	$("#form").slideUp();
	$("#productInCart").slideDown();
	$("#cleanCart").css("display", "inline");
	$("#buy").css("display", "inline");
})

function confirmBuy(){
	localStorage.getItem('carritoDeCompras')
	let elementos = carritoDeCompras
	let form = document.querySelector("#form")
	let name = form.elements["name"].value
	let mail = form.elements["mail"].value
	let address = form.elements["address"].value
	if(name == "" || mail == "" || address == "" ){
		$("#error").fadeToggle();
		
	} else{
		swal({
			title: "Gracias " + name + " por confiar en TU PICADA",
			text: "",
			icon: "success",
	  	}); 
	}
	
	
}
	


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

