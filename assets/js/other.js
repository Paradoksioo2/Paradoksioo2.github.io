$(document).ready(function() { 
    $('.make__other').click(function() { 
        if ($('.calculator__menu').hasClass('active')) { 
            $('.other__menu').toggleClass('active');
            $('.calculator__menu').removeClass('active');
        } else if ($('.phone__menu').hasClass('active')) { 
            $('.phone__menu').removeClass('active');
            $('.other__menu').toggleClass('active');
        }  else if ($('.type__menu').hasClass('active')) { 
            $('.type__menu').removeClass('active');
            $('.other__menu').toggleClass('active');
        } else { 
            $('.other__menu').toggleClass('active')
        }
        
        if ($(this).hasClass('app__on__phone')) {
            $('.other__menu h3').text('Заказать звонок');
        } else if ($(this).hasClass('app__on__price')) {
            $('.other__menu h3').text('Отправить заявку для расчета стоимости');
        } else {
            // Устанавливаем текст по умолчанию
            $('.other__menu h3').text('Отправить заявку на звонок');
        }
    });

    $('.closeOther').click(function() { 
            $('.other__menu').removeClass('active');
    });
});