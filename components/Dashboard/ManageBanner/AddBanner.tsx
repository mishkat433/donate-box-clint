"use client"

import { RiAddFill, RiAiGenerate } from "react-icons/ri";
import AddBannerFrom from "./AddBannerForm"

const AddBanner = () => {



    return (
        <div className="rounded-md animate-fade animate-once">
            <div className=" flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiAiGenerate className="" />
                    <h3>Add Banner</h3>
                </div>
                {/* <button className="p-1.5 primary-red-button flex items-center gap-1"><RiAddFill /> Create New</button> */}
            </div>

            <div className="shadow-md rounded-md">
                <AddBannerFrom />
            </div>

        </div>
    );
};

export default AddBanner;



// {
//     "showing":false
// }