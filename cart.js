
class Cart {
  carritoDeCompras = [];  

  // CREA EL CARRITO
  addProduct(id){
    let filtro = comidaYBebida.filter(producto => producto.id === id)[0];

    if(!carritoDeCompras.find(item => item.id === filtro.id)){
      carritoDeCompras = [
        ...carritoDeCompras,
        filtro
      ]
    }
    if(carritoDeCompras[carritoDeCompras.findIndex(item => item.id === filtro.id)].quantity === undefined ||carritoDeCompras[carritoDeCompras.findIndex(item => item.id === filtro.id)].quantity === 0){
      filtro.quantity = 1
    } else {
      carritoDeCompras[carritoDeCompras.findIndex(item => item.id === filtro.id)].quantity++
    }
    this.buildCart();
    this.totalPrice(total);
    this.totalQuantity();
    //this.returnQuantity(producto);
    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
    
  }

  // AGREGA CANTIDADES DE UN MISMO PRODUCTO
  addItem(id){
    let filtro = carritoDeCompras.filter(producto => producto.id === id)[0];
    carritoDeCompras[carritoDeCompras.findIndex(item => item.id === filtro.id)].quantity++
    this.buildCart();
    this.totalQuantity();
    this.totalPrice(total);
    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
    
  } 

  // REDUCE CANTIDADES DE UN MISMO PRODUCTO
  takeItem(id){
    let filtro = carritoDeCompras.filter(producto => producto.id === id)[0];
    if(carritoDeCompras[carritoDeCompras.findIndex(item => item.id === filtro.id)].quantity == 1){
      this.removeProduct(id);
      this.totalQuantity(); 
      this.buildCart();
    }else{
      carritoDeCompras[carritoDeCompras.findIndex(item => item.id === filtro.id)].quantity--
      this.buildCart();
      this.totalQuantity();
    }
    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
     
  }

  // HTML DEL PRODUCTO
      itemsOnCart(producto){
        return  `
                 <div class="col shop-detail text-center">
                   <img src=${producto.imgPath}>
                </div>
                <div class="col shop-detail mb-4">
                   <p>${producto.name}</p>
                   <p>$${producto.price}</p>
                   <span  style="cursor: pointer;" onclick="remove(${producto.id})" id="remove">Remover</span>
                </div>
                <div class="col shop-detail align-middle">
                   <span style="cursor: pointer;" onclick="add(${producto.id})"><i class="fas fa-chevron-up"></i></span>
                   <p id="productAmount">${this.returnQuantity(producto)}</p>
                   <span style="cursor: pointer;" onclick="less(${producto.id})"><i class="fas fa-chevron-down"></i></span>
                </div>
        `;  
      }

      returnQuantity(producto){
        return producto.quantity;
      }

      // CREA UN HTML POR CADA PRODUCTO AGREGADO
      buildCart(){
        var productosHtml = document.getElementById("productInCart");
        productosHtml.innerHTML = "";
        var html = "";
        carritoDeCompras.forEach((producto) =>{
          html += this.itemsOnCart(producto);
        });
        productosHtml.innerHTML = html;
        
        
      }
    
     // BORRA EL PRODUCTO Y TODOS SUS ITEMS 
     removeProduct(id){
        let filtro = carritoDeCompras.findIndex(producto => producto.id === id);
        carritoDeCompras.splice(filtro, 1);
        this.buildCart();
        this.totalQuantity();
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
      }


    // RENDER FINAL DE LA CANTIDAD DE PRODUCTOS
      addQuantity(){
        var suma = 0;
        if(localStorage.getItem('carritoDeCompras')){
          let elementos = carritoDeCompras
          elementos.forEach((item) => {
            suma += item.quantity
          })
        }else{
          console.log("No se trajeron los productos del LS");
        }
        return suma; 
      }

      totalQuantity(){
        let itemsCounter = document.getElementById("cartCounter");
        itemsCounter.innerHTML = this.addQuantity();
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
      }


     // SUMA DE PRECIOS DE LOS PRODUCTOS 
      suma(){
        var suma = 0;
        if(localStorage.getItem('carritoDeCompras')){
          let elementos = carritoDeCompras
          elementos.forEach((item) => {
            suma += Number(item.price); 
          });
        }else{
          console.log("No se trajeron los productos del LS");
        }
        return suma; 
    
      }

      totalPrice(total){
        var total = document.querySelector("#total");
        total.innerHTML = "";
        var html = `
          <h3 style="margin-top: 40px; font-family: 'Bebas Neue', cursive;">Total: $${this.suma()}</h3>
        `
        total.innerHTML = html;
       
      }


      // OBTENER PRODUCTOS DEL LS
      getProductsFromLS(){
        carritoDeCompras=(localStorage.getItem('carritoDeCompras')) ? JSON.parse(localStorage.getItem('carritoDeCompras')) : [];
      }
      

      
}



