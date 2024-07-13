"use client"

import Image from "next/image";
import loginSvg from "../../public/assets/login.svg"
import { ReactElement, ReactNode, useState } from "react";
import './Authentication.css';




const AuthPage = ({ children }: { children?: ReactElement | ReactNode; }) => {

    return (
        <div className="w-full py-3 md:py-4 flex justify-center items-center container mx-auto gap-4 h-full md:min-h-[90vh] animate-fade-down animate-once">
            <div className=" w-full md:w-4/5 rounded-md flex flex-col md:flex-row justify-start items-center md:p-4 shadow-lg p-4">
                <div className="w-full hidden md:block">
                    <Image src={loginSvg} height="600" width="600" alt="login image" className="animate-fade-right animate-once" />
                </div>
                <div className="w-full px-0 md:px-2">
                    {children}
                </div>
            </div>
        </div >
    );
};

export default AuthPage;