const logoMenu = document.getElementById('logoMenu-img')
const menuBurguer = document.getElementById('menuBurguer')
const body = document.querySelector('body')
const trilho = document.getElementById('trilho')
trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('move')
    body.classList.toggle('move')
})

menuBurguer.addEventListener('click', ()=>{
    menuBurguer.classList.toggle('aberto')         
})


