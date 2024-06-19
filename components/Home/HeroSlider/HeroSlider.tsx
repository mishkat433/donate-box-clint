"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css"
import DotLoading from "../../ReusableComponent/DotLoading";
import { useBannersQuery } from "../../../redux/api/bannerApi";
import Slider from "react-slick";
import Image from "next/image";


const HeroSlider = () => {

    const { data, isLoading, isError }: any = useBannersQuery({ undefined });

    const settings = {
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


    if (isLoading) {
        return <DotLoading size="2xl" text="primary-red" height="56" />
    }

    if (isError) {
        return <p className="text-xl text-center text-primary-red ">Something went wrong</p>
    }

    return (
        <div className="slider-container SliderArrow ">
            <Slider {...settings}>
                {data?.data?.map((slide:any, i:number) => (
                    <div key={i}>
                        <Image className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh]" src={slide?.path} alt="" width={500} height={500} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HeroSlider;

