import Link from "next/link";
import { RiArrowDownSFill, RiFolderUserLine, RiLogoutCircleLine, RiProfileLine } from "react-icons/ri";
import CommonItems from "./CommonItems";
import { manageUserChild } from "./ChildItems";

const AdminItems = () => {
    return (
        <div>
            <CommonItems />
            <div className="scrollbar text-secondary-text" id="style-1">
                <ul>
                    <li className="  duration-200 text-secondary-text rounded-md">
                        <div className="group relative w-auto " >
                            <div className="flex items-center cursor-pointer ">
                                <RiFolderUserLine className="dashboard-icon-style " />
                                <span className="nav-text ml-5">Manage Users</span>
                                <RiArrowDownSFill className="text-xl text-primary-red group-hover:rotate-180 duration-300" />
                            </div>
                            <ul className={` w-auto bg-border-color  max-h-[150px] overflow-y-auto overflow-x-hidden rounded-md duration-300 h-0 group-hover:h-[120px] `}>
                                {manageUserChild?.map((option) => (
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
        </div>
    );
};

export default AdminItems;
