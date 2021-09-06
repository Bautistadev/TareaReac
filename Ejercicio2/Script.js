const Caja=document.querySelector('#Caja');

Caja.addEventListener('keyup',function(e){
    document.querySelector('#Contador').innerText=this.value.length
} )