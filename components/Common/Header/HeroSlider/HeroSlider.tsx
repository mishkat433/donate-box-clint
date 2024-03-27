"use client"

import Image from "next/image";
import "./HeroSlider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import SliderPicture from "../../../../Data/Hero/sliderPicture.json";
import pic1 from "../../../../public/assets/HeroSlider/bg_1.jpg.webp"
import pic2 from "../../../../public/assets/HeroSlider/bg_2.jpg.webp"
import pic3 from "../../../../public/assets/HeroSlider/bg_3.jpg.webp"
import pic4 from "../../../../public/assets/HeroSlider/bg_4.jpg.webp"
import pic5 from "../../../../public/assets/HeroSlider/h1_hero1.jpg.webp"


const HeroSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",

    };

    // fake data
    const slicePic = [pic1, pic2, pic3, pic4, pic5]

    return (
        <div className="slider-container mt-1 mb-default bg-heroSlider-bg bg-bottom bg-[length:100vw_50px] lg:bg-[length:100vw_100px] bg-no-repeat ">
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settings} className="SliderArrow">

                {slicePic.map((slide, index) => (
                    <div key={index}>
                        <Image className="w-full h-[40vh] md:h-[50vh] lg:h-[70vh]" src={slide} alt="" width={0} height={0} />
                    </div>
                ))}
            </Slider>
            <div className="  ">
                <div className="w-[50%] lg:w-[40%] h-auto mx-auto ">
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        slidesToShow={6}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        {slicePic.map((slide, index) => (
                            <div key={index}>
                                <Image className="w-full h-[4vh] lg:h-[8vh]" src={slide} alt="" width={0} height={0} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;