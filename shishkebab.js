import items from './menu.js';
export function filteredByCategoryShishKebab(){

let filteredShishKebab=items.filter(item=>item.category==="shishkebab");


let shishContainer=document.querySelector('.shish-container');

shishContainer.innerHTML=
filteredShishKebab.map(item=>
`
   
<div class="menu-column">
 
  <div class="image">
  
  <img src=${item.image}>
  </div>

  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p class="section-text">${item.description}</p>
  </div>
 
  <button  class="btn" data-product-id=${item.id}  data-name=${item.name} 
   data-price=${item.price} data-image=${item.image}>order now</button>
   
      </div>
       </div>
      
`).join('');
}