const slides = document.querySelectorAll('.slideContent img');
let currentSlide = 0;

function nextSlide () {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);