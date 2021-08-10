//제품별 구성하기 슬라이드
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
        spaceBetween: 40
        }
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        // renderCoustom(wiper, current, total)
      },
    // renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + "</span>";
    //   },
});


//아이템 디테일 박스
let itemDetail = document.querySelectorAll('.item_more_btn');
const lightBox = document.querySelector('.detail_lightbox');

function moreBtnClick() {
    itemDetail.forEach(function(e){
        e.addEventListener('click', function(){
            lightBox.classList.toggle('active');
        });
    });
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


//장바구니 늘이거나 줄이기
const cart = document.querySelector('.cart');

cart.addEventListener('click', function(){
    this.classList.toggle('active');
});


//웰컴킷 구성하기 버튼
const configNavBtn = document.querySelectorAll('.config_nav a');

configNavBtn.forEach(function(e, key){
    e.addEventListener('click', function(){

        this.classList.toggle('active');
    });
});

const recommand = document.querySelector('.welcome_recommand');
const select = document.querySelector('.welcome_select');

configNavBtn[0].addEventListener('click', function(){

    select.classList.remove('active');

    recommand.classList.add('active');

});

configNavBtn[2].addEventListener('click', function(){

    recommand.classList.remove('active');

    select.classList.add('active');

});
