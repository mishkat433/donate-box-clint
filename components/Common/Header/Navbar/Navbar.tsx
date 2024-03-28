"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css"
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
// import React, { useState } from 'react';
import { useState } from "react";
import Logo from "../../../ReusableComponent/Logo";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)


  const menuItems =
    <>
      <li className="nav-link-style  ">  <Link href={"/"} className="hover-underline-animation">Home</Link></li>
      <li className="nav-link-style ">  <Link href={"/"} className="hover-underline-animation">Cases</Link></li>
      <li className="nav-link-style ">  <Link href={"/"} className=" hover-underline-animation">About</Link></li>
      <li className="nav-link-style ">  <Link href={"/"} className=" hover-underline-animation">Contact</Link></li>
      {/* <li className="nav-link-style "> <button className="button-transition primary-red-button py-1 px-2.5">Need Blood</button> </li> */}
      <li className="nav-link-style"> <button className="button-transition primary-red-button py-1 px-2.5 w-full">Donate Now</button> </li>
      <li className="nav-link-style"> <button className=" button-transition primary-red-button py-1 px-2.5 w-full ">Login</button> </li>
    </>

  return (
    <header className="font-mulish bg-[#ffffff] drop-shadow-sm  fixed-content z-50" >
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


      {/* responsive munu  */}
      <div className="drawer drawer-end absolute block md:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" onClick={() => setMobileMenu(!mobileMenu)} className="drawer-overlay"></label>
          <ul className="space-y-3 p-4 w-52 h-[100vh] text-center  bg-base-200 ">
            {menuItems}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
