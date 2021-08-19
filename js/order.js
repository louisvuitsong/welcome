
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
//step 버튼

const configNavBtn = document.querySelectorAll('.config_nav a');
const config = document.querySelectorAll('.config');
const stepNavs = document.querySelectorAll('.step_nav');
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
const closeBtn = document.querySelector('.close');
const cartTitle = document.querySelector('.cart_title');

cartTitle.addEventListener('click', function(){
    cartBtn.classList.add('active');
    cart.classList.add('active');
});

closeBtn.addEventListener('click', function(){
    cartBtn.classList.remove('active');
    cart.classList.remove('active');
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
const itemBox = document.querySelector('.item_box_recommand');
const askBox = document.querySelector('.ask');
const askBtns = document.querySelectorAll('.ask a');
const addItem = document.querySelector('.add_item');
const readyBtn = document.querySelector('.ready_btn');
const forOrder = document.querySelector('.for_order');

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

const swiperaaa = document.querySelectorAll('.swiperaaa a');
const itemList = document.querySelectorAll('.add_list');

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
const swiperTitle = document.querySelectorAll('.swiper_title a');
const selectList = document.querySelectorAll('.select_list');

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
const themeSelect = document.querySelector('.theme_select');
const inquire = document.querySelectorAll('.inquire');
const items = document.querySelectorAll('.items');
const selects = document.querySelectorAll('.select');




window.addEventListener('scroll',function(){
    // this.scrollY  스크롤 위치값
    let step = stepNavs[stepNavIdx].querySelectorAll('.step');
    
    
    // stepNavs[stepNavIdx]
    if (selects[stepNavIdx].offsetTop-70 < this.scrollY && this.scrollY < items[stepNavIdx].offsetTop) {
        
        stepNavReset();
        step[0].classList.add('active');

    } else if (items[stepNavIdx].offsetTop-200 < this.scrollY && this.scrollY < inquire[stepNavIdx].offsetTop) {

        stepNavReset();
        step[1].classList.add('active');

    } else if (this.scrollY > inquire[stepNavIdx].offsetTop-200 ) {
        stepNavReset();
        step[2].classList.add('active');
    }

    function stepNavReset() {
        step.forEach(function(e){
            e.classList.remove('active');
        })
    }
});


