"use client"

import { RiUserAddLine, RiUserSmileFill } from "react-icons/ri";
import BloodDonner from "../../../DonateNow/BloodDonner";


const AddUser = () => {


    return (
        <div className="">
            <div className=" flex justify-between items-center gap-4 mb-4">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiUserSmileFill className="text-primary-red" />
                    <h3>Add User</h3>
                </div>
                {/* <label htmlFor="createUser" className="py-1.5 px-2 cursor-pointer primary-red-button flex items-center gap-1"><RiUserAddLine />Create New Donner</label> */}
            </div>

            <div className="w-full">
              <BloodDonner heading={false} />
            </div>
        </div>
    );
};

export default AddUser;