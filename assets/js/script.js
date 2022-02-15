document.addEventListener('DOMContentLoaded', function() {

    //Partners slider
    const partnersSlider = new Swiper('.partnersSlider', { 
      slidesPerView: 6,
      watchOverflow: true, 
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },      
    });

    //Review slider 
    const reviewSlider = new Swiper('.reviewSlider', { 
      slidesPerView: 1,
      watchOverflow: true, 
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },      
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
    });
    // add Image preview
    let previewBulletImages = document.querySelectorAll('.previewBulletImages img');
    let previewBulletSpan = document.querySelectorAll('.swiper-pagination span');
    for(var i = 0; i < previewBulletSpan.length; i++) {
      previewBulletSpan[i].appendChild(previewBulletImages[i]);
    }
    //----------------------------------------------------------
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


