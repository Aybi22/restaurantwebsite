import items from './menu.js';
export function filteredByCategoryBerries(){

let filteredBerries=items.filter(item=>item.category==="berries");
console.log(filteredBerries);

let mealContainer=document.querySelector('.meal-container');
console.log(mealContainer);
mealContainer.innerHTML=
filteredBerries.map(item=>
`
   
<div class="menu-column">
 
  <div class="image">
  
  <img src=${item.image}>
  </div>

  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p class="section-text">${item.description}</p>
  
  <div class="header_right">

      <div class="search-section">
        <span class="fas fa-arrow-right  tip"></span>
  <button  class="btn" data-product-id=${item.id}  data-name=${item.name} 
   data-price=${item.price} data-image=${item.image}>order now</button>
   
      </div>
      </div>
      </div>
      </div>
`).join('');
}