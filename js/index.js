//배너 > 웰컴킷 구성하기
const configTitle  = document.querySelector('.config h3');
const configList = document.querySelector('.config_list');

configTitle.addEventListener('click', function(){
    configList.classList.toggle('active');
});


//포트폴리오 슬라이드
let swiper = new Swiper(".mySwiper", {
  
});


var itemCard = document.querySelectorAll('.item_card');
itemCard.forEach(function(e){
    e.addEventListener('click', function(){
        this.classList.toggle('active');
    })
});


//배너
const categoryBanner = document.querySelector('.category');
const config = document.querySelector('.welcome_product');

window.addEventListener('scroll', function(){
    let configLocate = (config.offsetTop - 500);

    if(this.scrollY >= configLocate){
        categoryBanner.classList.add('active');
    } else {
        categoryBanner.classList.remove('active');
    }
});

//모바일 메뉴버튼
let menuBtn = document.querySelector('.menu_trigger');
let menuNav = document.querySelector('.menu_nav');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
});
