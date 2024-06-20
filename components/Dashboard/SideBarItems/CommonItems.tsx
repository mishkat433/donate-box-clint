"use client"

import Link from "next/link";
import { RiHomeOfficeLine, RiArrowDownSFill, RiProfileLine } from "react-icons/ri";
import { manageProfileChild } from "./ChildItems";
import { usePathname } from "next/navigation";

const CommonItems = () => {
    const path = usePathname()

    return (
        <ul>
            <li className={` hover:bg-primary-red duration-200 py-2 px-2.5 hover:text-white-text rounded-md mb-1 ${path.endsWith("dashboard") && "bg-primary-red text-white-text"}`}>
                <Link className="" href="/dashboard">
                    <RiHomeOfficeLine className="dashboard-icon-style " />
                    <span className="nav-text">Dashboard Home</span>
                </Link>
            </li>
            <li className="  duration-200 text-secondary-text rounded-md group relative w-auto ">
                <li className={`duration-200 text-secondary-text relative rounded-md mb-1 hover:bg-primary-red hover:text-white-text `}>
                    <span className={`flex items-center cursor-pointer   rounded-t-md py-2 px-3`}>
                        <RiProfileLine className="dashboard-icon-style " />
                        <span className="nav-text ml-5">Manage Profile</span>
                        <RiArrowDownSFill className="text-xl  group-hover:rotate-180 duration-300" />
                    </span>
                    <ul className={` w-full bg-border-color withoutPadding text-primary-text max-h-[150px] overflow-y-auto overflow-x-hidden rounded-b-md duration-300 h-0 group-hover:h-[100px] `}>
                        {manageProfileChild?.map((option) => (
                            <li key={option.label} className={` py-1 px-3 cursor-pointer mt-1 duration-200 hover:bg-primary-red hover:text-white-text `} >
                                <Link href={`/dashboard/${option?.link}`} className="py-1">
                                    <span className="nav-text">{option?.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </li>
        </ul>
    );
};

export default CommonItems;