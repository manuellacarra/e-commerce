
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


//SE AGREGAN LA CANTIDAD DE ÍTEMS AL CARRITO

var container = d.getElementsByClassName("container");

function addToCart(event) {
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  counter.innerHTML = parseInt(currentValue) + 1;

  let productCard = document.createElement('div');
  productCard.innerHTML = producto.name;
  /*`
  		<div class="container">
         <div class="row">
           <div class="col shop-detail text-center">
             <img src=${producto.imgPath}>
          </div>
          <div class="col shop-detail mb-4">
             <p>${producto.name}</p>
             <p>$${producto.price}</p>
             <span>Remover</span>
          </div>
          <div class="col shop-detail align-middle">
             <i class="fas fa-chevron-up"></i>
             <p id="productAmount">0</p>
             <i class="fas fa-chevron-down"></i>
          </div>
        </div>
  `;*/

  productsOnCard.appendChild(productCard); 

}

