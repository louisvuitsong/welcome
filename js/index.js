//배너 > 웰컴킷 구성하기
const configTitle  = document.querySelectorAll('.config .config-list > h4');
const configList = document.querySelectorAll('.config-nav');

configTitle.forEach(function(e, key){
    e.addEventListener('click', function(){
        console.log('click');
        configList[key].classList.toggle('active');
    });
});


//모바일 메뉴버튼
let menuBtn = document.querySelector('.menu-trigger');
let menuNav = document.querySelector('.menu-nav-back');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
});
 
