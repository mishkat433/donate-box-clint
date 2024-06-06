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
        <div className="card text-primary-text border-1 border-white-text relative hoverEffect">
            <div className="card-body -my-3 items-center ">
                {/* <Image src={profile} alt="profile" height={70} width={70} /> */}
                <h2 className="text-4xl font-bold h-16 flex justify-center items-center w-16 rounded-full bg-primary-red p-2 text-white-text">{donner?.bloodGroup}</h2>
                <strong className="card-title">{donner?.fullName}</strong>
                <div className="flex items-center gap-3 text-xl">
                    <p className="">{donner?.phoneNumber}</p>
                    <RiFileCopyLine className="hover:text-primary-red text-primary-text cursor-pointer duration-150" title="copy number" onClick={() => copyToClipBoard(donner?.phoneNumber)} />
                </div>
                <address className="text-center"> {donner?.address ? donner?.address : "address not found"}</address>
            </div>
        </div>
    );
};

export default DonateGetCard; 