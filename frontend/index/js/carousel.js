$('.slide').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 500,
            dots: true,
            infinite: true
        }
    },
    {
        breakpoint:600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            dots: true,
            infinite: true
        }
    }
    ]
});