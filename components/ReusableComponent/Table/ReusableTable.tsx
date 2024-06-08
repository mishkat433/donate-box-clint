import { RiArrowDownSFill } from "react-icons/ri";

type tableType = {
    tableHeading: string[],
    data: any,
    isActionBanned?:boolean
    isActionDelete?:boolean
    isActionEdit?:boolean
}


const ReusableTable = ({ tableHeading, data, isActionEdit, isActionBanned, isActionDelete }: tableType) => {
    return (
    <div className="">
        <table className="table">
            <thead className="w-full rounded-md">
                <tr className="bg-primary-red text-white-text rounded-md">
                    {tableHeading?.map((th, i) => <th key={i} >{th}</th>)}
                </tr>
            </thead>
            <tbody>
                {data?.map((tData) =>
                    <tr key={tData?.id}>
                        <td>
                            {tData?.profileImage ? tData?.profileImage : "not set"}
                        </td>
                        <td>
                            {tData?.fullName}
                        </td>
                        <td>
                            {tData?.phoneNumber}
                        </td>
                        <td>
                            {tData?.role}
                        </td>
                        <td>
                            {tData?.address}
                        </td>
                        <td>
                            {tData?.isBanned ? "true" : "false"}
                        </td>
                        <td className="flex gap-2">
                            {isActionBanned &&
                            
                                <div className=" text-sm relative group ">
                                    <button className="flex items-center border-1 border-primary-red p-1 rounded-md" >Banned <RiArrowDownSFill className="text-xl text-primary-red" /></button>
                                    <div className={`flex flex-col gap-[2px] text-white-text absolute bg-primary-red  rounded-md md:w-14 lg:w-20 overflow-hidden duration-300 z-[1] h-0 group-hover:h-[58px] `}>
                                        <button className=" hover:bg-white-text hover:text-primary-red duration-300  py-1">True</button>
                                        <button className=" hover:bg-white-text hover:text-primary-red duration-300  py-1">False</button>
                                    </div>
                                </div>
                            }
                            {isActionDelete &&
                                <div className=" text-sm relative group ">
                                    <button className="flex items-center border-1 border-primary-red p-1 rounded-md" >Delete</button>
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

export default ReusableTable;