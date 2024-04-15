"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css"
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import { useContext, useState } from "react";
import Logo from "../../../ReusableComponent/Logo";
import { AuthContext } from "../../../../context/AuthStorage";
import profile from "../../../../public/assets/profile.png";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    const { loginUser, logOutHandle }: any = useContext(AuthContext)


    const menuItems =
        <>
            <li className="nav-link-style  ">  <Link href={"/"} className="hover-underline-animation">Home</Link></li>
            <li className="nav-link-style ">  <Link href={"/cases"} className="hover-underline-animation">Cases</Link></li>
            <li className="nav-link-style ">  <Link href={"/about"} className=" hover-underline-animation">About</Link></li>
            <li className="nav-link-style ">  <Link href={"/contact"} className=" hover-underline-animation">Contact</Link></li>
            {/* <li className="nav-link-style "> <button className="AuthContext primary-red-button py-1 px-2.5">Need Blood</button> </li> */}
            <li className="nav-link-style"> <Link href="/donate" className="AuthContext primary-red-button py-1 px-2.5 w-full">Donate Now</Link> </li>
            {loginUser?.id ?

                <div className=" text-sm relative ml-2 group ">
                    <div className="avatar">
                        <div className="w-12 mask mask-hexagon">
                            {loginUser?.image !== null ? <Image src={loginUser?.image} width={100} height={100} alt="profile" />
                                : <Image src={profile} width={100} height={100} alt="profile" />}
                        </div>
                    </div>
                    <div className={`flex flex-col gap-[2px] absolute -right-3 bg-primary-red text-center  rounded-md md:w-14 lg:w-fit px-1 overflow-hidden duration-300  h-0 group-hover:h-[150px] `}>
                        <div className="p-[1px] text-white-text duration-300  py-1">
                            <strong className="">{loginUser?.name}</strong>
                            <p className="text-xs">{loginUser?.email}</p>
                            <hr className="mt-1 bg-secondary-text" />
                        </div>
                        <Link href="/profile" className="hover:bg-white-text  duration-300 rounded-t-md  py-1 text-white-text hover:text-secondary-text">Profile</Link>
                        <Link href="/dashboard" className="hover:bg-white-text  duration-300  py-1 text-white-text hover:text-secondary-text">Dashboard</Link>
                        <button onClick={() => logOutHandle()} className="hover:bg-white-text duration-300 rounded-b-md py-1 text-white-text hover:text-secondary-text">Log out</button>
                    </div>
                </div>
                :
                <li className="nav-link-style"> <Link href={"/authentication/login"} className=" AuthContext primary-red-button py-1 px-2.5 w-full ">Login</Link> </li>
            }

        </>

    return (
        <header className="font-mulish bg-[#ffffff] drop-shadow-sm  z-50" >
            <div className="container flex justify-between items-center mx-auto py-2">

                <Logo donate={'text-primary-red'} box={'text-primary-text'} />

                <ul className="items-center hidden space-x-4 md:flex">
                    {menuItems}
                </ul>

                <button className="flex justify-end items-center p-4 md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>

                    <label htmlFor="my-drawer-4" className="">
                        {mobileMenu ?
                            <RiCloseFill className="text-3xl" /> :

                            <RiMenu2Fill className="text-3xl" />
                        }
                    </label>
                </button>
            </div>


            {/* responsive menu start  */}
            <div className="drawer drawer-end absolute block md:hidden z-[999999]">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" onClick={() => setMobileMenu(!mobileMenu)} className="drawer-overlay"></label>
                    <ul className="space-y-3 p-4 w-52 h-[100vh] text-center  bg-base-200 ">
                        {menuItems}
                    </ul>
                </div>
            </div>
            {/* responsive menu end  */}
        </header>
    );
};

export default Navbar;
