
// MOSTRAR/OCULTAR LISTA DE ELEMENTOS

$("#cartIcon").css("cursor", "pointer");
$("#cartIcon").click(function(){
   $("#productCardMask").css("width", "100%");
   $("#productsOnCart").css("width", "400px");
   /*$("#productCardMask").animate({
      width: "toggle"
    });
    $("#productsOnCart").animate({
      width: "toggle"
    });
    
   $("#productCardMak").css("transition", "0.5s ease-in");
   $("#productsOnCart").css("transition", "0.5s ease-in");*/
})

$("#closeCart").css("cursor", "pointer");
$("#closeCart").click(function(){
  $("#productCardMask").css("width", "0");
  $("#productsOnCart").css("width", "0");

  /*$("#productCardMak").css("transition", "0.5s ease-in");
   $("#productsOnCart").css("transition", "0.5s ease-in");
  $(".productCardMask").animate({
    width: "right"
  });
  (".productsOnCart").animate({
    width: "right"
  });
   $$("#productCardMask").fadeOut(); */
})

//SE AGREGAN LA CANTIDAD DE ÍTEMS AL CARRITO

var container = d.getElementsByClassName("container");
var carritoDeCompras = [];

//const result = words.filter(word => word.length > 6);



function addToCart(id) {
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  counter.innerHTML = parseInt(currentValue) + 1;

  let filtro = comidaYBebida.filter(producto => producto.id === id);
  
  carritoDeCompras.push(filtro[0]);
  
  construirCarrito();
}

function itemsOnCart(producto){
  return  `
           <div class="col shop-detail text-center">
             <img src=${producto.imgPath}>
          </div>
          <div class="col shop-detail mb-4">
             <p>${producto.name}</p>
             <p>$${producto.price}</p>
             <span onclick="removerItem(${producto.id})" id="remove">Remover</span>
          </div>
          <div class="col shop-detail align-middle">
             <i class="fas fa-chevron-up"></i>
             <p id="productAmount">0</p>
             <i class="fas fa-chevron-down"></i>
          </div>
  `;  
}

function construirCarrito(){
  var productosHtml = document.getElementById("productInCart");
  productosHtml.innerHTML = "";
  var html = "";
  carritoDeCompras.forEach((producto) =>{
    html += itemsOnCart(producto);
  });
  productosHtml.innerHTML = html;
}

$("#remove").css("cursor", "pointer");
function removerItem(id){
  let filtro = carritoDeCompras.findIndex(producto => producto.id === id);
  carritoDeCompras.splice(filtro, 1);
  console.log(carritoDeCompras);
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  counter.innerHTML = parseInt(currentValue) - 1;
  construirCarrito();
}

//splice / slice

localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));