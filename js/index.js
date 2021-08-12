//배너 > 웰컴킷 구성하기
const configTitle  = document.querySelectorAll('.config .config_list > h4');
const configList = document.querySelectorAll('.config_nav');

configTitle.forEach(function(e, key){
    e.addEventListener('click', function(){
        console.log('click');
        configList[key].classList.toggle('active');
    });
});


//모바일 메뉴버튼
let menuBtn = document.querySelector('.menu_trigger');
let menuNav = document.querySelector('.menu_nav_back');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
});


//포트폴리오슬라이드
const swiperPortfolio = new Swiper('.welcome_portfolio', {
    // Optional parameters
    spaceBetween: 50,
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
     // Responsive breakpoints
    breakpoints: {
       
        // when window width is >= 480px
        320: {
        slidesPerView: 1.1,
        spaceBetween: 10
        },
        // when window width is >= 640px
        768: {
        slidesPerView: 4.2,
        spaceBetween: 80
        }
    },

  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});





//배너
// const categoryBanner = document.querySelector('.category');
// const config = document.querySelector('.welcome_product');

// window.addEventListener('scroll', function(){
//     let configLocate = (config.offsetTop - 500);

//     if(this.scrollY >= configLocate){
//         categoryBanner.classList.add('active');
//     } else {
//         categoryBanner.classList.remove('active');
//     }
// });
