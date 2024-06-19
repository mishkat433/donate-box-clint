import { RiArrowDownSFill } from "react-icons/ri";
import Dropdown from "../Dropdown/Dropdown";
import { USER_ROLE } from "../../../constants/role";
import { IAdmin } from "../../../types";

type tableType = {
    columns: string[];
    data: any;
    isActionBanned?: boolean;
    isActionDelete?: boolean;
    isActionEdit?: boolean;
    bannedSetter?: any;
    deleteSetter?: any;
}


const CommonTable = ({ columns, data, isActionEdit, isActionBanned, isActionDelete, bannedSetter, deleteSetter }: tableType) => {

    return (
        <div className="">
            <table className="table overflow-auto">
                <thead className="w-full rounded-md">
                    <tr className="bg-primary-red text-white-text rounded-md text-center">
                        {columns.map((column: string) => (
                            <th key={column} className="">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((tData:IAdmin | any) =>
                        <tr key={tData?.id} className={`text-center `}>
                            <td>
                                {tData?.profileImage ? tData?.profileImage : "not set"}
                            </td>
                            <td> {tData?.adminId ? tData?.adminId : tData?.userId} </td>
                            <td> {tData?.fullName} </td>
                            <td> {tData?.phoneNumber} </td>
                            <td> {tData?.role} </td>
                            <td> {tData?.division} </td>
                            <td> {tData?.address}</td>
                            {tData?.role === USER_ROLE.USER ? <td>{tData?.verified ? "Verified" : null}</td> : <td className={`${tData?.status==="PENDING"?"text-primary-red":"text-success"}`}>{tData?.status!=="PENDING"&& tData?.status}</td>}
                            <td className="flex gap-2">
                                {isActionBanned &&
                                    <div className=" text-sm relative group ">
                                        <button className="flex items-center border-1 border-primary-red p-1 rounded-md" >{tData?.isBanned ? "Banned" : "Un Banned"} <RiArrowDownSFill className="text-xl text-primary-red" /></button>
                                        <div className={`flex flex-col gap-[2px] text-white-text absolute bg-primary-red  rounded-md md:w-14 lg:w-20 overflow-hidden duration-300 z-[1] h-0 group-hover:h-[58px] `}>
                                            <button onClick={() => bannedSetter({ ...tData, isBan: true })} className=" hover:bg-white-text hover:text-primary-red duration-300  py-1">Banned</button>
                                            <button onClick={() => bannedSetter({ ...tData, isBan: false })} className=" hover:bg-white-text hover:text-primary-red duration-300  py-1">Un Banned</button>
                                        </div>
                                    </div>
                                }
                                {isActionDelete &&
                                    <div className=" text-sm relative group ">
                                        <button className="flex items-center border-1 border-primary-red p-1 rounded-md" >Delete</button>
                                    </div>
                                }
                                {isActionEdit &&
                                    <div className=" text-sm relative group ">
                                        <button className="flex items-center border-1 border-primary-red p-1 rounded-md" >Edit</button>
                                    </div>
                                }
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default CommonTable;