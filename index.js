
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
  <div class="menu_image">
  
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

  `;
 
 container.appendChild(newBox);
 });



 
    
  
    
   

let menuLists=[
  {name: "sushi", image: "images/sushi-354628_1920.jpg"},
  {name:"canape",image:"images/canape-2802_1920.jpg"},
  {name:"noodle" , image:"images/noodles-516635_1920.jpg"},
  {name:"berries", image:"images/berries-g2680066e3_1920.jpg"},
  {name:"waffles",image:"images/waffles-gd7d530cde_1920.jpg"},
 {name:"chocolate",image: "images/chocolate-2764581_1920.jpg"},


]
















