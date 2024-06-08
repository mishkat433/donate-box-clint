import Link from "next/link";
import { RiLockPasswordLine, RiHomeOfficeLine, RiProfileLine } from "react-icons/ri";

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
                        <li className=" hover:bg-primary-red duration-200 hover:text-white-text rounded-md">
                            <Link className="" href="/dashboard">
                                <RiProfileLine className="dashboard-icon-style " />
                                <span className="nav-text">My Profile</span>
                            </Link>
                        </li>
                        <li className=" hover:bg-primary-red duration-200 hover:text-white-text rounded-md">
                            <Link  className="" href="/dashboard">
                                <RiLockPasswordLine className="dashboard-icon-style " />
                                <span className="nav-text">Change Password</span>
                            </Link>
                        </li>
                    </ul>
                </div>
    );
};

export default CommonItems;