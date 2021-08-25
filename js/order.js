//모바일 메뉴버튼
let menuBtn = document.querySelector('.menu-trigger');
let menuNav = document.querySelector('.menu-nav-back');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
});


//아이템 디테일 박스와 선택 
const itemDetailBtn = document.querySelectorAll('.item-more-btn');
const lightBox = document.querySelector('.detail-lightbox');
const itemCard = document.querySelectorAll('.item-card');

itemCard.forEach(function(e){
    e.addEventListener('click', function(e){
        
        if(e.target.className == 'item-more-btn') {
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
//step 버튼

const configNavBtn = document.querySelectorAll('.config-nav a');
const config = document.querySelectorAll('.configurator');
const stepNavs = document.querySelectorAll('.step-nav');
let stepNavIdx = 0;


configNavBtn.forEach(function(e, key){
    e.addEventListener('click', function(){

        configNavBtn.forEach(function(v){
            v.classList.remove('active');
        })

        config.forEach(function(v){
            v.classList.remove('active');
        });

        stepNavs.forEach(function(e){
            e.classList.remove('active');
        });

        this.classList.toggle('active');
        config[key].classList.add('active');
        stepNavs[key].classList.add('active');

        stepNavIdx = key;
        console.log(stepNavIdx)
        return stepNavIdx;
    });
});





//금액별
const themeNav = document.querySelectorAll('.budget-nav a');
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
const packageNav = document.querySelectorAll('.package-nav a');
const package = document.querySelectorAll('.package');

packageNav.forEach(function(val, key){

    val.addEventListener('click', function(){

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
const cartBtn = document.querySelector('.cart-btn');
const cart = document.querySelector('.cart');
const closeBtn = document.querySelector('.close');
const cartTitle = document.querySelector('.cart-title');

cartTitle.addEventListener('click', function(){
    cartBtn.classList.add('active');
    cart.classList.add('active');
});

closeBtn.addEventListener('click', function(){
    cartBtn.classList.remove('active');
    cart.classList.remove('active');
});




//2단계 질문
const addBtn = document.querySelector('.add-btn');
const itemBox = document.querySelector('.item-box-recommand');
const askBox = document.querySelector('.ask');
const askBtns = document.querySelectorAll('.ask a');
const addItem = document.querySelector('.add-item');
const readyBtn = document.querySelector('.ready-btn');
const forOrder = document.querySelector('.for-order');

askBtns.forEach(function(e){
    
    e.addEventListener('click', function(){
        e.classList.add('active');
        addItem.classList.add('active');
    })
});


addBtn.addEventListener('click', function(){
    itemBox.classList.add('active');
    readyBtn.classList.add('active');
});

forOrder.addEventListener('click', function(){
    cart.classList.add('active');
    cartBtn.classList.add('active');
})


//다시 슬라이드

const swiperaaa = document.querySelectorAll('.product-nav a');
const itemList = document.querySelectorAll('.add-list');

swiperaaa.forEach(function(e, key){
    e.addEventListener('click', function(){

        swiperaaa.forEach(function(el){
            el.classList.remove('active');
        })

        itemList.forEach(function(a){
            a.classList.remove('active');
        })

        e.classList.add('active');

        itemList[key].classList.add('active');
    });
});


//선택 슬라이드
const swiperTitle = document.querySelectorAll('.self-product-nav a');
const selectList = document.querySelectorAll('.select-list');

swiperTitle.forEach(function(e, key){
    e.addEventListener('click', function(){

        swiperTitle.forEach(function(el){
            el.classList.remove('active');
        })

        selectList.forEach(function(a){
            a.classList.remove('active');
        })

        e.classList.add('active');

        selectList[key].classList.add('active');
    });
});



//nav
const themeSelect = document.querySelector('.theme-select');
const inquire = document.querySelector('.inquire');
const items = document.querySelectorAll('.items');
const selects = document.querySelectorAll('.select');




window.addEventListener('scroll',function(){
    // this.scrollY  스크롤 위치값
    let step = stepNavs[stepNavIdx].querySelectorAll('.step');
    

    if (selects[stepNavIdx].offsetTop-70 < this.scrollY && this.scrollY < items[stepNavIdx].offsetTop) {
        
        stepNavReset();
        step[0].classList.add('active');

    } else if (items[stepNavIdx].offsetTop-200 < this.scrollY && this.scrollY < inquire.offsetTop-300) {

        stepNavReset();
        step[1].classList.add('active');

    } else if (this.scrollY > inquire.offsetTop-300 ) {
        stepNavReset();
        step[2].classList.add('active');
    }

    function stepNavReset() {
        step.forEach(function(e){
            e.classList.remove('active');
        })
    }
});


