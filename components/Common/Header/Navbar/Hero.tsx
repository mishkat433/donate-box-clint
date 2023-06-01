import Link from "next/link";
import { RiPhoneFill, RiMailOpenFill, RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";

const Hero = () => {
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
                </div>
            </div>
        </div>
    );
};

export default Hero;