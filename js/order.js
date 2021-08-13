
//카테고리 제목
const title = ["사무용품", "테크용품", "생활용품", "패션용품" ];

//제품별 구성하기 슬라이드
function slideReload() {
    const swiperProduct = new Swiper('.welcome_product', {
        // Optional parameters
        spaceBetween: 50,
        // loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        
         // Responsive breakpoints
        breakpoints: {
           
            // when window 'width is >= 480px
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            // when window width is >= 640px
            768: {
            slidesPerView: 1,
            spaceBetween: 500
            }
        },
    
        pagination: {
            el: ".swiper_title",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + title[index] + "</span>";
            },
          },
    });
}


//예산별 구성하기 슬라이드
function slideReload2() {
    const swiperAddItem = new Swiper('.item_box', {
        // Optional parameters
        spaceBetween: 50,
        // loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        
         // Responsive breakpoints
        breakpoints: {
           
            // when window 'width is >= 480px
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            // when window width is >= 640px
            768: {
            slidesPerView: 1,
            spaceBetween: 500
            }
        },
    
        pagination: {
            el: ".swiperaaa",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + title[index] + "</span>";
            },
          },
        
    });
}




//아이템 디테일 박스와 선택 
const itemDetailBtn = document.querySelectorAll('.item_more_btn');
const lightBox = document.querySelector('.detail_lightbox');
const itemCard = document.querySelectorAll('.item_card');

itemCard.forEach(function(e){
    e.addEventListener('click', function(e){
        
        if(e.target.className == 'item_more_btn') {
            lightBox.classList.add('active');
        } else {
            this.classList.toggle('active');
        }
    })
});

lightBox.addEventListener('click',function(e){

    this.classList.remove('active');
});




//웰컴킷 구성하기 버튼
const configNavBtn = document.querySelectorAll('.config_nav a');
const config = document.querySelectorAll('.config');

configNavBtn.forEach(function(e, key){
    e.addEventListener('click', function(){

        configNavBtn.forEach(function(v){
            v.classList.remove('active');
        })

        config.forEach(function(v){
            v.classList.remove('active');
        });

        this.classList.toggle('active');
        config[key].classList.add('active');

        slideReload();
    });
});


//금액별
const themeNav = document.querySelectorAll('.theme_nav a');
const theme = document.querySelectorAll('.theme');

themeNav.forEach(function(val, key){

    val.addEventListener('click', function(){

        //nav class초기화
        themeNav.forEach(function(e){
            e.classList.remove('active');
        });

        //theme class 초기화
        theme.forEach(function(el){
            el.classList.remove('active');
        });

        //nav class추가
        this.classList.add('active');
        theme[key].classList.add('active');
    });
});

//선택상품별
const packageNav = document.querySelectorAll('.package_nav a');
const package = document.querySelectorAll('.package');

packageNav.forEach(function(val, key){

    val.addEventListener('click', function(){
        console.log(key);

        //nav class초기화
        packageNav.forEach(function(e){
            e.classList.remove('active');
        });

        //theme class 초기화
        package.forEach(function(el){
            el.classList.remove('active');
        });

        //nav class추가
        this.classList.add('active');
        package[key].classList.add('active');
    });
});

//장바구니 늘이거나 줄이기
const cartBtn = document.querySelector('.cart_btn');
const cart = document.querySelector('.cart');

cartBtn.addEventListener('click', function(){
    cart.classList.toggle('active');
});


//모바일 메뉴버튼
let menuBtn = document.querySelector('.menu_trigger');
let menuNav = document.querySelector('.menu_nav_back');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
});


//2단계 질문

const addBtn = document.querySelector('.add_btn');
const itemBox = document.querySelector('.item_box');
const askBox = document.querySelector('.ask');
const askBtns = document.querySelectorAll('.ask a');

askBtns.forEach(function(e){
    
    e.addEventListener('click', function(){
        askBox.classList.add('active');
    })
});


addBtn.addEventListener('click', function(){
    itemBox.classList.add('active');
    slideReload2();

})
