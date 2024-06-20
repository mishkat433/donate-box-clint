import Link from "next/link";
import { RiFacebookFill, RiYoutubeFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

const SocialMedia = () => {
    return (
        <>
            <Link href={'https://web.facebook.com/md.mishkat.433'} target="_blank"><RiFacebookFill className="hover:scale-110 duration-300" /></Link>
            <p className="opacity-60">|</p>
            <Link href={'https://www.linkedin.com/in/mohammad-borhan-uddin-miskat-b050b71bb/'} target="_blank"> <RiLinkedinFill className="hover:scale-110 duration-300" /></Link>
            <p className="opacity-60">|</p>
            <Link href={'/'} target="_blank"> <RiYoutubeFill className="hover:scale-110 duration-300" /></Link>
            <p className="opacity-60">|</p>
            <Link href={'/'} target="_blank"> <RiInstagramFill className="hover:scale-110 duration-300" /></Link>
        </>
    );
};

export default SocialMedia;