let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayItemsInCart() {
  let cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = "";

  cartItems.innerHTML = cart
    .map((item) => {
      return `
      <div class="menu-column cart" data-product-id="${item.id}">
     <div class="cart-box">
      <div class="image">
  <img src="${item.image}">
  </div>
  <div class="product-info">
  <p class="product-name">${item.name}</p>
   <p class="product-price">£${item.price}</p>
    <div class="quantity-section">
    <div class="counter">
    <p class="decrease">-</p>
  <p class="quantity-box">${item.quantity}</p>
    <p class="increase">+</p>
    
</div>
    </div>
    </div>
    <button class="remove-btn">remove</div>
   
 </div> 

  
  `;
    })
    .join("");
}

displayItemsInCart();
function attachDeleteEvent() {
  let removeBtns = document.querySelectorAll(".remove-btn");
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", (e) => {
      const itemId = e.target.closest(".menu-column").dataset.productId;
      console.log(itemId);

      removeItem(itemId);
    });
  });
}
attachDeleteEvent();
function removeItem(itemId) {
  const id = Number(itemId);
  let product = cart.find((item) => item.id == id);
  console.log(product);
  let productPosition = cart.findIndex((item) => item.id == id);
  console.log(productPosition);
  if (productPosition !== -1) {
    cart.splice(productPosition, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayItemsInCart();
    attachDeleteEvent();
    calculateSubTotal();
    cartMessage();
    cartLength();
  }
}

function calculateSubTotal() {
  let prices = cart.map((item) => item.price * item.quantity);
  console.log(prices);

  let reducedTotal = prices.reduce(
    (currentTotal, amount) => currentTotal + amount,
    0,
  );
  let totalAmount = reducedTotal.toFixed(2);
  let totalDisplay = document.querySelector(".total-display");
  totalDisplay.innerHTML = `<span class="subtotal">Subtotal: £${totalAmount}</span`;
  console.log(reducedTotal);
}

calculateSubTotal();

function cartMessage() {
  let placeOrderBtn = document.querySelector(".place-order-btn");
  let cartItems = document.querySelector(".cart-items");
  let cartHeader = document.querySelector(".cart-header");
  if (cartItems.children.length == 0) {
    cartHeader.innerHTML = `<p class="cart-text"> Your cart is empty <span class="cart-num"></span></p> `;

    placeOrderBtn.disabled = true;
  } else if (cartItems.children.length >= 1) {
    cartHeader.innerHTML = `<p class="cart-text"> Your order <span class="cart-num"></span></p> `;
    placeOrderBtn.disabled = false;
  }
}

cartMessage();

document.addEventListener("click", (e) => {
  if (e.target.closest(".place-order-btn.shop")) {
    window.location.href = "menu.html";
  }
});

function cartLength() {
  let allCartItems = cart.length;
  let cartNum = document.querySelector(".cart-num");
  cartNum.innerHTML = `(${allCartItems})`;
  console.log(allCartItems);
}
cartLength();

document.addEventListener("click", (e) => {
  if (e.target.closest(".increase") || e.target.closest(".decrease")) {
    let productId = e.target.closest(".menu-column").dataset.productId;

    let product = cart.find((item) => item.id == productId);
    console.log(product);

    let menuColumn = e.target.closest(".menu-column");
    let quantityBox = menuColumn.querySelector(".quantity-box");
    console.log(quantityBox);
    if (e.target.closest(".increase")) {
      let increaseQuantity = ++product.quantity;
      quantityBox.textContent = increaseQuantity;
      let productTotal = product.price * increaseQuantity;
      console.log(productTotal);
      let productPrice = menuColumn.querySelector(".product-price");
      productPrice.innerHTML = `£${productTotal}`;
    }
    if (e.target.closest(".decrease")) {
      if (product.quantity > 1) {
        let decreaseQuantity = --product.quantity;

        quantityBox.textContent = decreaseQuantity;

        let productTotal = product.price * decreaseQuantity;
        console.log(productTotal);

        let productPrice = menuColumn.querySelector(".product-price");
        productPrice.innerHTML = `£${productTotal}`;
      }
    }
    calculateSubTotal();
  }
});
