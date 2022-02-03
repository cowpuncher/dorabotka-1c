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
    changeText('#animateChatItemSecond', '#animateChatItem2', 3000 , 0);
    changeText('#animateChatItemThird', '#animateChatItem3', 5000, 5);
 }, false);


