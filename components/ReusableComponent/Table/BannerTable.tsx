import React, { useState } from 'react';
import { IBanner } from '../../../types';
import { RiDeleteBack2Line, RiDeleteBinLine, RiEdit2Line, RiEyeLine } from 'react-icons/ri';
import Image from 'next/image';
import { format } from 'date-fns';
import Modal from '../Modal';
import ViewBannerDetails from '../../Dashboard/ManageBanner/ViewBannerDetails';

type tableType = {
    columns: string[];
    data: any;
    visibilityHandle?: Function;
    deleteHandler?: Function;
}


const BannerTable = ({ columns, data, deleteHandler, visibilityHandle }: tableType) => {
    const [modalData, setModalData] = useState(null);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead className=" rounded-md">
                    <tr className="bg-primary-red text-white-text rounded-md ">
                        {columns.map((column: string, i: number) => (
                            <th key={i} className="">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((banner: IBanner, i: number) =>
                        <tr key={i} className={``}>
                            <td className={``}>{i + 1} </td>
                            <td className={``}> <Image className={`w-20`} src={banner?.path} alt="User Image" height={40} width={40} /> </td>
                            <td className={``}>{banner?.admin_Data?.fullName} </td>
                            <td className={`text-nowrap`}>{format(new Date(banner?.createdAt), 'dd-MMM-yyyy')} </td>
                            <td className={``}>{banner?.showing.toString()}</td>
                            <td>
                                {columns.includes("action") &&
                                    <div className="flex items-center justify-center gap-3">
                                        <input type="checkbox" onChange={() => visibilityHandle({ bannerId: banner?._id, showing: !banner?.showing })} className="toggle toggle-error toggle-sm" checked={banner?.showing} title={banner?.showing ? "now visible" : "now invisible"} />
                                        <label htmlFor="viewBanner" className="" onClick={() => setModalData(banner)}> <RiEyeLine className="dashboard-icon-style text-view cursor-pointer" title="View" /></label>
                                        <RiDeleteBinLine onClick={() => deleteHandler(banner?._id)} className="dashboard-icon-style text-primary-red cursor-pointer" title="Delete" />
                                    </div>
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {data?.length === 0 && <p className="flex justify-center items-center gap-2 text-primary-red py-3"><RiDeleteBack2Line className="rotate-180" /> Data Not Found</p>}

            <Modal id="viewBanner" title="View Banner Details" width="max-w-[52rem]">
                {modalData && <ViewBannerDetails bannerData={modalData} />}
            </Modal>
        </div>
    );
};

export default BannerTable;