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
import UserItems from "./SideBarItems/UserItems";
import SuperAdminItems from "./SideBarItems/SuperAdminItems";

const Sidebar = ({ sideView, setSideView }: any) => {
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
        return <DotLoading height="h-[40vh]" />
    }

    const role = data?.data[0]?.role || "USER"

    return (
        <nav className={`main-menu  ${sideView ? 'w-[250px] md:w-[285px]' : 'w-[60px] hover:w-[285px]'} p-2 hover:overflow-hidden `}>
            <div className="h-full ">
                <div className=" mb-2  relative overflow-hidden shadow-sm">
                    <ul className="flex py-2 px-2.5">
                        <li>
                            <Link className="logo" href="/">
                                <Image src={logo} alt="logo" width={"25"} height={"25"} />
                                <h2 className="nav-text-logo text-lg font-bold">DONATE <span className="text-primary-red">BOX</span> </h2>
                            </Link>
                        </li>
                        <li className="relative right-10 md:right-1 top-1">
                            {sideView ?
                                <RiArrowRightCircleFill onClick={() => setSideView(false)} className="dashboard-icon-style text-primary-red" />
                                :
                                <RiArrowRightCircleLine onClick={() => setSideView(true)} className="dashboard-icon-style " />
                            }
                        </li>
                    </ul>
                </div>
                <div className="scrollbar text-secondary-text h-[82vh] mb-4" id="style-1">
                    {role === USER_ROLE.USER && <UserItems />}
                    {role === USER_ROLE.ADMIN && <AdminItems />}
                    {role === USER_ROLE.SUPER_ADMIN && <SuperAdminItems />}
                </div>


            </div>
            <div className=" border-1 rounded border-primary-red text-primary-red text-start flex  hover:bg-primary-red duration-200 hover:text-white-text" id="style-1">
                <ul>
                    <li className="py-2 px-2.5">
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