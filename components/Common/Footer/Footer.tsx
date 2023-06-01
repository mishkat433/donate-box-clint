import Logo from "@/components/ReusableComponent/Logo";
import Link from "next/link";
import { RiPhoneFill, RiMailOpenFill, RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill, RiArrowDownSFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100 bg-primary-red text-white-text font-mulish">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Logo donate={'text-white-text'} box={'text-primary-text'} />
                    <p className="text-sm w-full lg:w-4/5 mt-2.5">Volunteer opportunities include supporting blood donations and delivering much-needed services to your community.</p>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50 font-bold">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Integrations</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50 font-bold">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50 font-bold">Developers </h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50 font-bold">Social media</div>
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
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">Copyright &copy; All rights reserved by Mishkat - {new Date().getFullYear()}</div>
        </footer >
    );
};

export default Footer;