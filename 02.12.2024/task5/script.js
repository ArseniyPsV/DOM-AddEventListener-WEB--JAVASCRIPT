let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide img');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    const width = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-width * slideIndex}px)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
