

let cart = new Cart()
var carritoDeCompras = []; 

console.log(cart);

function addToCart(id){ 
    let counter = document.getElementById("cartCounter");
    //let currentValue = counter.innerHTML;
    //counter.innerHTML = parseInt(currentValue) + 1;  
    counter.innerHTML = carritoDeCompras.length + 1;
    cart.addProduct(id);
    cart.totalAmount(total);
}

function removeItem(id){
    let counter = document.getElementById("cartCounter");
    let currentValue = counter.innerHTML;
    counter.innerHTML = parseInt(currentValue) - 1;
    cart.removeProduct(id);
}

$("#cleanCart").click(function(){
    $("#productInCart").slideUp();
    $("#cartCounter").html(0);
    carritoDeCompras = [];
    $("#productInCart").slideDown();
    cart.buildCart();
    cart.totalAmount(total);
    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
  })

  