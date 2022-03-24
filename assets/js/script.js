//Скрипт на кастом добавления файла 
jQuery(document).ready(function ($) {
 
  if($('#addImages')) {

    var maxFileSize = 2 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
    var queue = {};
    var form = $('form#uploadImages');
    var imagesList = $('#uploadImagesList');
  
    var itemPreviewTemplate = imagesList.find('.item.template').clone();
    itemPreviewTemplate.removeClass('template');
    imagesList.find('.item.template').remove();
  
  
    $('#addImages').on('change', function () {
        var files = this.files;
  
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
  
            if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
                alert( 'Фотография должна быть в формате jpg, png или gif' );
                continue;
            }
  
            if ( file.size > maxFileSize ) {
                alert( 'Размер фотографии не должен превышать 2 Мб' );
                continue;
            }
  
            preview(files[i]);
        }
  
        this.value = '';
    });
  
    // Создание превью
    function preview(file) {
        var reader = new FileReader();
        reader.addEventListener('load', function(event) {
            var img = document.createElement('img');
  
            var itemPreview = itemPreviewTemplate.clone();
  
            itemPreview.find('.img-wrap img').attr('src', event.target.result);
            itemPreview.data('id', file.name);
  
            imagesList.append(itemPreview);
  
            queue[file.name] = file;
  
        });
        reader.readAsDataURL(file);
    }
  
    // Удаление фотографий
    imagesList.on('click', '.delete-link', function () {
        var item = $(this).closest('.item'),
            id = item.data('id');
  
        delete queue[id];
  
        item.remove();
    });
  
  
    // Отправка формы
    form.on('submit', function(event) {
  
        var formData = new FormData(this);
  
        for (var id in queue) {
            formData.append('images[]', queue[id]);
        }
  
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            async: true,
            success: function (res) {
                alert(res)
            },
            cache: false,
            contentType: false,
            processData: false
        });
  
        return false;
    });
  }


});


document.addEventListener('DOMContentLoaded', function() {

  let calculatorRange = document.getElementById('calculatorRange');
  let calculatorItemCountTake = document.querySelector('.calculatorItemCountTake');

  if(calculatorRange) {
    let calculatorItemCount = document.querySelector('.calculatorItemCount');
    
    calculatorRange.addEventListener('input', e => {
      let range = Number(calculatorRange.value) * 50;
      calculatorItemCount.innerHTML = range + ' ';
      let count = Math.round(Number(calculatorItemCount.innerHTML) / 900)
      calculatorItemCountTake.innerHTML = count + ' ';

    })
  }
  
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
    //Review slider 
    const productBoardSlider = new Swiper('.productBoardSlider', { 
      slidesPerView: 2,
      watchOverflow: true,     
      pagination: {
        el: '.swiper-paginations',
        type: 'bullets',
        clickable: true,
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

jQuery(function($){
    $('.table').footable();
});


