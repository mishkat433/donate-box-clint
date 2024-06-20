import { RiArrowDownSFill, RiVerifiedBadgeLine } from "react-icons/ri";
import Dropdown from "../Dropdown/Dropdown";
import { USER_ROLE } from "../../../constants/role";
import { IAdmin } from "../../../types";
import Image from "next/image";
import userAvatar from "../../../public/assets/userAvatar.png";
import { format } from 'date-fns';

type tableType = {
    columns: string[];
    data: any;
    isActionBanned?: boolean;
    isActionDelete?: boolean;
    isActionEdit?: boolean;
    bannedSetter?: any;
    deleteSetter?: any;
}


const CommonTable = ({ columns, data }: tableType) => {


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
                    {data?.map((tData: IAdmin | any) =>
                        <tr key={tData?.id} className={`text-center `}>
                            {columns.includes("Image") && <td className={``}> <Image className={`w-9 `} src={tData?.profileImage? tData?.profileImage:userAvatar} alt="User Image" height={40} width={40}/> </td>}
                            {columns.includes("User Id") && <td  className={`text-nowrap`}>{tData?.userId}</td>}
                            {columns.includes("Admin Id") && <td  className={`text-nowrap`}>{tData?.adminId}</td>}
                            {columns.includes("Name") && <td className={`flex justify-center mt-2 items-center gap-2`}>{tData?.fullName} {tData?.verified ? <RiVerifiedBadgeLine className="text-success" /> :null}</td>}
                            {columns.includes("Phone") && <td  className={`text-nowrap`}>{tData?.phoneNumber}</td>}
                            {columns.includes("Role") && <td>{tData?.role} </td>}
                            {columns.includes("BG") && <td>{tData?.bloodGroup} </td>}
                            {columns.includes("Gender") && <td>{tData?.gender} </td>}
                            {columns.includes("Division") && <td>{tData?.division} </td>}
                            {columns.includes("Address") && <td>{tData?.address} </td>}
                            {columns.includes("Create Date") && <td className={`text-nowrap`}>{format(new Date(tData?.createdAt), 'dd-MMM-yyyy')} </td>}

                            {/* <td className="flex gap-2">
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
                            </td> */}
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default CommonTable;