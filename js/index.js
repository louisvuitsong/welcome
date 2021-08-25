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
 
$.ajax({
    type: "GET",
    url: '../db/portfolio.json',
    success: function(data){

        let pf = data.portfolio;

        let title, subTitle, imgUrl, detail, tagList="";

        
        pf.forEach(function (val, key) {
            title = val.title;
            subTitle = val.subTitle;
            imgUrl = val.imgUrl;


            tagList += `<li class="portfolio-card">`;
            tagList +=      `<figure>`;
            tagList +=          `<p class="portfolio-img"><img src="` + imgUrl + `" alt=""></p>`;
            tagList +=          `<figcaption>`;
            tagList +=              `<p>` + title + `</p>`;
            tagList +=              `<p>` + subTitle + `</p>`;
            tagList +=          `</figcaption>`;
            tagList +=          `<p class="portfolio-more">더 알아보기</p>`;
            tagList +=      `</figure>`;
            tagList += `</li>`;


            $('.portfolio-list').html(tagList);
        });



            //product-detail popUp
            $('.product figure').on('click',function(){
                if(state == 'drag') return false;
                console.log('ad')
                detailImg1 = db.toteDetail[idx].detailImg1;
                detailImg2 = db.toteDetail[idx].detailImg2;
                detailImg3 = db.toteDetail[idx].detailImg3;
                proTitle   = db.toteDetail[idx].proTitle;
                proMade    = db.toteDetail[idx].proMade;
                proNum     = db.toteDetail[idx].proNum;
                proPrice   = db.toteDetail[idx].proPrice;
                proExp     = db.toteDetail[idx].proExp;

                li1        = db.toteDetail[idx].li1;
                li2        = db.toteDetail[idx].li2;
                li3        = db.toteDetail[idx].li3;
                li4        = db.toteDetail[idx].li4;
                li5        = db.toteDetail[idx].li5;
                li6        = db.toteDetail[idx].li6;
                li7        = db.toteDetail[idx].li7;
                li8        = db.toteDetail[idx].li8;


                $('.pop-imgs p img').attr('src',detailImg1);
                $('.pop-imgs div img:first').attr('src',detailImg2);
                $('.pop-imgs div img:last').attr('src',detailImg3);
                $('.pop-detail > div p').eq(0).text(proTitle);
                $('.pop-detail > div p').eq(1).text(proMade);
                $('.pop-detail > div p').eq(2).text(proNum);
                $('.pop-detail > div p').eq(3).text(proPrice);
                $('.pop-detail article p').text(proExp);

                $('.pop-detail article ul li').eq(0).text(li1);
                $('.pop-detail article ul li').eq(1).text(li2);
                $('.pop-detail article ul li').eq(2).text(li3);
                $('.pop-detail article ul li').eq(3).text(li4);
                $('.pop-detail article ul li').eq(4).text(li5);
                $('.pop-detail article ul li').eq(5).text(li6);
                $('.pop-detail article ul li').eq(6).text(li7);
                $('.pop-detail article ul li').eq(7).text(li8);

                $('.product-pop').addClass('active');
            });

                //product slide
            // $('.product').draggable({
            //     axis:'x',
            //     start:function(){},
            //     drag:function(){},
            //     stop:function(){
            //         state = 'drag';
            //         setTimeout(function(){ state = ''; },50);
            //     }
            // });
    }
})