fetch('./template.html')
.then(response=>response.text())
.then(html=>{
    let temp=document.querySelector('.temp');
    temp.innerHTML=html;
});