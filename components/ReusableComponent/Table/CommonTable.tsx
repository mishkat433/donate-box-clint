import { RiDeleteBack2Line, RiDeleteBinLine, RiEdit2Line, RiEyeLine, RiVerifiedBadgeLine, RiArrowDownSFill } from "react-icons/ri";
import { IAdmin, IUser } from "../../../types";
import Image from "next/image";
import userAvatar from "../../../public/assets/userAvatar.png";
import { format } from 'date-fns';
import Modal from "../Modal";
import { useState } from "react";
import ViewUser from "../../Dashboard/ManageUsers/AllUsers/ViewUser";
import { requestHandlerOptions } from "../../../lib/Options";

type tableType = {
    columns: string[];
    data: IUser[];
    bannedHandler?: Function;
    deleteHandler?: Function;
    slCount?: {
        page: any;
        limit: any;
    };
    requestHandle?: Function;
}

const CommonTable = ({ columns, data, bannedHandler = null, deleteHandler = null, slCount, requestHandle = null }: tableType) => {
    const [modalData, setModalData] = useState(null);


    return (
        <div className="">
            <table className="table ">
                <thead className=" rounded-md">
                    <tr className="bg-primary-red text-white-text rounded-md text-center">
                        {columns.map((column: string, i: number) => (
                            <th key={i} className="">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((tData: IAdmin | IUser | any, i: number) =>
                        <tr key={i} className={`text-center `}>
                            {columns.includes("SL") && <td className={``}>{(slCount?.page - 1) * slCount?.limit + i + 1} </td>}
                            {columns.includes("Image") && <td className={``}> <Image className={`w-9 `} src={tData?.profileImage ? tData?.profileImage : userAvatar} alt="User Image" height={40} width={40} /> </td>}
                            {columns.includes("User Id") && <td className={`text-nowrap`}>{tData?.userId}</td>}
                            {columns.includes("Admin Id") && <td className={`text-nowrap`}>{tData?.adminId}</td>}
                            {columns.includes("Name") && <td className={`flex justify-center mt-2 items-center gap-2`}>{tData?.fullName} {tData?.verified ? <RiVerifiedBadgeLine className="text-success" title="verified" /> : null}</td>}
                            {columns.includes("Phone") && <td className={`text-nowrap`}>{tData?.phoneNumber}</td>}
                            {columns.includes("Role") && <td>{tData?.role} </td>}
                            {columns.includes("BG") && <td>{tData?.bloodGroup} </td>}
                            {columns.includes("Gender") && <td>{tData?.gender} </td>}
                            {columns.includes("Division") && <td>{tData?.division} </td>}
                            {columns.includes("Address") && <td>{tData?.address} </td>}
                            {columns.includes("Create Date") && <td className={`text-nowrap`}>{format(new Date(tData?.createdAt), 'dd-MMM-yyyy')} </td>}
                            {columns.includes("Status") && <td className={`text-primary-red`}> {tData?.status} </td>}
                            {columns.includes("Banned") && <td> <input type="checkbox" onChange={() => bannedHandler({ ...tData, isBan: tData?.isBanned ? false : true })} className="toggle toggle-error toggle-sm" checked={tData?.isBanned} /> </td>}
                            {columns.includes("Action") && <td className="flex items-center justify-center gap-2">
                                {requestHandle && tData?.status === "PENDING" &&
                                    <div className="group relative w-auto" >
                                        <div className="dropdownHeader flex justify-between items-center cursor-pointer p-2.5 rounded-md">
                                            {tData?.status}
                                            <RiArrowDownSFill className={`text-xl text-primary-red group-hover:rotate-180 duration-300 `} />
                                        </div>
                                        <ul className={`absolute w-full bg-border-color max-h-[150px]  overflow-y-auto z-[90] rounded-md duration-300 h-0 group-hover:h-[100px] `}>
                                            {requestHandlerOptions?.map((option) => (
                                                <li
                                                    key={option.value}
                                                    className={`px-2.5 py-1.5 text-white-text cursor-pointer hover:bg-primary-red border-b-1 border-white-text hover:text-white-text duration-200 bg-secondary-text`}
                                                    onClick={() => requestHandle(option?.value, tData?.adminId)}
                                                >
                                                    {option.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                                <label htmlFor="userDetailsView" className="" onClick={() => setModalData(tData)}> <RiEyeLine className="dashboard-icon-style text-view cursor-pointer" title="View" /></label>
                                {bannedHandler && <label htmlFor="editModal" className="" > <RiEdit2Line className="dashboard-icon-style text-edit cursor-pointer" title="Edit" /></label>}
                                {deleteHandler && tData?.status !== "PENDING" && <RiDeleteBinLine onClick={() => deleteHandler(tData?.userId ? tData?.userId : tData?.adminId)} className="dashboard-icon-style text-primary-red cursor-pointer" title="Delete" />}
                            </td>
                            }
                        </tr>
                    )}
                </tbody>
            </table>
            {data?.length === 0 && <p className="flex justify-center items-center gap-2 text-primary-red py-3"><RiDeleteBack2Line className="rotate-180" /> Data Not Found</p>}

            <Modal id="userDetailsView" title="View Details" width="max-w-[32rem]">
                {modalData && <ViewUser userData={modalData} />}
            </Modal>

            <Modal id="editModal" title="Edit User" width="max-w-[32rem]">
                <h1>Edit modal</h1>
            </Modal>
        </div>
    );
};

export default CommonTable;
