import Link from "next/link";
import {  RiHomeOfficeLine, RiFolderUserLine, RiArrowDownSFill, RiProfileLine } from "react-icons/ri";
import { manageProfileChild } from "./ChildItems";

const CommonItems = () => {
    return (
        <div className="scrollbar text-secondary-text" id="style-1">
            <ul>
                <li className=" hover:bg-primary-red duration-200 hover:text-white-text rounded-md">
                    <Link className="" href="/dashboard">
                        <RiHomeOfficeLine className="dashboard-icon-style " />
                        <span className="nav-text">Dashboard</span>
                    </Link>
                </li>
                <li className="duration-200 text-secondary-text rounded-md ">
                    <div className="group relative w-full " >
                        <div className="flex items-center cursor-pointer hover:text-white-text hover:bg-primary-red rounded-t-md p-2">
                            <RiProfileLine className="dashboard-icon-style " />
                            <span className="nav-text ml-5">Profile</span>
                            <RiArrowDownSFill className="text-xl  group-hover:rotate-180 duration-300" />
                        </div>
                        <ul className={` w-auto bg-border-color  max-h-[150px] overflow-y-auto overflow-x-hidden rounded-b-md duration-300 h-0 group-hover:h-[120px] `}>
                            {manageProfileChild?.map((option) => (
                                <li key={option.label} className={` py-1.5 cursor-pointer duration-200 hover:bg-primary-red hover:text-white-text rounded-md`} >
                                    <Link href={`/dashboard/${option?.link}`} className="py-1">
                                        <span className="nav-text">{option?.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CommonItems;