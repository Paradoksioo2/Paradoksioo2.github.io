$(document).ready(function () {
    


    // При клике на любой из радио-кнопок
    $('.calculator__type__item1 input[type="radio"]').click(function () {
        // Снимаем флажок со всех других радио-кнопок
        $('.calculator__type__item1 input[type="radio"]').not(this).prop('checked', false);
    });

    $('.calculator__place__item1 input[type="radio"]').click(function () {
        // Снимаем флажок со всех других радио-кнопок
        $('.calculator__place__item1 input[type="radio"]').not(this).prop('checked', false);
    });

    $('.calculator__mat__item1 input[type="radio"]').click(function () {
        // Снимаем флажок со всех других радио-кнопок
        $('.calculator__mat__item1 input[type="radio"]').not(this).prop('checked', false);
    });

    $('.calculator__form__check__cont1 input[type="radio"]').click(function () {
        // Получаем текст из элемента <p>
        var text = $(this).siblings('p').text();
        // Присваиваем его как значение атрибута "value" скрытого поля ввода
        $('#cForm-hidden').val(text);
        // Снимаем флажок со всех других радио-кнопок
        $('.calculator__form__check__cont1 input[type="radio"]').not(this).prop('checked', false);
    });


    // _!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // Скрыть все элементы, кроме первого
    $('.calculator__container1 > div').not(':first').hide();

    $('.calculator__prev1').click(function () {
        // Найти текущий элемент
        var current = $('.calculator__container1 > div:visible');

        // Найти предыдущий элемент
        var prev = current.prev('.calculator__container1 > div');

        // Если предыдущий элемент существует
        if (prev.length) {
            // Скрыть текущий элемент
            current.hide();
            // Показать предыдущий элемент
            prev.show();

            // Получить текст для изменения в элементе <span id="calc-title">
            var title = '';
            switch (prev.attr('id')) {
                case 'cType1':
                    title = 'тип мебели';
                    $('.s11').addClass('active');
                    $('.s21').removeClass('active');
                    break;
                case 'cPlace1':
                    title = 'размер мебели';
                    $('.s31').removeClass('active');
                    $('.s21').addClass('active');
                    break;
                case 'cMat1':
                    title = 'материал';
                    $('.s41').removeClass('active');
                    $('.s31').addClass('active');
                    break;
                case 'cForm1':
                    title = 'удобный способ связи';
                    
                    break;
                default:
                    title = 'тип мебели';
                    break;
            }
            $('#calc-title1').text(title);

            // Показываем кнопку "Далее"
            $('.calculator__next1').show();
        }

        // Если мы на первом шаге, скрываем кнопку "Назад"
        if (prev.attr('id') === 'cType') {
            $('.calculator__prev1').hide();
        }
    });

    // При клике на кнопку "Далее"
    $('.calculator__next1').click(function () {
        console.log('Клик по кнопке "Далее" обработан'); // Отладочное сообщение
        // Найти текущий элемент
        var current = $('.calculator__container1 > div:visible');

        // Найти следующий элемент
        var next = current.next('.calculator__container1 > div');

        $('.calculator__prev1').show();

        // Если следующий элемент существует
        if (next.length) {
            // Скрыть текущий элемент
            current.hide();
            // Показать следующий элемент
            next.show();

            // Получить текст для изменения в элементе <span id="calc-title">
            var title = '';
            switch (next.attr('id')) {
                case 'cType1':
                    title = 'тип мебели';
                    break;
                case 'cPlace1':
                    title = 'размер мебели';
                    $('.s11').removeClass('active');
                    $('.s21').addClass('active');
                    break;
                case 'cMat1':
                    title = 'материал';
                    $('.s21').removeClass('active');
                    $('.s31').addClass('active');
                    break;
                case 'cForm1':
                    title = 'удобный способ связи';
                    $('.s31').removeClass('active');
                    $('.s41').addClass('active');
                    break;
                default:
                    title = 'тип мебели';
                    break;
            }
            $('#calc-title1').text(title);

            // Показать кнопку "Далее", если следующий элемент не является формой
            if (next.attr('id') !== 'cForm1') {
                $('.calculator__next1').show();
            } else {
                $('.calculator__next1').hide();
            }
        }
    });
});