"use client";
import Link from "next/link";
import { useState } from "react";
import { RiPhoneFill, RiMailOpenFill, RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill, RiArrowDownSFill } from "react-icons/ri";

const Hero = () => {
    const [language, setLanguage] = useState<string>('EN')
    const [dropdownHandle, setDropdownHandle] = useState<boolean>(false)
    return (
        <div className=" bg-primary-red text-white-text py-1.5 px-3 font-mulish hidden md:block">
            <div className="container mx-auto  flex justify-between text-sm">
                <div className="flex items-center  gap-4 ">
                    <div className="flex items-center gap-2.5">
                        <RiPhoneFill />
                        <h5>+8801852148xxxx</h5>
                    </div>
                    <p className="opacity-60">|</p>
                    <div className="flex items-center gap-2.5">
                        <RiMailOpenFill />
                        <h5>mishkat5826@gmail.com</h5>
                    </div>
                </div>
                <div className="text-lg flex items-center gap-2.5">
                    <Link href={'/'}><RiFacebookFill className="hover:scale-110 duration-300" /></Link>
                    <p className="opacity-60">|</p>
                    <Link href={'/'}> <RiTwitterFill className="hover:scale-110 duration-300" /></Link>
                    <p className="opacity-60">|</p>
                    <Link href={'/'}> <RiYoutubeFill className="hover:scale-110 duration-300" /></Link>
                    <p className="opacity-60">|</p>
                    <Link href={'/'}> <RiInstagramFill className="hover:scale-110 duration-300" /></Link>
                    <div className=" text-sm relative">
                        <button className="flex items-center " onClick={() => setDropdownHandle(!dropdownHandle)}>{language}<RiArrowDownSFill className="text-xl" /></button>
                        <div className={`flex flex-col gap-[2px] absolute  bg-primary-red rounded-md w-20 overflow-hidden duration-300 z-10 ${dropdownHandle ? "h-[58px]" : "h-0"}`}>
                            <button onClick={() => { setLanguage('EN'); setDropdownHandle(!dropdownHandle) }} className="hover:bg-white-text hover:text-primary-text duration-300 rounded-t-lg py-1">EN</button>
                            <button onClick={() => { setLanguage('BN'); setDropdownHandle(!dropdownHandle) }} className="hover:bg-white-text hover:text-primary-text duration-300 rounded-b-md py-1">BN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;