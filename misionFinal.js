const modal=document.querySelector('.modal')
const unete=document.querySelector('#unete')
const cancelar=document.querySelector('.cancel')
const aceptar=document.querySelector('.aceptar')

cancelar.addEventListener('click', ()=>{
    modal.style.top='-3880px'
    telefono=prompt("digite por favor su numero de telefono y comunicarnos e indicarle su membresia")
    selection.selectedIndex=0
})

aceptar.addEventListener('click', ()=>{
    modal.style.top='-3880px'
    telefono=prompt("digite por favor su numero de telefono y comunicarnos e indicarle su membresia")
    selection.selectedIndex>0
    setTimeout(()=>{
        location="./page2.html"
    },1000)
})
