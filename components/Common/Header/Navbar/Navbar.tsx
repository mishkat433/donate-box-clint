"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css"
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import profile from "../../../../public/assets/profile.png";
import Logo from "../../../ReusableComponent/Logo";
import { useEffect, useState } from "react";
import { useUserQuery } from "../../../../redux/api/userApi";
import { getUserInfo, isLoggedIn, removeUserInfo } from "../../../../services/auth.service";
import { authKey } from "../../../../constants/storageKey";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const [logInUserData, setLogInUserData] = useState()

  const loginCheck = isLoggedIn()

  let id: string
  const userInfo: any = getUserInfo()

  if (userInfo?.userId) { id = userInfo.userId }
  else { id = userInfo.adminId }

  const router = useRouter()

  const logOut = (): void => {
    removeUserInfo(authKey);
    router.push("/")
  };

  const { data, isLoading }: any = useUserQuery(id)

  useEffect(() => {
    setLogInUserData(data)
  }, [data, loginCheck, userInfo])



  const userData = data?.donner ? data?.donner[0] : {}

  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  const menuItems =
    <>
      <li className="nav-link-style  ">  <Link href={"/"} className="hover-underline-animation">Home</Link></li>
      <li className="nav-link-style ">  <Link href={"/cases"} className="hover-underline-animation">Cases</Link></li>
      <li className="nav-link-style ">  <Link href={"/about"} className=" hover-underline-animation">About</Link></li>
      <li className="nav-link-style ">  <Link href={"/contact"} className=" hover-underline-animation">Contact</Link></li>
      {/* <li className="nav-link-style "> <button className="button-transition primary-red-button py-1 px-2.5">Need Blood</button> </li> */}
      <li className="nav-link-style"> <Link href="/donate" className="button-transition primary-red-button py-1 px-2.5 w-full">Donate Now</Link> </li>
      {isLoggedIn() ?
        // <li className=" text-sm relative ml-2 group ">
        //   <div className="avatar">
        //     <div className="w-12 mask mask-hexagon">
        //       {/* {userData?.profileImage !== null ? */}
        //       {/* <Image src={userData?.profileImage} width={100} height={100} alt="profile" /> */}
        //       <Image src={profile} width={100} height={100} alt="profile" />
        //     </div>
        //   </div>
        //   <div className={`flex flex-col absolute gap-[2px] z-10  -right-3 bg-primary-red text-center rounded-md md:w-14 lg:w-40 px-1 duration-300 overflow-hidden h-0 group-hover:h-[165px] `}>
        //     <div className="p-[1px] text-white-text duration-300  py-1">
        //       <strong className="">{userData?.fullName}</strong>
        //       <p className="text-xs">{userData?.phoneNumber}</p>
        //       <p className="text-xs">({userData?.role})</p>
        //       <hr className="mt-1 bg-secondary-text" />
        //     </div>
        //     <Link href="/profile" className="hover:bg-white-text  duration-300 rounded-t-md  py-1 text-white-text hover:text-secondary-text">Profile</Link>
        //     <Link href="/dashboard" className="hover:bg-white-text  duration-300  py-1 text-white-text hover:text-secondary-text">Dashboard</Link>
        //     <button onClick={() => logOut()} className="hover:bg-white-text duration-300 rounded-b-md py-1 text-white-text hover:text-secondary-text">Log out</button>
        //   </div>
        // </li>
        <li onClick={() => logOut()} className="hover:bg-white-text duration-300 rounded-b-md py-1 cursor-pointer hover:text-secondary-text">Log out</li>
        :
        <li className="nav-link-style"> <Link href={"/login"} className=" button-transition primary-red-button py-1 px-2.5 w-full ">Login</Link> </li>
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
