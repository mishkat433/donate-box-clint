import { RiFolderUserLine } from "react-icons/ri";
import CommonItems from "./CommonItems";
import Link from "next/link";

const UserItems = () => {
    return (
        <div>
        <CommonItems />
        <div className="scrollbar text-secondary-text" id="style-1">
            <ul>
                <li className=" hover:bg-primary-red duration-200 hover:text-white-text rounded-md" >
                    <Link href="/dashboard/all-users" className="py-1">
                        <RiFolderUserLine className="dashboard-icon-style " />
                        <span className="nav-text">my activity</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default UserItems;