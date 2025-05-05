
import items from'./menu.js';





fetch('./temp.html')
.then(response=>response.text())
.then(html=>{
    let temp=document.getElementById('temp');
    
    temp.innerHTML=html;

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
  
   /*   
let btn=document.querySelector('.btn');
btn.addEventListener('click',addToCart);

 function addToCart(){
   let basketItems=document.querySelector('.basket-items');
   items.map(item=>{
   let newDiv=document.createElement('div');
   newDiv.innerHTML=`
  <div class="image">
  <img src=${item.image}>
   </div>`;
   basketItems.appendChild(newDiv);
   
  
   });
  }
addToCart()

   */ 
    
    
    
    
    
    
    
    fetch('./footer.html')
    .then(response=>response.text())
    .then(html=>{
        let footer=document.querySelector('.footer');
        
        footer.innerHTML=html;
    
      });
       
     
   
      
  let menus=[
        {name: "sushi", image: "images/sushi-354628_1920.jpg",price:250},
        {name:"canape",image:"images/canape-2802_1920.jpg",price:243},
        {name:"noodle" , image:"images/noodles-516635_1920.jpg",price:230},
        {name:"berries", image:"images/berries-g2680066e3_1920.jpg",price:123,},
        {name:"waffles",image:"images/waffles-gd7d530cde_1920.jpg",price:213},
       {name:"chocolate",image: "images/chocolate-2764581_1920.jpg",price:67},
      
      
      ]
     
      let savedMenu=localStorage.setItem("name", "waffles");
     console.log(savedMenu);
     let savedMenus=localStorage.setItem("menus", JSON.stringify('name'));
     console.log(savedMenus);
     const storedMenu=JSON.parse(localStorage.getItem('menus'));
     console.log(storedMenu);
     
     
    
function displayMenu(){
items.forEach(item=>{
  
  let container=document.querySelector('.menu-container');
  let newBox=document.createElement('div');
  newBox.classList.add('box');
  newBox.innerHTML=`
  <div class="menu-item">
<div class="menu-column">
  <a href="basket.html?id=${item.id}>
  <div class="image">
  
  <img src=${item.image}>
  </div>
</a>
  <div class="txt_column">

  <div class="txt">
  <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
  <p class="section-text">${item.description}</p>
  
  <div class="header_right">

      <div class="search-section">
        <span class="fas fa-arrow-right  tip"></span>
   <button class="btn">order now</button>
      </div>
      </div>
      </div>
      </div>
</div>
  `;
 
 container.appendChild(newBox);
 });
 

}
displayMenu();




//can't reassign a const

/*
const item = {
  name: "Burger",
  price: 5,
  description: "Tasty!"
};

const updatedItem = {
  ...item,
  price: 10
};

console.log(updatedItem);
// { name: "Burger", price: 10, description: "Tasty!" }
✅ All properties are copied
✅ Only price is updated
✅ The original item stays unchanged

*/
     














const sortList=document.querySelector('.sort-list');
         sortList.addEventListener('click',addText);
         
         function addText(event){
           
           let categoryTitle=document.querySelector('.category-title');
          
         let text= event.target.getAttribute('id');
         if(text){
         categoryTitle.textContent=text;
         categoryTitle.classList.add('category-text');
         }
        
         
         
         let allParas=document.getElementsByTagName('p');
         let filteredCategory;
         let paras=event.target;
         
         
         for( paras of allParas){
         if(paras===event.target){
           filteredCategory=items.filter(item=>item.category===paras.getAttribute('id'));

         
          let container=document.querySelector('.menu-container');
           
            
          
          container.innerHTML=
          filteredCategory.map(item=>
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
             <button class="btn">order now</button>
                </div>
                </div>
                </div>
          </div>
          </div>
           
           `).join('');
      
      
          }
  
        }
          
      
      
        if(paras===event.target){
          paras.classList.add("para");
        
         }else{
          paras.classList.remove("para");
         }
        
       
        
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
     `<div class="image">
  <img src=${item.image}>
  </div>
<div class="txt_column">
       
         <div class="txt">
         <h3>${item.name}<span class="meal-price">£${item.price}</span></h3>
         <p class="section-text">${item.description}</p>
         
         <div class="header_right">
       
             <div class="search-section">
               <span class="fas fa-arrow-right  tip"></span>
          <button class="btn">order now</button>
             </div>
             </div>
             </div>
       </div>


     `).join('');
   
   
   }



}
























/*
function showFood() {
let mapItems = items.map(item => item.name.toLowerCase());
let searchBox = document.getElementById('search');
let input = searchBox.value.trim().toLowerCase();
let container = document.querySelector('.menu-container');

if (mapItems.includes(input)) {
 let filtered = items.filter(item => item.name.toLowerCase() === input);

 let content = `<p>${searchBox.value} is available. You can order!</p>`;
 content += filtered
   .map(item => `<img src="${item.image}" alt="${item.name}" style="width:150px; margin:10px;">`)
   .join('');

 container.innerHTML = content;
} else {
 container.innerHTML = `<p>❌ Enter a valid food name.</p>`;
}
}
*/







 
      
      
      
      
      
      
        
        
         
         
     
      
      
    
    
   
    
    
    
  

   

