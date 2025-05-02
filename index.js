const texts = document.querySelectorAll('.birthday-text');
let current = 0;

setInterval(() => {
    texts[current].classList.remove('visible');
    current = (current + 1) % texts.length;
    texts[current].classList.add('visible');
}, 5000);


const swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 30,
    loop: true,
    speed: 2000,
autoplay: {
    delay: 3500,
    disableOnInteraction: false,
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
});
