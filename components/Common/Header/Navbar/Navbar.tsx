"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/BloodLogo2.png"
import "./Navbar.css"
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
// import React, { useState } from 'react';
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  const menuItems =
    <>
      <li className="nav-link-style ">  <Link href={"/"} className="hover-underline-animation">Home</Link></li>
      <li className="nav-link-style ">  <Link href={"/"} className="hover-underline-animation">Cases</Link></li>
      <li className="nav-link-style ">  <Link href={"/"} className=" hover-underline-animation">About</Link></li>
      <li className="nav-link-style ">  <Link href={"/"} className=" hover-underline-animation">Contact</Link></li>
      {/* <li className="nav-link-style "> <button className="button-transition primary-red-button py-1 px-2.5">Need Blood</button> </li> */}
      <li className="nav-link-style"> <button className="button-transition primary-red-button py-1 px-2.5 my-2  ">Donate Now</button> </li>
      <li className="nav-link-style"> <button className=" button-transition primary-red-button py-1 px-2.5 my-2 ">Login</button> </li>
    </>

  return (
    <header className="font-mulish bg-[#ffffff] shadow-md" >
      <div className="container flex justify-between items-center mx-auto py-2">
        <Link href={"/"} className="flex items-center gap-2 pl-2 md:pl-0">
          <Image src={logo} alt="not found" className=" w-[35px]" />
          <h1 className="text-primary-red font-bold text-2xl">Donate <span className="text-primary-text">Box</span></h1>
        </Link>

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


      <div className="drawer drawer-end absolute block md:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" onClick={() => setMobileMenu(!mobileMenu)} className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 h-[94vh]  bg-base-200 ">
            {menuItems}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
