"use client"
import HomeSectionHead from "../../ReusableComponent/HomeSectionHead";
// import UnderDevelopment from "../../ReusableComponent/UnderDevelopement";
import Slider from "react-slick";
import "./News.css"
import Image from "next/image";
import NewsCard from "./NewsCard";
import { newsSettings } from "../../../utils/slickSliderSetting";


const News = () => {



    const images = [
        'https://www.w3schools.com/css/img_5terre.jpg',
        'https://b3307141.smushcdn.com/3307141/wp-content/uploads/2023/11/WF1743791_DSC04384-1024x683.jpg?lossy=2&strip=1&webp=1',
        'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
        'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg',
        'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
        'https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg',
    ];

    return (
        <div className="p-default mb-default ">
            <HomeSectionHead name='Top News' />
            <div className="">
                <div className="slider-container">
                    <Slider {...newsSettings} >
                        {images.map((image: any, index: number) => (
                            <NewsCard key={index} image={image} />
                        ))}

                    </Slider>
                </div>
            </div>
        </div>
    );
};
export default News;