fetch('./template.html')
.then(response=>response.text())
.then(html=>{
    let temp=document.getElementById('temp');
    
    temp.innerHTML=html;
   
});