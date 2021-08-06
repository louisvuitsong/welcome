//배너 > 웰컴킷 구성하기
const configTitle  = document.querySelectorAll('.config .config_list > h4');
const configList = document.querySelectorAll('.config_nav');

configTitle.forEach(function(e, key){
    e.addEventListener('click', function(){
        console.log('click');
        configList[key].classList.toggle('active');
    });
});


//아이템 디테일 박스
let itemDetail = document.querySelectorAll('.item_more_btn');
const lightBox = document.querySelector('.detail_lightbox');

function moreBtnClick() {
    console.log(this);

    itemDetail.forEach(function(e){
        e.addEventListener('click', function(){
            lightBox.classList.toggle('active');
        });
    })
    // itemDetail.addEventListener('click', function(){
    //     lightBox.classList.toggle('active');
    // });
}
lightBox.addEventListener('click',function(){
    this.classList.remove('active');
});


// 아이템 선택
let itemCard = document.querySelectorAll('.item_card');
itemCard.forEach(function(e){
    e.addEventListener('click', function(e){

        if(e.target.parentNode.classList.contains('item_more_btn')) {
            moreBtnClick();
        } else {
            this.classList.toggle('active');
        }
    })
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

//모바일 메뉴버튼
let menuBtn = document.querySelector('.menu_trigger');
let menuNav = document.querySelector('.menu_nav');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
});


const cart = document.querySelector('.cart');

cart.addEventListener('click', function(){
    this.classList.toggle('active');
});


const swiper = new Swiper('.swiper-container', {
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
        slidesPerView: 1.2,
        spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
        slidesPerView: 3.3,
        spaceBetween: 40
        }
    },

  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});