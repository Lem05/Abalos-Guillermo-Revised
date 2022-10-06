const productEl = document.querySelector(".shop-container");
const cartItemsEl = document.querySelector(".cart-items");

//function insert products
function renderProducts() {
    products.forEach( (products) => {
        productEl.innerHTML += `
        <div class="shop-container">
            <div class="card" style="width: 18rem;">
                <img src="${products.imgSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${products.name}</h5>
                <p class="card-text-price"><strike>₱2000</strike>  ₱${products.price}</p>
                <box-icon id="add-to-cart" onclick="addToCart(${products.id})"  name='cart-alt'></box-icon>
            </div>
        </div>
        `;
    });
}
renderProducts();

//cart arrray
const cartItems = JSON.parse(localStorage.getItem(cartItems)) || [];

//Add to Cart
function addToCart(id) {
    //check if products already exist in cart
    //localStorage.setItem("productEl", JSON.stringify(cart));
    if(cart.some((item) => item.id === id)){
        alert("Product Already in Cart!");
    } else{
        const item = products.find((products) => products.id === id);

   cart.push({
        ...item,
        numberOfUnits: 1,
   });
 }
 
}
