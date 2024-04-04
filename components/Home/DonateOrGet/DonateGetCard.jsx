"use client"

import Image from "next/image";
import profile from "../../../public/assets/profile.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { RiFileCopyLine } from "react-icons/ri";
import "./DonateOrGet.css"


const DonateGetCard = ({ donner }) => {

    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipBoard = async copyMe => {

        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const copySuccessFalse = () => {
        if (copySuccess === 'Copied!') {
            toast.success(copySuccess)
        }
        else {
            toast.error(copySuccess)
        }
    }


    return (
        <div class="card text-primary-text border-1 border-white-text relative hoverEffect">
            <div class="card-body -my-3 items-center ">
                <Image src={profile} alt="profile" height={70} width={70} />
                <strong class="card-title">{donner?.donnerName}</strong>
                <div className="flex items-center gap-3 text-xl">
                    <p className="">{donner?.phone}</p>
                    <RiFileCopyLine className="hover:text-primary-red cursor-pointer duration-150" title="copy number" onClick={() => (copyToClipBoard(donner?.phone), copySuccessFalse())} />
                </div>
                <address className="text-center"> {donner?.address}</address>
            </div>
        </div>
    );
};

export default DonateGetCard; 