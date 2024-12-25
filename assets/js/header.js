if ($(window).width() > 1180) {
    // Desktop specific logic here
} else {
    $('#toggleBtn').on('click', function () {
        $('.header__foot__list').slideToggle(500, function () {}).css('display', 'flex');
        $('.line1').toggleClass('active');
        $('.line2').toggleClass('active');
        $('.line3').toggleClass('active');
    });

    // Initialize Hammer.js on the element you want to detect swipe on
    var headerFootList = document.querySelector('.header__foot__list');
    var mc = new Hammer(headerFootList);

    // Listen for swipe up gesture
    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    mc.on("swipeup", function(ev) {
        if ($('.header__foot__list').is(':visible')) {
            $('.header__foot__list').slideUp(500, function () {
                $(this).css('display', 'none');
            });
            $('.line1').removeClass('active');
            $('.line2').removeClass('active');
            $('.line3').removeClass('active');
        }
    });
}
