$(document).ready(function(){
    var lastScrollTop = 0;
    var delta = 5;
    var headerHeight = $('#header__top').outerHeight();
  
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
  
      // Проверяем, нужно ли скрывать header
      if (Math.abs(lastScrollTop - st) <= delta)
        return;
  
      if (st > lastScrollTop && st > headerHeight){
        // Скрываем header при прокрутке вниз
        $('#header__top').slideUp(); // Используем slideUp для скрытия с анимацией
      } else {
        // Показываем header при прокрутке вверх или когда страница находится в самом верху
        if(st + $(window).height() < $(document).height()) {
          $('#header__top').slideDown(); // Используем slideDown для показа с анимацией
        }
      }
      lastScrollTop = st;
    });
  });