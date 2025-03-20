/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel img");
    let index = 0;
    document.querySelector(".next").addEventListener("click", () => {
        index = (index + 1) % images.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });
    document.querySelector(".prev").addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });
});