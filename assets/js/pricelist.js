$(document).ready(function() {
    $('.pricelist__button').click(function() {
        // Переключение состояния видимости контента
        $('.pricelist__grid__hide').slideToggle();
        
        // Поворот кнопки на 180 градусов
        $(this).toggleClass('rotate');

        // Изменение изображения кнопки
        var imgSrc = $(this).find('img').attr('src');
        if (imgSrc === './assets/img/arrow-down-square.svg') {
            $(this).find('img').attr('src', './assets/img/arrow-up-square.svg');
        } else {
            $(this).find('img').attr('src', './assets/img/arrow-down-square.svg');
        }
    });
});