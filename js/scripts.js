/* DOM */
/* Navegar no documento HTML */

/* Seleciona os slides */
const slides = document.querySelectorAll(".banner");

/* Seleciona os dots */

const dots = document.querySelectorAll(".dot");

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

showSlide()


console.log(slides)
console.log(dots)