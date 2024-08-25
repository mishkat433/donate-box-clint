
export const heroSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
    fade: true,
};


export const newsSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // centerPadding: "60px",
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2.5,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]

};


