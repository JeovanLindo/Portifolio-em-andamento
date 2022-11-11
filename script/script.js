
const $header = document.querySelector('#header-principal')

const $nav = document.querySelector('#nav-principal')

const $idiomas = document.querySelector('#linguas')



const $btnMobile = document.querySelector('#botao-mobile').addEventListener('click', ()=>{

    $header.classList.toggle('open')

    $nav.classList.remove('language')

    $idiomas.classList.remove('language')
    
})


const $arrow = document.querySelector('#botao-idioma').addEventListener('click', ()=>{

    $idiomas.classList.toggle('language')

    $nav.classList.add('language')

})