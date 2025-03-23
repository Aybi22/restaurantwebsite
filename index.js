fetch('./temp.html')
.then(response=>response.text())
.then(html=>{
    let temp=document.getElementById('temp');
    
    temp.innerHTML=html;

    const modal=document.querySelector('.modal');
    const hamburger=document.querySelector('.fa-bars');
    const closer=document.querySelector('.close-modal');
    
    hamburger.addEventListener('click',displayModal);
    function displayModal(){
    modal.classList.toggle('show-modal');
   hamburger.classList.add('red');
    }


closer.addEventListener('click',closeModal);
 function closeModal(e){
let x=e.target.parentNode;



 
  x.classList.toggle('show-modal');
  


}


});
    
 
fetch('./footer.html')
.then(response=>response.text())
.then(html=>{
    let footer=document.querySelector('.footer');
    
    footer.innerHTML=html;




  });










fetch('./footer.html')
.then(response=>response.text())
.then(html=>{
    let footer=document.document.querySelector('.footer');
    
    footer.innerHTML=html;

});
