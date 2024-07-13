"use client"

import Image from "next/image";
import profile from "../../../public/assets/profile.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { RiFileCopyLine } from "react-icons/ri";
import "./DonateOrGet.css"


const DonateGetCard = ({ donner }) => {

    const copyToClipBoard = async copyMe => {

        try {
            await navigator.clipboard.writeText(copyMe);
            toast.success('Copied!')
        } catch (err) {
            toast.error('Failed to copy!')
        }

    };

    return (
        <div className="card text-primary-text border-1 border-white-text relative  rounded-full shadow-inner hoverEffect overflow-hidden">
            <div className=" flex items-center gap-3">
                <h2 title="Blood Group" className="text-[2.15rem] cursor-default font-bold h-24 flex justify-center items-center w-[6.3rem] rounded-full bg-primary-red p-2 text-white-text overflow-hidden">{donner?.bloodGroup}</h2>

                <div className="text-center">
                    <strong className="text-xl">{donner?.fullName}</strong>
                    {/* <div className="flex items-center gap-3 text-xl">
                    <p className="">{donner?.phoneNumber}</p>
                    <RiFileCopyLine className="hover:text-primary-red text-primary-text cursor-pointer duration-150" title="copy number" onClick={() => copyToClipBoard(donner?.phoneNumber)} />
                </div> */}
                    <address className="text-center text-wrap"> {donner?.district ? `${donner?.address}, ${donner?.area}, ${donner?.district}` : "address not found"}</address>
                </div>


            </div>


        </div>
    );
};

export default DonateGetCard; 