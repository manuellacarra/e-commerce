
class Cart {
  carritoDeCompras = [];  

  addProduct(id){
    let filtro = comidaYBebida.filter(producto => producto.id === id);
    carritoDeCompras.push(filtro[0]);
    this.buildCart();
    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
  }

      itemsOnCart(producto){
        return  `
                 <div class="col shop-detail text-center">
                   <img src=${producto.imgPath}>
                </div>
                <div class="col shop-detail mb-4">
                   <p>${producto.name}</p>
                   <p>$${producto.price}</p>
                   <span onclick="removeItem(${producto.id})" id="remove">Remover</span>
                </div>
                <div class="col shop-detail align-middle">
                   <span><i class="fas fa-chevron-up"></i></span>
                   <p id="productAmount">0</p>
                   <span><i class="fas fa-chevron-down"></i></span>
                </div>
        `;  
      }

      buildCart(){
        var productosHtml = document.getElementById("productInCart");
        productosHtml.innerHTML = "";
        var html = "";
        carritoDeCompras.forEach((producto) =>{
          html += this.itemsOnCart(producto);
        });
        productosHtml.innerHTML = html;
        
      }
      
     removeProduct(id){
        let filtro = carritoDeCompras.findIndex(producto => producto.id === id);
        carritoDeCompras.splice(filtro, 1);
        this.buildCart();
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
      }


}


/*


//SE AGREGAN LA CANTIDAD DE ÍTEMS AL CARRITO

const container = d.getElementsByClassName("container");
var carritoDeCompras = [];


function addToCart(id){
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  counter.innerHTML = parseInt(currentValue) + 1;

  let filtro = comidaYBebida.filter(producto => producto.id === id);
  
  carritoDeCompras.push(filtro[0]);
  
  buildCart();
  localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
}

function itemsOnCart(producto){
  return  `
           <div class="col shop-detail text-center">
             <img src=${producto.imgPath}>
          </div>
          <div class="col shop-detail mb-4">
             <p>${producto.name}</p>
             <p>$${producto.price}</p>
             <span onclick="removeItem(${producto.id})" id="remove">Remover</span>
          </div>
          <div class="col shop-detail align-middle">
             <span><i class="fas fa-chevron-up"></i></span>
             <p id="productAmount">0</p>
             <span><i class="fas fa-chevron-down"></i></span>
          </div>
  `;  
}

function buildCart(){
  var productosHtml = document.getElementById("productInCart");
  productosHtml.innerHTML = "";
  var html = "";
  carritoDeCompras.forEach((producto) =>{
    html += itemsOnCart(producto);
  });
  productosHtml.innerHTML = html;
}

function productAmount(id){
  let cantidadDeUnProducto=document.getElementById("productAmount");
  cantidadDeUnProducto = 0
  let filtro = comidaYBebida.filter(producto => producto.id === id);
  if (producto > 1){
    console.log("EL MISMO PRODUCTO ESTÁ MAS DE UNA VEZ");
  }
 
}

function removeItem(id){
  let filtro = carritoDeCompras.findIndex(producto => producto.id === id);
  carritoDeCompras.splice(filtro, 1);
  let counter = document.getElementById("cartCounter");
  let currentValue = counter.innerHTML;
  counter.innerHTML = parseInt(currentValue) - 1;
  buildCart();
  localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
}*/



