import items from "./menu.js";
import { filteredByCategorySushi } from "./sushi.js";
import { filteredByCategoryShishKebab } from "./shishkebab.js";
import { filteredByCategoryBerries } from "./berries.js";
import { filteredByCategoryRamen } from "./ramen.js";
import { filteredByCategoryNoodles } from "./noodles.js";

//want your code to run as soon as the page structure is ready, without waiting for large files (e.g., images) to load.//

document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".main-title");
  const chars = text.textContent.split("");

  text.textContent = ""; // clear it

  chars.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    text.appendChild(span);
  });

  gsap.from(".main-title span", {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 0.6,
  });

  gsap.to(".mylogo", { duration: 1, x: 100, opacity: 1 });
});

document.addEventListener("DOMContentLoaded", () => {
  filteredByCategorySushi();
  displayOrder();
});

document.addEventListener("DOMContentLoaded", () => {
  filteredByCategoryShishKebab();
  displayOrder();
});

document.addEventListener("DOMContentLoaded", () => {
  filteredByCategoryRamen();
  displayOrder();
});

document.addEventListener("DOMContentLoaded", () => {
  filteredByCategoryBerries();
  displayOrder();
});

document.addEventListener("DOMContentLoaded", () => {
  filteredByCategoryNoodles();
  displayOrder();
});

document.addEventListener("DOMContentLoaded", () => {
  displaynewMenu();
  displayOrder();
});

document.addEventListener("DOMContentLoaded", () => {
  displaySpecial();
  displayOrder();
});

document.addEventListener("DOMContentLoaded", () => {
  displaySeller();
  displayOrder();
});

document.addEventListener("DOMContentLoaded", () => {
  displayChefSpecial();
  displayOrder();
});

fetch("./template.html")
  .then((response) => response.text())
  .then((html) => {
    //inside a .then() block, a variable is only usable inside that block.
    let headTemplate = document.getElementById("head-template");

    headTemplate.innerHTML = html;

    const successMessage = document.querySelector(".success-message");
    const orderForm = document.querySelector(".order-form");
    const submitBtn = document.querySelector(".order-btn");
    console.log(submitBtn);
    submitBtn.addEventListener("click", showSuccessMsge);

    let hamburger = document.querySelector(".hamburger");
    let close = document.querySelector(".closer");
    console.log(hamburger);
    hamburger.addEventListener("click", showMobileMenu);
    function showMobileMenu() {
      let mobileMenu = document.querySelector(".mobileMenu");
      mobileMenu.classList.toggle("mobile-box");
      hamburger.style.display = "none";
    }

    close = document.querySelector(".closer");
    close.addEventListener("click", mobileClose);
    function mobileClose(e) {
      let mobileMenu = document.querySelector(".mobileMenu");

      if (e.target === close) {
        mobileMenu.classList.remove("mobile-box");
        hamburger.classList.remove("show-hamburger");
      }
    }

    //event delegation
    document.body.addEventListener("click", closeModal);
    function closeModal(e) {
      const closeIcon = document.querySelector(".closer");

      if (
        e.target.classList.contains("closer") ||
        e.target.classList.contains("modal") ||
        e.target.classList.contains("overlay")
      ) {
        modal.classList.toggle("show-modal");
        overlay.style.visibility = "hidden";
      }
    }

    function showSuccessMsge() {
      if (successMessage && orderForm) {
        orderForm.style.display = "none";
        successMessage.style.display = "block";

        setTimeout(() => {
          successMessage.style.display = "none";
          document.getElementById("next-btn").style.display = "block";
        }, 6000);
      }
    }
  });

let searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", showFood);
console.log(searchButton);

fetch("./footer.html")
  .then((response) => response.text())
  .then((html) => {
    let footer = document.querySelector(".footer");

    footer.innerHTML = html;
  });

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
  
 <a class="btn" data-product-id=${item.id}  data-name=${item.name} 
   data-price=${item.price} data-image=${item.image}>order now   <i class="fa-solid fa-cart-shopping"></i> </a>
  
      </div>
    

  `;
    container.appendChild(newBox);
  });
  displayOrder();
}
displayMenu();

const sortList = document.querySelector(".sort-list");
sortList.addEventListener("click", addText);

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
        (item) => item.category === paras.getAttribute("id")
      );
      let container = document.querySelector(".menu-container");
      container.innerHTML = "";
      console.log(filteredCategory);
      container.innerHTML = filteredCategory
        .map(
          (item) =>
            ` <div class="menu-column">
  
  <div class="image">
  
  <img src="${item.image}" alt="${item.alt}">
  </div>

  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p>${item.description}</p>
  </div>
 <button class="btn" data-product-id=${item.id}  data-name=${item.name} 
   data-price=${item.price} data-image=${item.image}>order now</button>
   </div>
      </div>
          
      `
        )
        .join("");
    }

    if (paras === event.target) {
      paras.classList.add("para");
    } else {
      paras.classList.remove("para");
    }
  }
  displayOrder();
}

// map() method is used to create a new array

//Checks if a specific value exists in an array.

// some Tests if at least one element in the array passes a test function (a callback).

// some Tests if at least one element in the array passes a test function (a callback).

function showFood() {
  let mapItems = items.map((item) => {
    return item.name;
  });

  let searchInput = document.getElementById("search-input");

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
     <div class="menu-column">
  
  <div class="image">
  
  <img src="${item.image}" alt="${item.alt}">
  </div>

  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p>${item.description}</p>
  </div>
 <button  class="btn" data-product-id=${item.id}  data-name=${item.name} 
   data-price=${item.price} data-image=${item.image}>order now</button>
   </div>
     
      </div>
     
     


     `
      )
      .join("");
  }

  displayOrder();
}

function displaynewMenu() {
  let newContainer = document.querySelector(".new-menu-container");
  console.log(newContainer);
  let filteredContainer = items.filter(
    (item) => item.location === "newmenucontainer"
  );
  console.log(filteredContainer);
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
  <a  class="btn" data-product-id=${item.id}  data-name=${item.name} 
   data-price=${item.price} data-image=${item.image}>order now</a>

</div>
`
    )
    .join("");
}

displaynewMenu();
function displaySpecial() {
  let specialMenuContainer = document.querySelector(".special-menu-container");
  let findSpecialMenu = items.filter((item) => item.id === 52);
  console.log(findSpecialMenu);
  specialMenuContainer.innerHTML = findSpecialMenu
    .map(
      (item) =>
        `



  <div class="description-box">
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
  
   <a class="btn" data-product-id="${item.id}"  data-name="${item.name}" 
   data-price="${item.price}" data-image="${item.image}">order now</a>

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

`
    )
    .join("");
}

displaySpecial();

function displaySeller() {
  let sellerMenuContainer = document.querySelector(".seller-menu-container");
  let findSpecialMenu = items.filter((item) => item.id === 53);
  console.log(sellerMenuContainer);
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
    <a class="btn" data-product-id="${item.id}"  data-name="${item.name}" 
   data-price="${item.price}" data-image="${item.image}">order now</a>
   
    </div>
    </div>
</div>
  
</div>

`
    )
    .join("");
}

displaySeller();

function displayChefSpecial() {
  let chefContainer = document.querySelector(".meal-week-container");

  let findChefMenu = items.filter((item) => item.id === 17);
  console.log(findChefMenu);
  chefContainer.innerHTML = findChefMenu
    .map(
      (item) =>
        ` <div class="image">
  <img src="${item.image}" alt="${item.alt}">
<span class="image-info">£${item.price}</span>

</div>


<div class="meal-week-info">
  <div class="meal-week-info-content">
  <h3>What Makes This Week's Meal Special</h3>
  
  
  
  
  
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
<a class="btn" data-product-id="${item.id}"  data-name="${item.name}" 
   data-price="${item.price}" data-image="${item.image}">order now</a>

</div>

</div>

 </div>


`
    )
    .join("");
}

displayChefSpecial();

function displayOrder() {
  let button = document.querySelectorAll(".btn");
  console.log(button);
  button.forEach((btn) => {
    btn.addEventListener("click", show);
    function show(e) {
      const image = e.target.dataset.image;
      const name = e.target.dataset.name;
      const price = e.target.dataset.price;
      console.log(price);

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

/*

function validateForm() {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return false; //  Stop form submission
  }
  return true; //  Allow form to submit
}
validateForm()

function validateForm() {
  const name = document.getElementById("name").value.trim().toLowerCase//trim removes any extra spaces from the beginning and end of a string.
  //toLowercase converts the entire input to lowercase.
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Name check
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  // Email format check
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Optional: phone number check (digits only)
  if (phone !== "" && !/^\d{7,15}$/.test(phone)) {
    alert("Phone number should be 7–15 digits.");
    return false;
  }

  // Message length check
  if (message.length < 10) {
    alert("Please enter a message with at least 10 characters.");
    return false;
  }

  // If all checks pass
  return true;
}


*/

const cards = document.querySelectorAll(".vegan-box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

cards.forEach((card) => {
  card.classList.add("fade-in");
  observer.observe(card);
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    document.body.style.backgroundColor = "pink";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dropToggle = document.querySelector(".dropdown-toggle");
  const dropMenu = document.querySelector(".dropmenu-items");

  dropToggle.addEventListener("click", (e) => {
    e.preventDefault(); // prevent navigation on click
    dropMenu.classList.toggle("show");
  });
});
