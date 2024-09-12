let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");

let currentSlide = 0;
let activeCarouselImg = document.getElementById("active-carousel-img");

const slideImgSrc = [
    "assets/love_cat.webp",
    "assets/love_movies.webp",
    "assets/love_read.webp"
]

leftArrow.addEventListener("click", function() {
    console.log('Flecha izquierda pulsada');
    currentSlide -= 1;
    carousel();
});

rightArrow.addEventListener("click", function() {
    console.log('Flecha derecha pulsada');
    currentSlide += 1;
    carousel();
});

function carousel() {
    console.log('Función carrusel activada');
    console.log(currentSlide)


    if (currentSlide < 0) {
        currentSlide = slideImgSrc.length - 1;
    } else if (currentSlide > slideImgSrc.length - 1) {
        currentSlide = 0;
    }

    activeCarouselImg.src = slideImgSrc[currentSlide];
}