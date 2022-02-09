document.addEventListener('DOMContentLoaded', function() {

    const partnersSlider = new Swiper('.partnersSlider', { 
        slidesPerView: 6,
        watchOverflow: true, 
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });


    // Text animated
    const changeText = (outer, inner, time, speed) => {
        let typed = new Typed(outer, {
            stringsElement: inner,
            //Время написания текста
            typeSpeed: speed,
            //Скрыть курсор
            showCursor: false,
            //Время запуска написания текста
            startDelay: time,
        });
    }
    
    changeText('#animateChatItemFirst', '#animateChatItem1', 0 , 1);
    changeText('#animateChatItemSecond', '#animateChatItem2', 1500 , 1);
    changeText('#animateChatItemThird', '#animateChatItem3', 3000, 1);
 }, false);


