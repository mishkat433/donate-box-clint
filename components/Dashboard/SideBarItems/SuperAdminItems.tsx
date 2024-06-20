import Link from "next/link";
import AdminItems from "./AdminItems";
import { RiArrowDownSFill, RiFolderUserLine } from "react-icons/ri";
import { manageAdminChild } from "./ChildItems";

const SuperAdminItems = () => {

  
    return (

        <div>
            <AdminItems />
            <ul>
                <li className="  duration-200 text-secondary-text rounded-md">
                    <div className="group relative w-auto " >
                        <div className="flex items-center ">
                            <RiFolderUserLine className="dashboard-icon-style " />
                            <span className="nav-text ml-5">Manage Admins</span>
                            <RiArrowDownSFill className="text-xl text-primary-red group-hover:rotate-180 duration-300" />
                        </div>
                        <ul className={` w-auto bg-border-color max-h-[150px] overflow-y-auto overflow-x-hidden rounded-md duration-300 h-0 group-hover:h-[120px] `}>
                            {manageAdminChild?.map((option) => (
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

export default SuperAdminItems;