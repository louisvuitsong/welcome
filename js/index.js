//배너 > 웰컴킷 구성하기
const configTitle  = document.querySelector('.config > a');
const configList = document.querySelector('.config_list');

configTitle.addEventListener('click', function(){
    configList.classList.toggle('active');
});


//포트폴리오 슬라이드
// let swiper = new Swiper(".mySwiper", {
  
// });

//포트폴리오 바닐라 슬라이드
// const portfolioSlide = document.querySelector('.portfolio_slide');
// const portfolioCardEa  = document.querySelectorAll('.portfolio_card').length;
// let mPos = {start: 0, end: 0};
// let num  = 0;
// portfolioSlide.addEventListener('touchstart',touch);
// portfolioSlide.addEventListener('touchend',touch);

// function touch(e) {
//     if (e.type == 'touchstart') {
//         mPos.start = e.changedTouches[0].clientX;
//     } else {
//         mPos.end = e.changedTouches[0].clientX;
//         dragAni();
//     }
// }

// function dragAni(){

//     if(mPos.start < mPos.end){
//         //우측
//         if(num > 0) num--;
//     }else{
//         //좌측
//         if(num < portfolioCardEa-1) num++;
//     }
//     portfolioSlide.style = `left: ${-100 * num}%`;
// }

//제이쿼리 드래그
let mPos = {start:0, end:0}, num=0;
// const portfolioSlide = document.querySelector('.portfolio_slide');
const portfolioCardEa  = document.querySelectorAll('.portfolio_card').length;
itemWid = $('.portfolio_card').width()/2;
$('.portfolio_slide').draggable({
axis:'x',
start:function(e){
    mPos.start = e.pageX;
},
drag:function(){},
stop:function(e){
    mPos.end = e.pageX;
    dragAni();
}
});

function dragAni(){
    var dragNum = Math.abs(mPos.start - mPos.end);
    if(itemWid < dragNum){
        if(mPos.start < mPos.end){
            // console.log('우측'); prev
            if(num > 0) num--;
        }else{
            // console.log('좌측'); next
            if(num < portfolioCardEa-1) num++;
        }
    }

    $('.portfolio_slide').animate({left: -100 * num + '%'})
}




//아이템 디테일 박스
let itemDetail = document.querySelector('.item_more_btn');
const lightBox = document.querySelector('.detail_lightbox');
function moreBtnClick() {
    itemDetail.addEventListener('click', function(){
        lightBox.classList.toggle('active');
    });
}
lightBox.addEventListener('click',function(){
    this.classList.remove('active');
});


// 아이템 선택
var itemCard = document.querySelectorAll('.item_card');
itemCard.forEach(function(e){
    e.addEventListener('click', function(e){
        console.log(e.target.parentNode);

        if(e.target.parentNode == itemDetail || e.target == itemDetail) {
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


