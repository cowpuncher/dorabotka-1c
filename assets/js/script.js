document.addEventListener('DOMContentLoaded', function() {
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
    
    changeText('#animateChatItemFirst', '#animateChatItem1', 0 , 10);
    changeText('#animateChatItemSecond', '#animateChatItem2', 2000 , 10);
    changeText('#animateChatItemThird', '#animateChatItem3', 3000, 10);
 }, false);


