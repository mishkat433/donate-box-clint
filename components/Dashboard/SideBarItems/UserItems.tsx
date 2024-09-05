import { RiFolderUserLine } from "react-icons/ri";
import CommonItems from "./CommonItems";
import Link from "next/link";

const UserItems = () => {
    return (
        <div>
            <CommonItems />
            <ul>
                <li className={` hover:bg-primary-red duration-200 py-2 px-2.5 hover:text-white-text rounded-md mb-1 `}>
                    <Link className="" href="/dashboard/my-activity">
                        <RiFolderUserLine className="dashboard-icon-style " />
                        <span className="nav-text">My Activity</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default UserItems;