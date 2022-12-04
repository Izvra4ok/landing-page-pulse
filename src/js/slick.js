$(document).ready(function () {
    $('.carousel__inner').slick({
        dots: true,
        prevArrow: "<button type=\"button\" class=\"slick-prev\"><img src='../src/assets/image/carousel/left.jpg' alt='left'></button>",
        nextArrow: "<button type=\"button\" class=\"slick-next\"><img src='../src/assets/image/carousel/chevron-right-solid.jpg' alt='right'></button>",
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
        ]


    });
});




