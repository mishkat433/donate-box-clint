"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css"
import DotLoading from "../../ReusableComponent/DotLoading";
import { useBannersQuery } from "../../../redux/api/bannerApi";
import Slider from "react-slick";
import Image from "next/image";
import { heroSliderSettings } from "../../../utils/slickSliderSetting";


const HeroSlider = () => {

    const { data, isLoading, isError }: any = useBannersQuery({ undefined });




    if (isLoading) {
        return <DotLoading size="2xl" text="primary-red" height="h-[50vh]" />
    }

    if (isError) {
        return <p className="text-xl text-center text-primary-red ">Something went wrong</p>
    }

    return (
        <div className="slider-container SliderArrow ">
            <Slider {...heroSliderSettings}>
                {data?.data?.map((slide: any, i: number) => (
                    slide.showing && (
                        <div key={i}>
                            <Image
                                className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh]"
                                src={slide?.path}
                                alt=""
                                width={500}
                                height={500}
                            />
                        </div>
                    )
                ))}
            </Slider>
        </div>
    )
}

export default HeroSlider;

