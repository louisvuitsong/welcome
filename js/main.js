let menuBtn = document.querySelector('.menu_trigger');
let menuNav = document.querySelector('.menu_nav');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
});


let portfolioSlide = document.querySelector('.porfolio_slide');
let portfolioCard  = document.querySelector('.portfolio_card');

let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      "@0.75": {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      "@1.00": {
        slidesPerView: "auto",
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: "auto",
        spaceBetween: 50,
      },
    },
});