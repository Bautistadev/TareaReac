
function Cambio(Color){
    document.body.style.backgroundColor=Color
}


caja=document.getElementsByClassName('Caja');

caja[0].addEventListener('click',e=>{Cambio('red')},false)
caja[1].addEventListener('click',e=>{Cambio('blue')},false)
caja[2].addEventListener('click',e=>{Cambio('green')},false)

