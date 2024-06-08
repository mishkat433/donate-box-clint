"use client"

import { RiArrowRightCircleFill, RiArrowRightCircleLine, RiHomeGearLine, RiLogoutCircleLine, RiProfileLine } from "react-icons/ri";
import "./sidebar.css"
import Link from "next/link";
import logo from "../../public/assets/BloodLogo2.png"
import Image from "next/image";
import { useState } from "react";
import { getUserInfo, isLoggedIn, removeUserInfo } from "../../services/auth.service";
import { useRouter } from "next/navigation";
import AdminItems from "./SideBarItems/AdminItems";
import { USER_ROLE } from "../../constants/role";
import { useLogOutMutation, useLoginUserDataQuery } from "../../redux/api/authApi";
import { authKey } from "../../constants/storageKey";
import toast from "react-hot-toast";
import DotLoading from "../ReusableComponent/DotLoading";

const Sidebar = ({sideView, setSideView}:any) => {
    const [logOut] = useLogOutMutation()
    const userInfo: any = getUserInfo()
    const router = useRouter()
    const loginCheck = isLoggedIn()

    let id: string


    if (userInfo?.userId) {
        id = userInfo.userId
    } else {
        id = userInfo.adminId
    }
    const { data, isLoading, isError }: any = useLoginUserDataQuery(id)

    const logOutHandle = async () => {
        await logOut({ data: "blank" })
        removeUserInfo(authKey);
        toast.success("Log out successful")
        router.push("/")
    };
    if (isLoading) {
        return <DotLoading />
    }

   const role = data?.data[0].role || "USER"

    return (
        <nav className={`main-menu h-screen ${sideView ? 'w-[285px]' : 'w-[60px] hover:w-[285px]'} p-2 hover:overflow-hidden `}>
            <div className="h-[90vh] ">
                <div className=" mb-2  relative overflow-hidden shadow-sm">
                    <ul className="flex">
                        <li>
                            <Link className="logo" href="/">
                                <Image src={logo} alt="logo" width={"25"} height={"25"} />
                                <h2 className="nav-text-logo text-lg font-bold">DONATE <span className="text-primary-red">BOX</span> </h2>
                            </Link>
                        </li>
                        <li className="relative right-12 top-1">
                            {sideView ?
                                <RiArrowRightCircleFill onClick={() => setSideView(false)} className="dashboard-icon-style text-primary-red" />
                                :
                                <RiArrowRightCircleLine onClick={() => setSideView(true)} className="dashboard-icon-style " />
                            }
                        </li>
                    </ul>
                       <ul className="text-center text-xs">
                       <li>
                           <h4>{data?.data[0]?.role }</h4>
                           <h4 className="text-lg font-bold"> {data?.data[0]?.fullName }</h4>
                           <h4> {data?.data[0]?.phoneNumber}</h4>
                        </li>
                       </ul>
                </div>

                {role === USER_ROLE.ADMIN && <AdminItems />}


            </div>
            <div className=" border-1 rounded border-primary-red text-primary-red text-start flex justify-between hover:bg-primary-red duration-200 hover:text-white-text" id="style-1">
                <ul>
                    <li>
                        <button className="flex" onClick={() => logOutHandle()}>
                            <RiLogoutCircleLine className="dashboard-icon-style" />
                            <span className="nav-text">Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>

        </nav >
    );
};

export default Sidebar;