"use client";
import Link from "next/link";
import { useState } from "react";
import { RiPhoneFill, RiMailOpenFill, RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill, RiArrowDownSFill, RiLinkedinFill } from "react-icons/ri";
import SocialMedia from "../../../ReusableComponent/SocialMedia"

const Hero = () => {
    const [language, setLanguage] = useState('EN')
    return (
        <div className=" bg-primary-red text-white-text py-1.5 px-3 font-mulish hidden md:block">
            <div className="container mx-auto  flex justify-between text-sm">
                <div className="flex items-center  gap-4 ">
                    <div className="flex items-center gap-2.5">
                        <RiPhoneFill />
                        <h5>+8801925015826</h5>
                    </div>
                    <p className="opacity-60">|</p>
                    <div className="flex items-center gap-2.5">
                        <RiMailOpenFill />
                        <h5>mishkat5826@gmail.com</h5>
                    </div>
                </div>
                <div className="text-lg flex items-center gap-2.5">
                    <SocialMedia></SocialMedia>
                    <div className=" text-sm relative ml-2 group">
                        <button className="flex items-center " >{language}<RiArrowDownSFill className="text-xl" /></button>
                        <div className={`flex flex-col gap-[2px] absolute  bg-primary-red rounded-md md:w-14 lg:w-20 overflow-hidden duration-300 z-10 h-0 group-hover:h-[58px] `}>
                            <button onClick={() => { setLanguage('EN') }} className="hover:bg-white-text hover:text-primary-text duration-300 rounded-t-lg py-1">EN</button>
                            <button onClick={() => { setLanguage('BN') }} className="hover:bg-white-text hover:text-primary-text duration-300 rounded-b-md py-1">BN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

// onClick={() => setDropdownHandle(!dropdownHandle)}
// ${dropdownHandle ? "h-[58px]" : "h-0"}