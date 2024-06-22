"use client"

import { useRef, useState } from "react";
import { useAllUsersQuery, useUserBannedMutation,useUserDeleteMutation } from "../../../../redux/api/userApi";
import DotLoading from "../../../ReusableComponent/DotLoading";
import SearchBar from "../../../ReusableComponent/Searchbar";
import { RiUserAddLine, RiUserSmileFill } from "react-icons/ri";
import { useDebounced } from "../../../../redux/hooks";
import Dropdown from "../../../ReusableComponent/Dropdown/Dropdown";
import { sortByOptions, sortOrderOptions, dataLimitOptions } from "../../../../lib/Options";
import CommonTable from "../../../ReusableComponent/Table/CommonTable";
import Swal from 'sweetalert2';
import Modal from "../../../ReusableComponent/Modal";
import BloodDonner from "../../../DonateNow/BloodDonner";


const AllUsersMain = () => {
    const columns = ['SL','Image', 'User Id', 'Name', 'Phone', "Role", 'BG', 'Gender', 'Division', 'Banned', 'action'];

    const [userBanned, { }] = useUserBannedMutation()
    const [userDelete, { }] = useUserDeleteMutation()
    const createUserRef = useRef(null);

    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("asc");
    const [searchTerm, setSearchTerm] = useState<string>("");

    query["limit"] = limit;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
    }

    const bannedHandle = async (data:any) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: `${data?.isBan? "Do you want to Banned this user?":"Do you want to Un-Banned this user?"}`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sure!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const bannedData = { userId: data?.userId, isBanned: data?.isBan }
                    const res:any = await userBanned(bannedData)
                    if (res?.data?.success) {
                        Swal.fire({
                            title: "Banned!",
                            text:`${!data?.isBan? "This user has been Un-Banned.":"This user has been Banned."}`,
                            icon: "success",
                            timer: 3000
                        });
                    }
                }
            });
        }
        catch (err: any) {
            console.log(err);
        }
    };

    const deleteHandler=async(id:string)=>{
        try {
            Swal.fire({
                title: "Are you sure?",
                text:  "Do you want to Delete this user?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Delete!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res:any = await userDelete(id).unwrap()
                    if (res?.data?.success) {
                        Swal.fire({
                            title: "Delete!",
                            text:`${res?.data?.message}`,
                            icon: "success",
                            timer: 1500
                        });
                    }
                }
            });
        }
        catch (err: any) {
            console.log(err);
        }
    }

    const { data, isLoading, isError, error }: any = useAllUsersQuery({ ...query })

    if (isLoading) {
        return <DotLoading />
    }

    const pageCount = Array.from({ length: Math.ceil(data.donner.meta.total / data.donner.meta.limit) }, (_, i) => ({ value: i + 1, label: i + 1 }));


    return (
        <div className="">
            <div className=" flex justify-between items-center gap-4 mb-4">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiUserSmileFill className="text-primary-red" />
                    <h3>All Users</h3>
                </div>
                <label htmlFor="createUser" className="py-1.5 px-2 cursor-pointer primary-red-button flex items-center gap-1"><RiUserAddLine />Create New Donner</label>
            </div>

            <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red text-white-text shadow-md mb-5">
                <div className="w-3/5 text-primary-text"><SearchBar searchInput={setSearchTerm} /></div>
                <Dropdown options={sortByOptions} onSelect={setSortBy} placeholder="Sort By :" defaultValue={sortBy} hoverHeight={"group-hover:h-[111px]"} />
                <Dropdown options={sortOrderOptions} onSelect={setSortOrder} placeholder="Sort Order :" defaultValue={sortOrder} hoverHeight={"group-hover:h-[74px]"} />
            </div>

            <div className="shadow-md rounded-md">
                {/* <CommonTable columns={columns} data={data?.donner?.data} isActionBanned={true} bannedSetter={bannedHandle} isActionDelete={true} /> */}
                <CommonTable columns={columns} data={data?.donner?.data} slCount={{limit,page}} bannedHandler={bannedHandle} deleteHandler={deleteHandler} />
            </div>
            <div className="flex justify-between gap-3 mt-2">
                <div className="bg-primary-red rounded-md text-white-text text-center">
                    <Dropdown options={dataLimitOptions} onSelect={setLimit} placeholder={`Limit : ${limit}`} defaultValue={limit} />
                </div>
                <div className="join ">
                    <button onClick={() => setPage(page - 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.donner?.meta?.prevPage === null ? true : false}>«</button>
                    <div className="join-item btn bg-primary-red text-white-text hover:bg-primary-red px-0">
                        <Dropdown options={pageCount} onSelect={setPage} placeholder={`Page : ${page}`} defaultValue={page} hoverHeight={"group-hover:h-[81px]"} />
                    </div>
                    <button onClick={() => setPage(page + 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.donner?.meta?.nextPages === null ? true : false}>»</button>
                </div>
            </div>
            <Modal id="createUser" title="Create User" width="max-w-[60rem]"  >
               <BloodDonner heading={false}/>
            </Modal>

        </div>
    );
};

export default AllUsersMain;

