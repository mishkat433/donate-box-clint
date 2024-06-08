"use client"

import "./HeroSlider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBannersQuery } from "../../redux/api/bannerApi";
import DotLoading from "../ReusableComponent/DotLoading";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";


const HeroSlider = () => {

    const { data, isLoading, isError }: any = useBannersQuery({ undefined });

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


    if (isLoading) {
        return <DotLoading size="2xl" text="primary-red" height="32" />
    }

    if (isError) {
        return <p className="text-xl text-center text-primary-red py-5">Something went wrong</p>
    }

    return (
        <div className="slider-container mt-1  mx-auto bg-heroSlider-bg bg-bottom bg-[length:100vw_50px] lg:bg-[length:100vw_80px] bg-no-repeat">
          <div  >
              <Image className="w-full h-[40vh] md:h-[50vh] lg:h-[70vh]" src={data[0]?.path} alt="asdf" width={500} height={500} />
          </div>
            {/* <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settings} className="SliderArrow">
            </Slider>
             {data?.map((slide, index) => ( 

             ))} 
            <div className="w-[50%] lg:w-[40%] h-auto mx-auto">
                <Slider
                    asNavFor={nav1}
                    ref={slider => (sliderRef2 = slider)}
                    slidesToShow={6}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {data?.map((slide, index) => (
                        <div key={index}>
                            <Image className="w-full h-[4vh] lg:h-[8vh]" src={slide?.path} alt="" width={0} height={0} />
                        </div>
                    ))}
                </Slider>
            </div> */}
                    {/* </div> */}
      
    </div>
  

    );
};

export default HeroSlider;