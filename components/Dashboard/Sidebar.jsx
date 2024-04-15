"use client"

import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthStorage';
import { RiErrorWarningLine, RiLogoutCircleLine, RiSettings4Line, RiUserHeartLine, RiSideBarLine, RiSideBarFill } from 'react-icons/ri';

const Sidebar = () => {

    const { logOutHandle } = useContext(AuthContext)

    return (
        <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100 overflow-y-scroll custom-scroll sticky top-0 text-primary-text">

            <div className="divide-y divide-gray-700">
                <div className='flex justify-end'>
                    <p>comming soon</p>
                    <RiSideBarLine className="text-xl" />
                    <RiSideBarFill className="text-xl" />
                </div>
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="dark:bg-gray-800 dark:text-gray-50 ">
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md duration-300 hover:text-primary-red">
                            <RiUserHeartLine className="text-xl" />
                            <span>All Donner</span>
                        </a>
                    </li>

                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md duration-300 hover:text-primary-red">
                            <RiErrorWarningLine className="text-xl" />
                            <span>Banned Donner</span>
                        </a>
                    </li>
                </ul>
                <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md duration-300 hover:text-primary-red">
                            <RiSettings4Line className="text-xl" />
                            <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md duration-300 hover:text-primary-red">
                            <RiLogoutCircleLine className="text-xl" />
                            <span onClick={() => logOutHandle()}>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;