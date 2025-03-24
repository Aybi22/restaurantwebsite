fetch('./temp.html')
.then(response=>response.text())
.then(html=>{
    let temp=document.getElementById('temp');
    
    temp.innerHTML=html;

    const modal=document.querySelector('.modal');
    const hamburger=document.querySelector('.fa-bars');
    const closer=document.querySelector('.close-modal');
    let overlay=document.querySelector('.overlay');
    
    hamburger.addEventListener('click',displayModal);
    function displayModal(){
    modal.classList.toggle('show-modal');
   hamburger.classList.add('red');
   overlay.style.visibility="visible";
   
    }

overlay.addEventListener('click',closeModal);
closer.addEventListener('click',closeModal);
 function closeModal(e){
let x=e.target.parentNode;
if(x===e.target.parentNode || e.target===overlay){


 
  x.classList.toggle('show-modal');
  overlay.style.visibility="hidden";
  
}

}
});



let menuLists=[
  {name: "sushi", image: "images/sushi-354628_1920.jpg"},
  {name:"canape",image:"images/canape-2802_1920.jpg"},
  {name:"noodle" , image:"images/noodles-516635_1920.jpg"},
  {name:"berries", image:"images/berries-g2680066e3_1920.jpg"},
  {name:"waffles",image:"images/waffles-gd7d530cde_1920.jpg"},
 {name:"chocolate",image: "images/chocolate-2764581_1920.jpg"},


]

function showImg(){
for(let menuList of menuLists){
  let roundImage=document.querySelector('.round-image');
 roundImage.src=`${menuList.image}`;
}
}
setInterval(showImg,1000);

    
 




fetch('./footer.html')
.then(response=>response.text())
.then(html=>{
    let footer=document.document.querySelector('.footer');
    
    footer.innerHTML=html;

  });



