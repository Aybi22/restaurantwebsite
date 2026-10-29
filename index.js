import items from "./menu.js";

//want your code to run as soon as the page structure is ready, without waiting for large files (e.g., images) to load.//
let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.addEventListener("DOMContentLoaded", () => {
  let berriesContainer = document.querySelector(".berries-container");

  if (berriesContainer) {
    renderProducts(berriesContainer, allFiltered("berries"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let ramenContainer = document.querySelector(".ramen-container");

  if (ramenContainer) {
    renderProducts(ramenContainer, allFiltered("ramen"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let noodlesContainer = document.querySelector(".noodles-container");

  if (noodlesContainer) {
    renderProducts(noodlesContainer, allFiltered("noodles"));
  }
});
document.addEventListener("DOMContentLoaded", () => {
  let sushiContainer = document.querySelector(".sushi-container");

  if (sushiContainer) {
    renderProducts(sushiContainer, allFiltered("sushi"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let shishContainer = document.querySelector(".shish-container");

  if (shishContainer) {
    renderProducts(shishContainer, allFiltered("shishkebab"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let chefContainer = document.querySelector(".meal-week-container");
  if (chefContainer) {
    displayChefSpecial();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let sellerMenuContainer = document.querySelector(".seller-menu-container");

  if (sellerMenuContainer) {
    displaySeller();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let specialMenuContainer = document.querySelector(".special-menu-container");
  if (specialMenuContainer) {
    displaySpecial();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let newContainer = document.querySelector(".new-menu-container");
  if (newContainer) {
    displayNewMenu();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let veganContainer = document.querySelector(".vegan-container");
  if (veganContainer) {
    renderProducts(veganContainer, allFiltered("vegan"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".menu-container");
  if (container) {
    renderProducts(container, items);
  }
});
/*
document.addEventListener("DOMContentLoaded", () => {
  let newContainer = document.querySelector(".new-menu-container");
  if (newContainer) {
    renderProducts(newContainer, allFiltered("new"));
  }
});
*/

fetch("./template.html")
  .then((response) => response.text())
  .then((html) => {
    //inside a .then() block, a variable is only usable inside that block.
    let headTemplate = document.getElementById("head-template");

    headTemplate.innerHTML = html;

    let hamburger = document.querySelector(".hamburger");
    let close = document.querySelector(".closer");
    hamburger.addEventListener("click", showMobileMenu);
    function showMobileMenu() {
      let mobileMenu = document.querySelector(".mobileMenu");

      mobileMenu.classList.toggle("mobile-box");
      hamburger.style.display = "none";
      close.style.display = "inline-block";
    }

    close.addEventListener("click", mobileClose);

    console.log(close);
    function mobileClose(e) {
      let mobileMenu = document.querySelector(".mobileMenu");

      if (e.target === close) {
        //check if the clicked element or any of its ancestors match .closer
        mobileMenu.classList.remove("mobile-box");
        hamburger.style.display = "inline-block";
        close.style.display = "none";
        mobileMenu.classList.remove("mobile-box");
      }
    }
    /*
    //event delegation
    const nextBtn = document.getElementById("next-btn");
    const successMessage = document.querySelector(".success-message");
    const orderForm = document.querySelector(".order-form");
    const submitBtn = document.querySelector(".order-btn");
    console.log(submitBtn);

    orderForm.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent form from reloading the page

      if (!orderForm.checkValidity()) {
        // checks the HTML5 required fields.
        orderForm.reportValidity(); //shows the browser’s error messages (if invalid)
        return;
      }

      // Show success message
      orderForm.style.display = "none";
      successMessage.style.display = "block";

      setTimeout(() => {
        successMessage.style.display = "none";
        nextBtn.style.display = "block";
      }, 6000);
    });
    */
  });

fetch("./footer.html")
  .then((response) => response.text())
  .then((html) => {
    let footer = document.querySelector(".footer");

    footer.innerHTML = html;
  });

let searchButton = document.getElementById("search-btn");
console.log(searchButton);
if (searchButton) {
  searchButton.addEventListener("click", showFood);
}

function renderProducts(productContainer, items) {
  productContainer.innerHTML = items
    .map((item) => {
      return `
    
    <div class="menu-column" data-product-id="${item.id}">
      <div class="image">
  <img src="${item.image}"alt="${item.alt}" >
</div>
  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p>${item.description}</p>
  </div>
  
  <button class="btn-render"  data-id="${item.id}">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
 </div> 
  
  `;
    })
    .join("");

  let btns = document.querySelectorAll(".btn-render");
  console.log(btns);
  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log(btn);
        let productColumn = e.target.closest(".menu-column");
        if (productColumn) {
          //This finds the closest .product-column containing the element that was clicked.
          let button = productColumn.querySelector(".btn-render");
          if (button) {
            console.log(button);

            const productId = button.dataset.id;
            console.log(productId);
            let product = items.find((item) => item.id == productId);
            console.log(product);

            window.location.href = "basket.html";

            addToCart(productId);

            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
      });
    });
  }
}

/*
function displayMenu() {
  items.forEach((item) => {
    let container = document.querySelector(".menu-container");
    let newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.innerHTML = `
 
<div class="menu-column">

  <div class="image">
  
  <img src="${item.image}"  alt="${item.alt}" >
  </div>

  

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p>${item.description}</p>
  </div>
  
 <a  href="#" class="btn" data-product-id=${item.id}  data-name=${item.name} 
   data-price=${item.price} data-image=${item.image}>order now   <i class="fa-solid fa-cart-shopping"></i> </a>
  
      </div>
    

  `;
    container.appendChild(newBox);
  });
  displayOrder();
}

displayMenu();
*/
/*
function displayOrder() {
  let container = document.querySelector(".menu-container");
  let newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.innerHTML = items
    .map((item) => {
      return `
      <div class="menu-column" data-product-id="${item.id}">
      <div class="image">
  <img src="${item.image}"alt="${item.alt}" >
</div>
  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p>${item.description}</p>
  </div>
  <button class="btn"  data-id="${item.id}">order now</button>
 </div> 
  
  `;
    })
    .join("");
  container.appendChild(newBox);
}
displayOrder();
*/
function addToCart(productId) {
  let product = items.find((item) => item.id == productId);
  let existingItem = cart.find((item) => item.id == productId);
  if (!existingItem) {
    cart.push({ ...product, quantity: 1 });
  }
  if (existingItem) {
    existingItem.quantity += 1;
  }
}

const sortList = document.querySelector(".sort-list");
if (sortList) {
  sortList.addEventListener("click", addText);
}
/*
function addText(event) {
  let categoryTitle = document.querySelector(".category-title");

  let text = event.target.getAttribute("id");
  if (text) {
    categoryTitle.textContent = text;
    categoryTitle.classList.add("category-text");
  }

  let allParas = document.getElementsByTagName("div");
  let paras = event.target;
  for (paras of allParas) {
    if (paras === event.target) {
      let filteredCategory = items.filter(
        (item) => item.category === paras.getAttribute("id"),
      );
      let container = document.querySelector(".menu-container");
      container.innerHTML = "";

      container.innerHTML = filteredCategory
        .map(
          (item) =>
            ` <div class="menu-column"  data-product-id="${item.id}">
  
  <div class="image">
  
  <img src="${item.image}" alt="${item.alt}">
  </div>

  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p>${item.description}</p>
  </div>
 <button   class="btn" data-id="${item.id}">order now   <i class="fa-solid fa-cart-shopping"></i>  </a>
   </div>
      </div>
          
      `,
        )
        .join("");
    }

    if (paras === event.target) {
      paras.classList.add("para");
    } else {
      paras.classList.remove("para");
    }
  }
}
*/
function addText() {
  let categoryTitle = document.querySelector(".category-title");

  let text = event.target.getAttribute("id");
  if (text) {
    categoryTitle.textContent = text;
    categoryTitle.classList.add("category-text");
  }

  let allParas = document.getElementsByTagName("div");
  let paras = event.target;
  for (paras of allParas) {
    if (paras === event.target) {
      let container = document.querySelector(".menu-container");
      container.innerHTML = "";
      renderProducts(container, allFiltered(paras.getAttribute("id")));
    }
  }
}

addText();
function allFiltered(category, location, name, id) {
  let filters;

  if (category) {
    filters = items.filter((item) => item.category == category);
  }

  if (location) {
    filters = items.filter((item) => item.location == location);
  }
  if (name) {
    filters = items.filter((item) => item.name == name);
  }

  if (id) {
    filters = items.filter((item) => item.id == id);
  }

  return filters;
}

/*
function displayVegan() {
  let veganContainer = document.querySelector(".vegan-container");
  let filteredVegan = items.filter((item) => item.category === "vegan");

  let veganBox = document.createElement("div");

  veganContainer.innerHTML = filteredVegan
    .map(
      (item) =>
        ` <div class="menu-column" data-product-id="${item.id}">
  
  <div class="image">
  
  <img src="${item.image}" alt="${item.alt}">
  </div>

  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p>${item.description}</p>
  </div>
 <button class="btn" data-id="${item.id}">order now   <i class="fa-solid fa-cart-shopping"></i> </button>
   </div>
      </div>
          
      
        
  `,
    )
    .join("");
  veganContainer.appendChild(veganBox);

  gsap.from(".veganContainer", {
    scrollTrigger: {
      trigger: ".veganContainer",
      start: "top 90%", // when top of element hits 90% of viewport
      toggleActions: "play none none none", // onEnter only
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
  });
}

displayVegan();


// map() method is used to create a new array

//Checks if a specific value exists in an array.

// some Tests if at least one element in the array passes a test function (a callback).

// some Tests if at least one element in the array passes a test function (a callback).
*/

/*
function showFood() {
  let mapItems = items.map((item) => {
    return item.name;
  });

  let searchInput = document.getElementById("search-input");
  let input = document.getElementById("search-input");
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
  });

  const searchValue = searchInput.value.trim().toLowerCase(); //convert input to lowercase(makes input value case-sensitive).trim removes whitespace

  if (!searchValue) {
    alert("enter food name");
  } else if (mapItems.includes(searchValue)) {
    let container = document.querySelector(".menu-container");

    let filtered = items.filter((item) => item.name === searchValue);
    container.innerHTML = filtered
      .map(
        (item) =>
          `
     <div class="menu-column" data-product-id="${item.id}">
  
  <div class="image">
  
  <img src="${item.image}" alt="${item.alt}">
  </div>

  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p>${item.description}</p>
  </div>
 <button  class="btn" data-id="${item.id}">order now <i class="fa-solid fa-cart-shopping"></i> </button>
   </div>
     
      </div>
     
     


     `,
      )
      .join("");
  }
}
  */

function showFood() {
  let mapItems = items.map((item) => {
    return item.name;
  });

  let searchInput = document.getElementById("search-input");
  let input = document.getElementById("search-input");
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
  });

  const searchValue = searchInput.value.trim().toLowerCase(); //convert input to lowercase(makes input value case-sensitive).trim removes whitespace

  if (!searchValue) {
    alert("enter food name");
  } else if (mapItems.includes(searchValue)) {
    let container = document.querySelector(".menu-container");
    let categoryTitle = document.querySelector(".category-title");
    categoryTitle.innerHTML = searchValue;
    renderProducts(container, allFiltered(searchValue));
  }
}
showFood();

function displayNewMenu() {
  let newContainer = document.querySelector(".new-menu-container");

  let filteredContainer = items.filter((item) => item.location === "new");

  newContainer.innerHTML = filteredContainer
    .map(
      (item) =>
        `<div class="menu-container-info">
<div class="image">
<img src="${item.image}" alt="${item.alt}">
</div>

<div class="menu-container-content">
<h3> ${item.name}<span class="meal-price">£${item.price}</span> </h3>
<div class="stars">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i> 
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  </div>
<p class="menu-text">${item.description}</p>
</div>
  <button class="btn-new" data-id=${item.id} 
>order now    <i class="fa-solid fa-cart-shopping"></i> </button>

</div>
`,
    )
    .join("");

  document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-new")) {
      let productId = e.target.closest(".btn-new").dataset.id;
      addToCart(productId);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.href = "basket.html";
    }
  });
}

function displaySpecial() {
  let specialMenuContainer = document.querySelector(".special-menu-container");
  let findSpecialMenu = items.filter((item) => item.id === 52);

  specialMenuContainer.innerHTML = findSpecialMenu
    .map(
      (item) =>
        `<div class="description-box">
   <div class="special-info">
    <div class="special-info-content">

    <h3>We provide premium-quality noodles</h3>
    <div class="special-words">
  <span><i class="fa-solid fa-check"></i>healthy</span>
  <span><i class="fa-solid fa-check"></i>tasty</span>
  <span><i class="fa-solid fa-check"></i>excellent</span>
    </div>
  
<p>
 Indulge in our handcrafted noodles, made fresh with the finest ingredients. 
Every bowl is a perfect blend of tradition, taste, and texture — a true celebration of flavor..

</p>

  <div class="special-menu-price">
  <span class="special-price">£${item.price}</span>
  </div>
  
   <button  class="btn-special" data-id="${item.id}">order now  <i class="fa-solid fa-cart-shopping"></i></button>

</div>


</div>

</div>

<div class="image">
<img src="${item.image}"   alt="${item.alt}" >
</div>



<div class="special-text">
<div class="slide-container">
<h3>tasty and unique</h3>

  </div>
<p>
 Our noodles are more than just a meal — they’re a culinary experience. 
 Expertly prepared to deliver unbeatable taste, texture, and satisfaction.


Prepared with fresh vegetables, rich spices, and wholesome ingredients, 
our noodles are as nutritious as they are delicious — perfect for health-conscious food lovers. 
</p>

</div>
</div>

</div>

`,
    )
    .join("");

  document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-special")) {
      let productId = e.target.closest(".btn-special").dataset.id;
      addToCart(productId);
      window.location.href = "basket.html";
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
}

function displaySeller() {
  let sellerMenuContainer = document.querySelector(".seller-menu-container");
  let findSpecialMenu = items.filter((item) => item.id === 53);

  sellerMenuContainer.innerHTML = findSpecialMenu
    .map(
      (item) =>
        `

  <div class="special-text">
    <div class="slide-container">
    <h3>tasty and unique</h3>
    </div>
    <p>
      
      Savor the bold, smoky flavor of our handcrafted shish kebabs
       — skewered to perfection and flame-grilled with care. Each skewer is a vibrant mix of tender marinated meat, 
       fresh vegetables, and aromatic spices, creating a mouthwatering harmony of taste and texture.
        Whether you choose lamb, chicken, or a vegetarian blend, 
      our shish kebabs deliver a satisfying bite that’s as hearty as it is unforgettable..
    </p>




  </div>
<div class="image">
  <img src="${item.image}"  alt="${item.alt}" >

</div>
  <div class="description-box">

<div class="special-info">
      <div class="special-info-content">
      <h3>we offer the best sish kebab</h3>
      <div class="special-words">
    <span><i class="fa-solid fa-check"></i>healthy</span>
    <span><i class="fa-solid fa-check"></i>tasty</span>
    <span><i class="fa-solid fa-check"></i>excellent</span>
      </div>
    
    <p>Tender, marinated cubes of meat and colorful vegetables, grilled to smoky perfection 
      and bursting with bold Mediterranean flavors..</p>
   
    <div class="special-menu-price">
    <span class="special-price">£${item.price}</span>
    
    </div>
    <button  class="btn-seller" data-id="${item.id}">order now <i class="fa-solid fa-cart-shopping"></i></button>
   
    </div>
    </div>
</div>
  
</div>

`,
    )
    .join("");
  document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-seller")) {
      let productId = e.target.closest(".btn-seller").dataset.id;
      addToCart(productId);
      window.location.href = "basket.html";
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
}

function displayChefSpecial() {
  let chefContainer = document.querySelector(".meal-week-container");

  let findChefMenu = items.filter((item) => item.id === 17);

  chefContainer.innerHTML = findChefMenu
    .map(
      (item) =>
        ` <div class="image">
  <img src="${item.image}" alt="${item.alt}">
<span class="image-info">£${item.price}</span>

</div>


<div class="meal-week-info">
  <div class="meal-week-info-content">
  
  <h3 class="special-title">What Makes This Week's Meal Special</h3>
  
  
  
  
  
  <p>
    Fresh ramen with grilled shrimp, soft-boiled eggs, and seasonal greens in a rich umami broth
  </p>

    <div class="special-words">
      <span><i class="fa-solid fa-check"></i>healthy</span>
      <span><i class="fa-solid fa-check"></i>delicious</span>
      <span><i class="fa-solid fa-check"></i>unique</span>
        </div>
        
  <h4>Chef’s Special Ramen</h4>      
       <p>A soul-warming bowl crafted with passion and precision. Featuring slow-simmered broth infused with rich umami flavors, 
       tender slices of marinated chashu pork, springy house-made noodles, a soft-boiled soy egg, and a medley of fresh toppings 
       — including scallions, nori, and bamboo shoots.</p>
<button class="btn-chef" data-id="${item.id}"">order now   <i class="fa-solid fa-cart-shopping"></i> </button>

</div>

</div>

 </div>


`,
    )
    .join("");

  document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-chef")) {
      let productId = e.target.closest(".btn-chef").dataset.id;
      addToCart(productId);
      window.location.href = "basket.html";
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
}
if (chefContainer) {
  displayChefSpecial();
}

/*

function displayOrder() {
  let button = document.querySelectorAll(".btn");

  button.forEach((btn) => {
    btn.addEventListener("click", show);
    function show(e) {
      const image = e.target.dataset.image;
      const name = e.target.dataset.name;
      const price = e.target.dataset.price;

      localStorage.setItem("selectedItemImage", image);
      localStorage.setItem("selectedItemName", name);
      localStorage.setItem("selectedItemPrice", price);

      //Use localStorage to persist data between pages.
      // DOM scope is per page, and JavaScript doesn’t remember your selections across pages unless you store them explicitly.
      window.location.href = "basket.html";
    }
  });
}

displayOrder();

*/

document.addEventListener("DOMContentLoaded", () => {
  const dropToggle = document.querySelector(".dropdown-toggle");
  const dropMenu = document.querySelector(".dropmenu-items");

  dropToggle.addEventListener("click", (e) => {
    e.preventDefault(); // prevent navigation on click
    dropMenu.classList.toggle("show");
  });
});

document.querySelectorAll("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%", // when top of section hits 85% of viewport
      toggleActions: "play none none none", // onEnter only
    },
    opacity: 0,
    y: 60,
    scale: 0.95, // Slight zoom-in effect
    duration: 1,
    ease: "power2.out",
  });
});
