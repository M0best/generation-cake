
let svg2 = document.querySelector('.svg2')
let svg3 = document.querySelector('.svg3')
let menu1 = document.querySelector('.yarusi') 
console.log(menu1 )
svg2.style.display='none';
svg3.style.display='none';
menu1.addEventListener("click", ()=>{ 
       if(+menu1.value==1 ){
           document.querySelector('svg').style.display = "block";
           document.querySelector('.svg3').style.display = "none";
           document.querySelector('.svg2').style.display = "none";
           //console.log(document.querySelector('.svg2'))
       }
    if(+menu1.value==2 ){
        document.querySelector('svg').style.display = "block";
        document.querySelector('.svg3').style.display = "none";
        document.querySelector('.svg2').style.display = "block";
       }
       if(+menu1.value==3 ){
        document.querySelector('svg').style.display = "block";
        document.querySelector('.svg3').style.display = "block";
        document.querySelector('.svg2').style.display = "block";
       }
})  

var modal = document.getElementById("myModal");
var btn = document.getElementById("sing-up");
var span = document.getElementsByClassName("close")[0];

// Открытие модального окна
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрытие модального окна
span.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике за пределами окна
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let colorCH = document.querySelector('input[type="color"]')
colorCH.addEventListener('change', ()=>{
    let yarusi = document.querySelectorAll('svg')
    yarusi.forEach((elem)=>{elem.style.fill = colorCH.value;
    let br = document.querySelector('.br')
    br.style.border = "1px solid " + colorCH.value;})
})

let nachinka = document.querySelector('.nachinka')
nachinka.addEventListener('click', ()=>{
    if (+nachinka.value==1){
        let d = document.querySelectorAll('.line-nachinka1')
        d[0].setAttribute("stroke", "rgb(121, 6, 6)")
        d[1].setAttribute("stroke", "rgb(121, 6, 6)")
    }
    if (+nachinka.value==2){
        let d = document.querySelectorAll('.line-nachinka1')
        d[0].setAttribute("stroke", "orange")
        d[1].setAttribute("stroke", "orange")
    }
    if (+nachinka.value==3){
        let d = document.querySelectorAll('.line-nachinka1')
        d[0].setAttribute("stroke", "rgb(121, 6, 92)")
        d[1].setAttribute("stroke", "rgb(121, 6, 92)")
    }
    if (+nachinka.value==4){
        let d = document.querySelectorAll('.line-nachinka1')
        d[0].setAttribute("stroke", "rgb(121, 52, 6)")
        d[1].setAttribute("stroke", "rgb(121, 52, 6)")
    }
    if (+nachinka.value==5){
        let d = document.querySelectorAll('.line-nachinka1')
        d[0].setAttribute("stroke", "rgb(66, 6, 121)")
        d[1].setAttribute("stroke", "rgb(66, 6, 121)")
    }
})

let crem = document.querySelector('.crem')
crem.addEventListener('click', ()=>{
    if (+crem.value==1){
        let p = document.querySelectorAll('.line-crem1')
        p[0].setAttribute("stroke", "white")
        p[1].setAttribute("stroke", "white")
    }
    if (+crem.value==2){
        let p = document.querySelectorAll('.line-crem1')
        p[0].setAttribute("stroke", "rgb(121, 52, 6)")
        p[1].setAttribute("stroke", "rgb(121, 52, 6)")
    }
    if (+crem.value==3){
        let p = document.querySelectorAll('.line-crem1')
        p[0].setAttribute("stroke", "rgb(250,231,181)")
        p[1].setAttribute("stroke", "rgb(250,231,181)")
    }
    if (+crem.value==4){
        let p = document.querySelectorAll('.line-crem1')
        p[0].setAttribute("stroke", "orange")
        p[1].setAttribute("stroke", "orange")
    }
    if (+crem.value==5){
        let p = document.querySelectorAll('.line-crem1')
        p[0].setAttribute("stroke", "white")
        p[1].setAttribute("stroke", "white")
    }
})

let biscuits = document.querySelector('.biscuits')
biscuits.addEventListener('click', ()=>{
    if (+biscuits.value==1){
        let l = document.querySelectorAll('.line-biscuits1')
        l[0].setAttribute("stroke", "rgb(121, 52, 6)")
        l[1].setAttribute("stroke", "rgb(121, 52, 6)")
    }
    if (+biscuits.value==2){
        let l = document.querySelectorAll('.line-biscuits1')
        l[0].setAttribute("stroke", "rgb(250,231,181)")
        l[1].setAttribute("stroke", "rgb(250,231,181)")
    }
    if (+biscuits.value==3){
        let l = document.querySelectorAll('.line-biscuits1')
        l[0].setAttribute("stroke", "orange")
        l[1].setAttribute("stroke", "orange")
    }
    if (+biscuits.value==4){
        let l = document.querySelectorAll('.line-biscuits1')
        l[0].setAttribute("stroke", "rgb(121, 14, 6)")
        l[1].setAttribute("stroke", "rgb(121, 14, 6)")
    }
    if (+biscuits.value==5){
        let l = document.querySelectorAll('.line-biscuits1')
        l[0].setAttribute("stroke", "rgb(250,231,181)")
        l[1].setAttribute("stroke", "rgb(250,231,181)")
    }
})