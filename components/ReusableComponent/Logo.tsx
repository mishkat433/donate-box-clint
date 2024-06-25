import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/assets/BloodLogo2.png"

type styleType = {
    donate: string,
    box: string
}

const Logo = ({ donate, box }: styleType) => {
    return (
        <Link href={"/"} className="flex items-center gap-2 pl-2 md:pl-0">
            <Image src={logo} alt="not found" className="w-[35px]" />
            <h1 className={` font-bold text-2xl ${donate}`}>Donate <span className={` ${box}`}>Box</span></h1>
        </Link>
    );
};

export default Logo;