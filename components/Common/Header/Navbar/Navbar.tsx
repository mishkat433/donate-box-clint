"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css"
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import profile from "../../../../public/assets/profile.png";
import Logo from "../../../ReusableComponent/Logo";
import { useEffect, useState } from "react";
import { getUserId, getUserInfo, isLoggedIn, removeUserInfo } from "../../../../services/auth.service";
import { authKey } from "../../../../constants/storageKey";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useLogOutMutation, useLoginUserDataQuery } from "../../../../redux/api/authApi";


const Navbar = () => {
  const currentPath = usePathname();

  const [logOut] = useLogOutMutation()
  const router = useRouter()

  const userInfo: any = getUserInfo()
  const { data, isLoading, isError }: any = useLoginUserDataQuery(getUserId(userInfo))


  const logOutHandle = async () => {
    await logOut({ data: "blank" })
    removeUserInfo(authKey);
    toast.success("Log out successful")
    router.push("/")
  };


  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  const menuItems =
    <>
      <li className="nav-link-style  ">  <Link href={"/"} className={` ${currentPath === "/" ? 'text-primary-red' : 'hover-underline-animation'}`}>Home</Link></li>
      <li className="nav-link-style ">  <Link href={"/cases"} className={` ${currentPath === "/cases" ? 'text-primary-red' : 'hover-underline-animation'}`}>Cases</Link></li>
      <li className="nav-link-style ">  <Link href={"/about"} className={` ${currentPath === "/about" ? 'text-primary-red' : 'hover-underline-animation'}`}>About</Link></li>
      <li className="nav-link-style ">  <Link href={"/contact"} className={` ${currentPath === "/contact" ? 'text-primary-red' : 'hover-underline-animation'}`}>Contact</Link></li>
      <li className="nav-link-style ">  <Link href={"/request/myRequests"} className={` ${currentPath === "/request/myRequests" ? 'text-primary-red' : 'hover-underline-animation'}`}>My Requests</Link></li>
      {/* <li className="nav-link-style "> <button className="button-transition primary-red-button py-1 px-2.5">Need Blood</button> </li> */}
      <li className="nav-link-style"> <Link href="/request" className={`${currentPath === '/request' ? 'bg-primary-red py-1.5 px-2.5 text-white-text rounded-md' : 'button-transition primary-red-button py-1 px-2.5 w-full'} `}>Need A Donner</Link> </li>
      <li className="nav-link-style"> <Link href="/donate" className={`${currentPath === '/donate' ? 'bg-primary-red py-1.5 px-2.5 text-white-text rounded-md' : 'button-transition primary-red-button py-1 px-2.5 w-full'} `}>Be A Donner</Link> </li>
      {isLoggedIn() && data?.data[0]?.role ?
        <li className=" text-sm relative ml-2 group ">
          <div className="avatar">
            <div className="w-12 mask mask-hexagon">
              {/* {userData?.profileImage !== null ? */}
              {/* <Image src={userData?.profileImage} width={100} height={100} alt="profile" /> */}
              <Image src={profile} width={80} height={80} alt="profile" />
            </div>
          </div>
          <div className={`flex flex-col absolute gap-[2px] z-20 -right-1 left-0 md:-left-20 md:-right-20 bg-primary-red text-center rounded-md md:w-14 lg:w-40 px-1 duration-300 overflow-hidden h-0  group-hover:h-[165px] `}>
            <div className="p-[1px] text-white-text duration-300  py-1">
              <p className="text-xs mt-1">({data?.data[0]?.role})</p>
              <strong className="">{data?.data[0]?.fullName}</strong>
              <p className="text-xs">{data?.data[0]?.phoneNumber}</p>

              <hr className="mt-1 bg-secondary-text" />
            </div>
            <Link href="/dashboard/manage-profile/my-profile" className="hover:bg-white-text  duration-300 rounded-t-md  py-1 text-white-text hover:text-secondary-text">Profile</Link>
            <Link href="/dashboard" className="hover:bg-white-text  duration-300  py-1 text-white-text hover:text-secondary-text">Dashboard</Link>
            <button onClick={() => logOutHandle()} className="hover:bg-white-text duration-300 rounded-b-md py-1 text-white-text hover:text-secondary-text">Log out</button>
          </div>
        </li>
        :
        <li className="nav-link-style"> <Link href="/login" className={`${currentPath === '/login' ? 'bg-primary-red py-1.5 px-2.5 text-white-text rounded-md' : 'button-transition primary-red-button py-1 px-2.5 w-full'} `}>Login/ Register</Link> </li>
      }
    </>

  return (
    <header className="font-mulish bg-[#ffffff] shadow-sm  mb-1" >
      <div className="container flex justify-between items-center mx-auto py-1">

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
      <div className="drawer drawer-start block md:hidden ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" onClick={() => setMobileMenu(!mobileMenu)} className="drawer-overlay"></label>
          <ul className="space-y-3 p-4 w-52 h-[100vh] text-center  bg-base-200 !z-[10000]">
            {menuItems}
          </ul>
        </div>
      </div>
      {/* responsive menu end  */}
    </header>


  );
};

export default Navbar;
