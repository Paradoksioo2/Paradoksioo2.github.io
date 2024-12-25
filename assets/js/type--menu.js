$(document).ready(function() { 
    $('.make__type').click(function() { 
        if ($('.calculator__menu').hasClass('active')) { 
            $('.calculator__manu').removeClass('active');
            $('.type__menu').toggleClass('active');
        } else if ($('phone__menu').hasClass('active')) { 
            $('.phone__menu').romoveClass('active');
            $('.type__menu').toggleClass('active');

        } else if ($('.other__menu').hasClass('active')) { 
            $('.other__menu').removeClass('active');
            $('.type__menu').toggleClass('active');
        } else { 
            $('.type__menu').toggleClass('active');

        }

        var parentItem = $(this).closest('.type__item');
        
        // Извлекаем данные из родительского элемента
        var title = parentItem.find('.type__item__disc h2').text();
        var price = parentItem.find('.type__item__disc__price span').text();
        var imageSrc = parentItem.find('img').attr('src');
        var points = parentItem.find('.type__item__points').html();
        
        // Устанавливаем значения в элементы вместо скрытых полей в форме
        $('.type__item__disc1 h2').text(title);
        $('.type__item__disc__price1 span').text(price);
        $('.type__menu__item__img').attr('src', imageSrc);
        $('.type__menu .type__item__points').html(points);
    });

    $('.closeType').click(function() { 
        $('.type__menu').removeClass('active');
    });
});