
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

items.forEach(item=>{
  
  let container=document.querySelector('.menu-container');
  let newBox=document.createElement('div');
  newBox.innerHTML=`
  
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
  `;
 
 container.appendChild(newBox);
 });

/*
let retrieve=document.querySelector('.filter');
retrieve.addEventListener('click',filterByPrice);

 function filterByPrice(){
let filteredItem=items.filter(item=>item.price>20);
let container=document.querySelector('.menu-container');
 
  

container.innerHTML=
filteredItem.map(item=>
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














let ramen=document.querySelector('.ramen');
ramen.addEventListener('click',filterByCategory);

 function filterByCategory(){
let filteredRamen=items.filter(item=>item.category==="ramen");
let container=document.querySelector('.menu-container');
 
  

container.innerHTML=
filteredRamen.map(item=>
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
 

let confectionary=document.querySelector('.confectionary');
confectionary.addEventListener('click',filterByCategoryconfectionary);

 function filterByCategoryconfectionary(){
let filteredconfectionary=items.filter(item=>item.category==="confectionary");
let container=document.querySelector('.menu-container');
 
  

container.innerHTML=
filteredconfectionary.map(item=>
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
 
let pastry=document.querySelector('.pastry');
pastry.addEventListener('click',filterByCategoryPastry);

 function filterByCategoryPastry(){
let filteredPastry=items.filter(item=>item.category==="pastry");
let container=document.querySelector('.menu-container');
 
  

container.innerHTML=
filteredPastry.map(item=>
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
 

let bakery=document.querySelector('.bakery');
bakery.addEventListener('click',filterByCategoryBakery);

 function filterByCategoryBakery(){
let filteredBakery=items.filter(item=>item.category==="bakery");
let container=document.querySelector('.menu-container');
 
  

container.innerHTML=
filteredBakery.map(item=>
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
 


let sushi=document.querySelector('.sushi');
sushi.addEventListener('click',filterByCategorySushi);

 function filterByCategorySushi(){
let filteredSushi=items.filter(item=>item.category==="sushi");
let container=document.querySelector('.menu-container');
 
  

container.innerHTML=
filteredSushi.map(item=>
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
 




let noodles=document.querySelector('.noodles');
noodles.addEventListener('click',filterByCategoryNoodles);

 function filterByCategoryNoodles(){
let filteredNoodles=items.filter(item=>item.category==="noodles");
let container=document.querySelector('.menu-container');
 
  

container.innerHTML=
filteredNoodles.map(item=>
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
 
let sishKebab=document.querySelector('.sishkebab');
sishKebab.addEventListener('click',filterByCategorySishKebab);

 function filterByCategorySishKebab(){
let filteredSishKebab=items.filter(item=>item.category==="sishkebab");
let container=document.querySelector('.menu-container');
 
  

container.innerHTML=
filteredSishKebab.map(item=>
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
 


let showBtn=document.querySelector('.show');
showBtn.addEventlistener('click', showMenu);

function showMenu(){
  let slicedItems=items.slice('20');

  let container=document.querySelector('.menu-container');

container.innerHTML=
  slicedItems.map(item =>{
  `
  
  <img src=${item.image}>
  
  `}).join('');
}
*/



/*
    let allParas=document.getElementsByTagName('p');
    for(let i=0; i<allParas.length; i++){
    
   
   
    allParas[i].addEventListener('click',filterByCategory);
    
     function filterByCategory(){
    let filteredCategory=items.filter(item=>item.category==='allParas[i]');
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
  */








    document.addEventListener('DOMContentLoaded', () => {
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
         let paras=event.target;
         
         for( paras of allParas){
        
         if(paras===event.target){
          paras.classList.add("para");
        
         }else{
          paras.classList.remove("para");
         }
        }
      
      
        
  
        paras.addEventListener('click',filterByCategory);
       
        function filterByCategory(event){
          paras=event.target;

        let filteredCategory=items.filter(item=>item.category==='paras');
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
      
      
  }
    
    );        

    let basketItems=document.querySelector('.basket-items');
    basketItems.push('images/sushi5.jpg');