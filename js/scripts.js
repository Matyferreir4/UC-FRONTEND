/* DOM */
/* Navegar no documento HTML */

/* Seleciona os slides */
const slides = document.querySelectorAll(".banner");

/* Seleciona os dots */

const dots = document.querySelectorAll(".dot");


/* Variavel dos menus */

const menuBTN = document.querySelector("#menu")
const closeMENU = document.querySelector("#close-menu")
const menu = document.querySelector("#mobile-navbar")
const about = document.querySelector("#mobile-navbar #sobre")
const time = document.querySelector("#mobile-navbar #time")
const contato = document.querySelector("#mobile-navbar #contato")
const servicos = document.querySelector("#mobile-navbar #servicos")
const inicio = document.querySelector("#mobile-navbar #inicio")

/* Inicio */
let slideindex = 0; 


function showSlide() {
    for (let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    };

    slideindex++; /* Avança a variavel */

    if (slideindex > slides.length){
        slideindex = 1;
    }

    slides[slideindex -1].classList.add("active")
    dots[slideindex -1].classList.add("active")

    setTimeout(showSlide, 2000)
}

/* Abre o menu */

menuBTN.addEventListener("click", (e)=> {
    menu.classList.add("menu-active")
})

/* Fecha o menu */

closeMENU.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

/* Fecha o menu quando clicado no link */

about.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

time.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

contato.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

servicos.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

inicio.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})

/* Outra forma de abrir e fechar o menu */

/* [menuBTN, closeMENU].forEach((btn) => {
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active")
    })
}); */

/* Roda o loop de textos */

showSlide()

/* Status do loop */

console.log(slides)
console.log(dots)







