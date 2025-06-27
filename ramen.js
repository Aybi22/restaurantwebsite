import items from "./menu.js";
export function filteredByCategoryRamen() {
  let filteredRamen = items.filter((item) => item.category === "ramen");
  console.log(filteredRamen);

  let ramenContainer = document.querySelector(".ramen-container");

  ramenContainer.innerHTML = filteredRamen
    .map(
      (item) =>
        `
   
<div class="menu-column">
 
  <div class="image">
  
  <img src=${item.image}  alt=${item.alt}>
  </div>

  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p class="section-text">${item.description}</p>
  </div>
  
 
  <a href="#" class="btn" data-product-id=${item.id}  data-name=${item.name} 
   data-price=${item.price} data-image=${item.image}>order now <i class="fa-solid fa-cart-shopping"></i> </a>
   
    </div>
     </div>
      
     
      
      
     
`
    )
    .join("");
}
