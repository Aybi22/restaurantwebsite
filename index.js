
import items from'./menu.js';
import {filteredByCategorySushi} from'./sushi.js';
import {filteredByCategoryShishKebab} from'./shishkebab.js';
import { filteredByCategoryBerries } from'./berries.js';
import { filteredByCategoryRamen } from'./ramen.js';
import { filteredByCategoryNoodles } from'./noodles.js';

//want your code to run as soon as the page structure is ready, without waiting for large files (e.g., images) to load.//











document.addEventListener('DOMContentLoaded',()=>{
filteredByCategorySushi();
displayOrder();

});

document.addEventListener('DOMContentLoaded',()=>{
filteredByCategoryShishKebab();
displayOrder();

});

document.addEventListener('DOMContentLoaded',()=>{
filteredByCategoryRamen();
displayOrder();
});

document.addEventListener('DOMContentLoaded',()=>{
filteredByCategoryBerries();
displayOrder();

});


document.addEventListener('DOMContentLoaded',()=>{
filteredByCategoryNoodles();
displayOrder();

});


document.addEventListener('DOMContentLoaded',()=>{
displaynewMenu();
displayOrder();
});


document.addEventListener('DOMContentLoaded',()=>{
displaySpecial();
displayOrder();
});

document.addEventListener('DOMContentLoaded',()=>{
displaySeller();
displayOrder();
});

document.addEventListener('DOMContentLoaded',()=>{
displayChefSpecial();
displayOrder();
});



fetch('./template.html')
.then(response=>response.text())
.then(html=>{  //inside a .then() block, a variable is only usable inside that block.
    let headTemplate=document.getElementById('head-template');
    
    headTemplate.innerHTML=html;
const modal=document.querySelector('.modal');
    const hamburger=document.querySelector('.fa-bars');
    let overlay=document.querySelector('.overlay');
    hamburger.addEventListener('click',displayModal);
    function displayModal(){
    modal.classList.toggle('show-modal');
    overlay.style.visibility="visible";
   
    }

    //event delegation
 document.body.addEventListener('click',closeModal);
function closeModal(e){
  const closeIcon=document.querySelector('.closer');

  if(e.target.classList.contains('closer')|| e.target.classList.contains('modal')|| e.target.classList.contains('overlay')){
    modal.classList.toggle('show-modal');
    overlay.style.visibility="hidden";
   
  }
}

});
fetch('./footer.html')
    .then(response=>response.text())
    .then(html=>{
        let footer=document.querySelector('.footer');
        
        footer.innerHTML=html;
    
      });
       

function displayMenu(){
items.forEach(item=>{
  
  let container=document.querySelector('.menu-container');
  let newBox=document.createElement('div');
  newBox.classList.add('box');
  newBox.innerHTML=`
 
<div class="menu-column">
  <a href="basket.html?id=${item.id}>
  <div class="image">
  
  <img src=${item.image}>
  </div>
</a>
  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p>${item.description}</p>
 <button class="btn" data-product-id=${item.id}  data-name=${item.name} 
   data-price=${item.price} data-image=${item.image}>order now</button>
   </div>
      </div>
    

  `;
 container.appendChild(newBox);
 });
 displayOrder();

}
displayMenu();



const sortList=document.querySelector('.sort-list');
         sortList.addEventListener('click',addText);
         
         function addText(event){
          
           let categoryTitle=document.querySelector('.category-title');
          
         let text= event.target.getAttribute('id');
         if(text){
         categoryTitle.textContent=text;
         categoryTitle.classList.add('category-text');
         }
        
        let allParas=document.getElementsByTagName('div');
        let paras=event.target;
        for( paras of allParas){
         if(paras===event.target){
         let filteredCategory=items.filter(item=>item.category===paras.getAttribute('id'));
 let container=document.querySelector('.menu-container');
container.innerHTML="";
           console.log(filteredCategory);
container.innerHTML=
filteredCategory.map(item=>
        
  ` <div class="menu-column">
  
  <div class="image">
  
  <img src=${item.image}>
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
          
      `).join('');
          
  
        }
          
      if(paras===event.target){
          paras.classList.add("para");
        
         }else{
          paras.classList.remove("para");
         }
        
        }
        displayOrder();
        }
    
// map() method is used to create a new array 

    
    //Checks if a specific value exists in an array.

  // some Tests if at least one element in the array passes a test function (a callback).

   
      
 // some Tests if at least one element in the array passes a test function (a callback).
 let searchBox=document.getElementById('search');
 let searchButton=document.getElementById('gsearch');
 console.log(searchButton);
searchButton.addEventListener('click',showFood);
 


 function showFood(){
   
 let mapItems=items.map(item=>{
   return item.name;
 })

 let searchBox=document.getElementById('search');

 const searchValue=searchBox.value.trim().toLowerCase();//convert input to lowercase(makes input value case-sensitive).trim removes whitespace
 
 if(!searchValue){
   alert('enter food name');
 }else if(mapItems.includes(searchValue)){
 
   let container=document.querySelector('.menu-container');

 let filtered=items.filter(item=>item.name===searchValue); 
container.innerHTML=
filtered.map(item=>
   
     `
     <div class="menu-column">
  
  <div class="image">
  
  <img src=${item.image}>
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
     
     


     `).join('');
   
   
   }

displayOrder();

}




function displaynewMenu(){
let newContainer=document.querySelector('.new-menu-container');
console.log(newContainer);
let filteredContainer=items.filter(item=>item.location==="newmenucontainer");
console.log(filteredContainer);
newContainer.innerHTML=
filteredContainer.map(item=>
`<div class="menu-container-info">
<div class="image">
<img src="${item.image}">
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
`).join('');
}

displaynewMenu();
function displaySpecial(){
let specialMenuContainer=document.querySelector('.special-menu-container');
let findSpecialMenu=items.filter(item=>item.id===4);
console.log(findSpecialMenu);
specialMenuContainer.innerHTML=
findSpecialMenu.map(item=>

`



  <div class="description-box">
   <div class="special-info">
    <div class="special-info-content">

    <h3>we offer the best hors d'oeuvre</h3>
    <div class="special-words">
  <span><i class="fa-solid fa-check"></i>healthy</span>
  <span><i class="fa-solid fa-check"></i>tasty</span>
  <span><i class="fa-solid fa-check"></i>excellent</span>
    </div>
  
<p>Our hors d'oeuvre selection brings you delicious little bites made to share and enjoy, 
    with a perfect balance of taste and tradition.</p>

  <div class="special-menu-price">
  <span class="special-price">£${item.price}</span>
  </div>
  
   <button class="btn" data-product-id="${item.id}"  data-name="${item.name}" 
   data-price="${item.price}" data-image="${item.image}">order now</button>

</div>



</div>

</div>

<div class="image">
<img src="${item.image}">
</div>



<div class="special-text">
<div class="slide-container">
<h3>tasty and unique</h3>

  </div>
<p>
  Delicately crafted to please both the eye and palate, our hors d’oeuvres are a fusion of creativity and flavor. 
  Each bite-sized masterpiece offers a unique blend of textures and ingredients — from crisp canapés to savory 
  tartlets — making them the perfect start to an unforgettable dining experience. 
  Whether served as a welcome tease or a stylish party feature, 
  our hors d’oeuvres promise taste that lingers and presentation that impresses..
</p>

</div>
</div>

</div>

`).join('');

}

displaySpecial();

function displaySeller(){
let sellerMenuContainer=document.querySelector('.seller-menu-container');
let findSpecialMenu=items.filter(item=>item.id===1);
console.log(sellerMenuContainer);
sellerMenuContainer.innerHTML=
findSpecialMenu.map(item=>
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
  <img src="${item.image}">

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

`).join('');
}

displaySeller();


function displayChefSpecial(){

let chefContainer=document.querySelector('.meal-week-container');

let findChefMenu=items.filter(item=>item.id===17);
console.log(findChefMenu);
chefContainer.innerHTML=
findChefMenu.map(item=>
` <div class="image">
  <img src="${item.image}">
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
        
        
       
<a class="btn" data-product-id="${item.id}"  data-name="${item.name}" 
   data-price="${item.price}" data-image="${item.image}">order now</a>

</div>

</div>

 </div>


`).join('');
}

displayChefSpecial();

function displayOrder(){

let button=document.querySelectorAll('.btn');
console.log(button);
button.forEach((btn) =>{
 
btn.addEventListener('click',show);
function show(e){
const image=e.target.dataset.image;
const name=e.target.dataset.name;
const price=e.target.dataset.price;
console.log(price);

localStorage.setItem('selectedItemImage',image);
localStorage.setItem('selectedItemName',name);
localStorage.setItem('selectedItemPrice',price);


//Use localStorage to persist data between pages.
// DOM scope is per page, and JavaScript doesn’t remember your selections across pages unless you store them explicitly.
window.location.href='basket.html';
}

});

}

displayOrder();



















 
      
      
      
      
      
      
        
        
         
         
     
      

  
      
    
    
   
    
    
    
  

   

