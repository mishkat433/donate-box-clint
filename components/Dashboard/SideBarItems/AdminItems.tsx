import Link from "next/link";
import { RiArrowDownSFill, RiSlideshow3Line, RiUserSettingsLine } from "react-icons/ri";
import CommonItems from "./CommonItems";
import { manageUserChild,manageBannerChild } from "./ChildItems";
import ItemsHead from "./ItemsHead";
import { usePathname } from "next/navigation";

const AdminItems = () => {
const path=usePathname()
const slicePath=path?.split("/")

    return (
        <div>
            <CommonItems />
            <ul className=" ">
                <li className="  duration-200 text-secondary-text rounded-md group relative w-auto ">
                    <div className={`duration-200 text-secondary-text relative rounded-md mb-1 hover:bg-primary-red hover:text-white-text ${path?.includes('manage-user') && "bg-primary-red text-white-text" } `}>
                        <span className={`flex items-center cursor-pointer   rounded-t-md py-2 px-3`}>
                            <RiUserSettingsLine className="dashboard-icon-style " />
                            <ItemsHead header="Manage Users"/>
                        </span>
                        <ul className={` w-full bg-border-color withoutPadding text-primary-text max-h-[150px] overflow-y-auto overflow-x-hidden rounded-b-md duration-300 h-0 group-hover:h-[100px] `}>
                            {manageUserChild?.map((option) => (
                                <li key={option.label} className={` py-1 px-3 cursor-pointer mt-1 duration-200 hover:bg-primary-red hover:text-white-text ${slicePath?.includes(option?.link) && 'bg-primary-red text-white-text'} `} >
                                    <Link href={`/dashboard/manage-user/${option?.link}`} className={`py-1`}>
                                        <span className="nav-text">{option?.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
                <li className="duration-200 text-secondary-text rounded-md group relative w-auto ">
                    <div className={`duration-200 text-secondary-text relative rounded-md mb-1 hover:bg-primary-red hover:text-white-text ${path?.includes('manage-banner') && "bg-primary-red text-white-text" } `}>
                        <span className={`flex items-center cursor-pointer rounded-t-md py-2 px-3`}>
                            <RiSlideshow3Line className="dashboard-icon-style" />
                            <ItemsHead header="Banners"/>
                        </span>
                        <ul className={` w-full bg-border-color withoutPadding text-primary-text max-h-[150px] overflow-y-auto overflow-x-hidden rounded-b-md duration-300 h-0 group-hover:h-[67px] `}>
                            {manageBannerChild?.map((option) => (
                                <li key={option.label} className={` py-1 px-3 cursor-pointer mt-1 duration-200 hover:bg-primary-red hover:text-white-text ${slicePath?.includes(option?.link) && 'bg-primary-red text-white-text'} `} >
                                    <Link href={`/dashboard/manage-banner/${option?.link}`} className="py-1">
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

export default AdminItems;
