let menuBtn = document.querySelector('.menu_trigger');
let menuNav = document.querySelector('.menu_nav');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
});

const configTitle  = document.querySelector('.config h3');
const categoryList = document.querySelector('.category_list');

configTitle.addEventListener('click', function(){
    categoryList.classList.toggle('active');
});

let swiper = new Swiper(".mySwiper", {
  
});

var itemCard = document.querySelectorAll('.item_card');
// for(let i=0; i<itemCard.index; i++){
//     itemCard[i].addEventListener('click', function(e){
//         e.classList.toggle('active');
//     });
// }


