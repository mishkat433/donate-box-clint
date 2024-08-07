"use client"

import { RiAddFill, RiGitClosePullRequestFill } from "react-icons/ri";
import { useDeleteAdminMutation, useGetAllAdminsQuery, useRequestHandlerMutation } from "../../../redux/api/adminApi";
import DotLoading from "../../ReusableComponent/DotLoading";
import SearchBar from "../../ReusableComponent/Searchbar";
import { useState } from "react";
import { useDebounced } from "../../../redux/hooks";
import { dataLimitOptions, sortByOptions, sortOrderOptions } from "../../../lib/Options";
import Dropdown from "../../ReusableComponent/Dropdown/Dropdown";
import CommonTable from "../../ReusableComponent/Table/CommonTable";
import { IAdmin } from "../../../types";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AllRequest = () => {
    const [requestHandler] = useRequestHandlerMutation()
    const [deleteAdmin, { }] = useDeleteAdminMutation()

    const columns = ['SL', 'Admin Id', 'Name', 'Phone', "Role", 'Division', 'Status', "Action"];

    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("desc");
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

    const requestHandle = async (status: string, adminId: string) => {
        try {
            const reqData = { status, adminId }
            const res: any = await requestHandler(reqData)
            if (res?.success) {
                toast.success(`Admin request ${res?.data?.data?.status}`)
            }
        }
        catch (err: any) {
            console.log(err);
        }
    };
    const deleteHandler = async (id: string) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to Delete this Admin?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Delete!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res: any = await deleteAdmin(id).unwrap()
                    if (res?.data?.success) {
                        Swal.fire({
                            title: "Delete!",
                            text: `${res?.data?.message}`,
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

    const { data, isLoading, isError, error }: any = useGetAllAdminsQuery({ ...query })
    const filteringAdminPending = data?.admins?.data?.filter((admin: IAdmin) => admin?.status !== "ACCEPT")

    if (isLoading) {
        return <DotLoading />
    }

    // const pageCount = Array.from({ length: Math.ceil(data.admins.meta.total / data.admins.meta.limit) }, (_, i) => ({ value: i + 1, label: i + 1 }));


    return (
        <div className="rounded-md animate-fade animate-once">
            <div className="p-3 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiGitClosePullRequestFill className="text-primary-red" />
                    <h3>Admin Requests</h3>
                </div>
                <button className="p-1.5 primary-red-button flex items-center gap-1"><RiAddFill /> Create New</button>
            </div>

            <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red text-white-text shadow-md mb-5">
                <div className="w-3/5 text-primary-text"><SearchBar searchInput={setSearchTerm} /></div>
                <Dropdown options={sortByOptions} onSelect={setSortBy} placeholder="Sort By :" defaultValue={sortBy} hoverHeight={"group-hover:h-[111px]"} />
                <Dropdown options={sortOrderOptions} onSelect={setSortOrder} placeholder="Sort Order :" defaultValue={sortOrder} hoverHeight={"group-hover:h-[74px]"} />
            </div>

            <div className="shadow-md rounded-md">
                <CommonTable columns={columns} data={filteringAdminPending} slCount={{ limit, page }} requestHandle={requestHandle} deleteHandler={deleteHandler} />
            </div>
            <div className="flex justify-between gap-3 mt-2">
                <div className="bg-primary-red rounded-md text-white-text">
                    <Dropdown options={dataLimitOptions} onSelect={setLimit} placeholder={`Limit : ${limit}`} defaultValue={limit} />
                </div>
                {/* <div className="join ">
                <button onClick={() => setPage(page - 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.admins?.meta?.prevPage === null ? true : false}>«</button>
                <div className="join-item btn bg-primary-red text-white-text hover:bg-primary-red px-0">
                    <Dropdown options={pageCount} onSelect={setPage} placeholder={`Page : ${page}`} defaultValue={page} hoverHeight={"group-hover:h-[81px]"} />
                </div>
                <button onClick={() => setPage(page + 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.admins?.meta?.nextPages === null ? true : false}>»</button>
            </div> */}
            </div>
        </div>
    );
};

export default AllRequest;