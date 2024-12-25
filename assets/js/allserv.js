$(document).ready(function() { 
    $('.allserv__show__more').click(function() { 
        if($(window).width() > 499) { 
            $('.allserv__hidden').slideToggle();

            $(this).toggleClass('rotate');
        } else {  
            
            $('.allserv__list').slideToggle();

            $(this).toggleClass('rotate');
        }
        
       
    });
});