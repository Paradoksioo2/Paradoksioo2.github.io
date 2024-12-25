$(document).ready(function() {
    // $('#phone').click(function() { 
    //     if ($('.calculator__menu').hasClass('active')) { 
    //         $('.phone__menu').toggleClass('active');
    //         $('.calculator__menu').removeClass('active');
    //     } else { 
    //         $('.phone__menu').toggleClass('active');
    //     }
        
    // });

    document.getElementById("phone").addEventListener("click", function() {
        var phoneNumber = "89240220551"; // Здесь указывается нужный номер телефона
        window.location.href = "tel:" + phoneNumber;
    });

    document.getElementById("phoneHeader").addEventListener("click", function() {
        var phoneNumber = "89240220551"; // Здесь указывается нужный номер телефона
        window.location.href = "tel:" + phoneNumber;
    });

    $('.make__phone').click(function() {
        if ($('.calculator__menu').hasClass('active')) {
            // Если у элемента calculator__menu есть класс active, удаляем его и добавляем/удаляем классы у других элементов
            $('.phone__menu').toggleClass('active');
            $('.calculator__menu').removeClass('active');
        } else if ( $('.other__menu').hasClass('active')) { 
            $('.other__menu').removeClass('active');
            $('.phone__menu').toggleClass('active');
        } else if ($('.type__menu').hasClass('active')) { 
            $('.type__menu').removeClass('active');
            $('.phone__menu').toggleClass('active');
        } else {
            // Если у элемента calculator__menu нет класса active, добавляем/удаляем класс у другого элемента
            $('.phone__menu').toggleClass('active');
        }
    });

    $('.make__calc').click(function () {
        if ($('.phone__menu').hasClass('active')) { 
            $('.calculator__menu').toggleClass('active');
            $('.phone__menu').removeClass('active');
        }
        else { 
            $('.calculator__menu').toggleClass('active');
        }
        
    });

    $('.closePhone').click(function() { 
        if ($('.phone__menu').hasClass('active')) { 
            $('.phone__menu').removeClass('active');
        }
    });
});