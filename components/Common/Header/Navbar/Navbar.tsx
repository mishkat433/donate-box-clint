"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css"
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import { useContext, useState } from "react";
import Logo from "../../../ReusableComponent/Logo";
import { AuthContex } from "../../../../contex.jsx/AuthStorage";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)
  const { loginUser }: any = useContext(AuthContex)


  const menuItems =
    <>
      <li className="nav-link-style  ">  <Link href={"/"} className="hover-underline-animation">Home</Link></li>
      <li className="nav-link-style ">  <Link href={"/"} className="hover-underline-animation">Cases</Link></li>
      <li className="nav-link-style ">  <Link href={"/"} className=" hover-underline-animation">About</Link></li>
      <li className="nav-link-style ">  <Link href={"/"} className=" hover-underline-animation">Contact</Link></li>
      {/* <li className="nav-link-style "> <button className="button-transition primary-red-button py-1 px-2.5">Need Blood</button> </li> */}
      <li className="nav-link-style"> <button className="button-transition primary-red-button py-1 px-2.5 w-full">Donate Now</button> </li>
      {loginUser?.id ?

        <div className=" text-sm relative ml-2 group ">
          <div className="avatar">
            <div className="w-12 mask mask-hexagon">
              <Image src={loginUser?.image} alt="profile" />
            </div>
          </div>
          <div className={`flex flex-col gap-[2px] absolute  bg-primary-red rounded-md md:w-14 lg:w-20 overflow-hidden duration-300 z-10 h-0 group-hover:h-[58px] `}>
            <button className="hover:bg-white-text hover:text-primary-text duration-300 rounded-t-lg py-1">{loginUser?.name}</button>
            <button className="hover:bg-white-text hover:text-primary-text duration-300 rounded-b-md py-1">{loginUser?.email}</button>
          </div>
        </div>
        :
        <li className="nav-link-style"> <Link href={"/authentication/login"} className=" button-transition primary-red-button py-1 px-2.5 w-full ">Login</Link> </li>
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
