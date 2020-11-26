$(document).ready(function(){
    $('.slider2').slick({
        autoplay: false,
        infinite: true,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '25%',
        arrows: false,
        //easing: 'linear',
        //waitForAnimate: false,
        responsive:[
            {
                breakpoint: 450,
                settings:{
                    centerPadding: '17%',
                },
            },
            {
                breakpoint: 800,
                settings:{
                    centerPadding: '22%',
                },
            }
        
        ]
    });
});

