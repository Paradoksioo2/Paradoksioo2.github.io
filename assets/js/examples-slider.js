$(document).ready(function() { 
    $('.ex__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        
        responsive : [
            { 
                breakpoint : 1199,
                settings : { 
                    arrows : false ,
                    dots : true,
                    slidesToShow: 1,
                    
                }
            },
            { 
                breakpoint : 9999,
                settings : {
                    arrows : false,
                    dots: true,
                    slidesToShow: 1,
                    
                }
            }
        ]
    })
});