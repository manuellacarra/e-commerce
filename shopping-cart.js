
//SE AGREGAN LA CANTIDAD DE ÍTEMS AL CARRITO

var container = d.getElementsByClassName("container");

function addToCart(event) {
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  counter.innerHTML = parseInt(currentValue) + 1;

  let productCard = document.createElement('div');
  productCard.innerHTML=producto.name;

  productsOnCard.appendChild(productCard); 

}


// MOSTRAR/OCUKTAR LISTA DE ELEMENTOS
const cartIcon = document.getElementById('cartIcon')
const productCardMask = document.getElementById("productCardMask")
const productsOnCard = document.getElementById("productsOnCard")

cartIcon.addEventListener('click', () =>{
	productCardMask.style.visibility='visible';
	productsOnCard.style.visibility='visible'; 
})

productCardMask.addEventListener('click', () =>{
	productCardMask.style.visibility='hidden';
	productsOnCard.style.visibility='hidden'; 
})