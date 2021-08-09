//제품별 구성하기 슬라이드
const swiperProduct = new Swiper('.product_slide', {
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
        slidesPerView: 1,
        spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
        slidesPerView: 3.3,
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