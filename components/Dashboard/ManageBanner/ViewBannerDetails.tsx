import React from 'react';
import { IBanner } from '../../../types';
import { format } from 'date-fns';
import Image from 'next/image';

interface BannerDetailsProps {
    bannerData: IBanner;
}

const ViewBannerDetails: React.FC<BannerDetailsProps> = ({ bannerData }) => {

    const headings = [
        { label: "Creator Name", key: "admin_Data.fullName" },
        { label: "Creator Id", key: "creatorId" },
        { label: "Creator Phone Number", key: "admin_Data.phoneNumber" },
        { label: "Creator Division", key: "admin_Data.division" },
        { label: "Banner Id", key: "_id" },
        { label: "Showing", key: "showing" },
        { label: "Description", key: "description" },
        { label: "Create Date", key: "createdAt" },
        { label: "Update Date", key: "updatedAt" }
    ];

    return (
        <div className="border-1 border-border-color my-2 p-2 rounded-md">
            <Image className="w-full rounded-md mb-4" src={bannerData?.path} alt="Banner" width={500} height={200} />
            <table className="table-auto w-full text-sm">
                <tbody>
                    {headings.map((heading) => (
                        <tr key={heading.key} className="">
                            <td className="font-semibold">{heading.label}</td>
                            <td>:</td>
                            <td>
                                {heading.key === "createdAt" || heading.key === "updatedAt"
                                    ? bannerData && format(new Date(bannerData[heading.key]), 'dd-MMM-yyyy')
                                    : heading.key.startsWith("admin_Data")
                                        ? bannerData && bannerData.admin_Data
                                            ? bannerData.admin_Data[heading.key.split(".")[1]] ?? "N/A"
                                            : "N/A"
                                        : bannerData && bannerData[heading.key] !== undefined
                                            ? bannerData[heading.key].toString()
                                            : "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewBannerDetails;
