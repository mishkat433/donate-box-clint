"use client"

import { RiChatForwardFill, RiMailAddFill, RiPhoneFill } from "react-icons/ri";
import Contact from "../../../components/Contact/Contact";

const page = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex flex-col md:flex-row  gap-4 justify-between items-center my-5 md:my-14 p-2">
                <div className="w-full md:w-1/2  text-primary-text">
                    <h1 className="text-primary-red text-4xl lg:text-8xl font-bold mb-4 text-center font-oswald">Contact Us</h1>
                    <p className="text-justify text-sm md:text-base ">An effective contact page is crucial for a blood donation website as it provides potential donors and partners with a convenient way to reach out. By offering clear contact options,
                        an easy-to-use form, and additional information like FAQs and social media links, you can ensure a smooth communication process that helps build trust and engagement with your audience.</p>

                    <div className="flex justify-center ">
                        <div className="mt-10 space-y-3 text-sm md:text-base">
                            <address className="flex items-center gap-2 "><RiChatForwardFill className="text-xl" />South Mehernama, Pekua, Cox&apos;s Bazar.</address>
                            <p className="flex items-center gap-2 "><RiPhoneFill className="text-xl" />+8801925015826</p>
                            <p className="flex items-center gap-2 "><RiMailAddFill className="text-xl" />mishkat5826@gmail.com</p>
                        </div>
                    </div>
                    <p className=" mt-8 text-sm text-justify"><i className="font-semibold">&#91;Note : </i>Your privacy is important to us. We will not share your information with third parties, and it will only be used to respond to your inquiry.&#93;</p>
                </div>
                <div className="w-full md:w-1/2 "><Contact /></div>
            </div>
        </div>
    );
};

export default page;