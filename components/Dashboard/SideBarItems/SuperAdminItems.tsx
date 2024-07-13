import Link from "next/link";
import AdminItems from "./AdminItems";
import {  RiContactsLine } from "react-icons/ri";
import { manageAdminChild } from "./ChildItems";
import ItemsHead from "./ItemsHead";
import { usePathname } from "next/navigation";


const SuperAdminItems = () => {
    const path=usePathname()
    const slicePath=path?.split("/")

    return (

        <div>
            <AdminItems />
            <ul>
                <li className="  duration-200 text-secondary-text rounded-md group relative w-auto ">
                    <div className={`duration-200 text-secondary-text relative rounded-md mb-1 hover:bg-primary-red hover:text-white-text ${path?.includes('manage-admins') && "bg-primary-red text-white-text" } `}>
                        <span className={`flex items-center cursor-pointer rounded-t-md py-2 px-3`}>
                            <RiContactsLine  className="dashboard-icon-style" />
                           <ItemsHead header="Manage Admins" />
                        </span>
                        <ul className={` w-full bg-border-color withoutPadding text-primary-text max-h-[150px] overflow-y-auto overflow-x-hidden rounded-b-md duration-300 h-0 group-hover:h-[100px] `}>
                            {manageAdminChild?.map((option) => (
                                <li key={option.label} className={` py-1 px-3 cursor-pointer mt-1 duration-200 hover:bg-primary-red hover:text-white-text ${slicePath?.includes(option?.link) && 'bg-primary-red text-white-text'} `} >
                                    <Link href={`/dashboard/manage-admin/${option?.link}`} className="py-1">
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