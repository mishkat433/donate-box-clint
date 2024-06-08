"use client"

import { useState } from "react";
import { useAllUsersQuery } from "../../../redux/api/userApi";
import ReusableTable from "../../ReusableComponent/Table/ReusableTable";
import DotLoading from "../../ReusableComponent/DotLoading";
import SearchBar from "../../ReusableComponent/Searchbar";
import { RiAccountCircleFill, RiAddCircleFill, RiAddFill, RiArrowDownSFill, RiUserSmileFill } from "react-icons/ri";
import { useDebounced } from "../../../redux/hooks";
import DropDown from "../../ReusableComponent/DropDown";


const AllUsersMain = () => {
    const query: Record<string, any> = {};


    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(20);
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

    const { data, isLoading, isError, error }: any = useAllUsersQuery({ ...query })

    const tableHeading = ["image", "name", "Phone", "Role", "Address", "status", "Action"]
    const sortOrderDropDown = [{ name: "asc", setter: setSortOrder }, { name: "desc", setter: setSortOrder }]
    const sortByDropDown = [{ name: "fullName", setter: setSortBy }, { name: "phoneNumber", setter: setSortBy }, { name: "district", setter: setSortBy }]

    const limitDropDown = [{ name: "10", setter: setLimit }, { name: "20", setter: setLimit }, { name: "50", setter: setLimit }, { name: "100", setter: setLimit }]


    if (isLoading) {
        return <DotLoading />
    }


const totalPage=Math.ceil( ( Number(data?.donner?.meta?.total)/ Number(data?.donner?.meta?.limit)))


    return (
        <div className="rounded-md">
            <div className="p-3 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiUserSmileFill />
                    <h3>All Users</h3>
                </div>
                <button className="p-1.5 primary-red-button flex items-center gap-1"><RiAddFill /> Create New</button>
            </div>

            <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red shadow-md mb-5">
                <SearchBar searchInput={setSearchTerm} />
                <DropDown
                    buttons={sortByDropDown} mainBtnName={"Sort By"}
                    defaultValue={sortBy}
                    customStyle={"w-28"}
                    height="80px"
                />
                <DropDown
                    buttons={sortOrderDropDown}
                    mainBtnName={"Sort Order"}
                    defaultValue={sortOrder}
                />
            </div>

            <div className="shadow-md rounded-md">
                <ReusableTable
                    tableHeading={tableHeading}
                    data={data?.donner?.data}
                    isActionBanned={true}
                    isActionDelete={true}
                    isActionEdit={true}
                />
            </div>
            <div className="flex justify-between gap-3">
            <div>
                    <DropDown
                        buttons={limitDropDown}
                        mainBtnName={"Limit"}
                        defaultValue={limit}
                        // height={"100px"}
                        customStyle={"bg-primary-red w-full"}
                        parentStyle={"text-white-text bg-primary-red pl-4 py-3 "}
                    />
                </div>
                <div className="join ">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">Page : {data?.donner?.meta?.page}</button>
                    <button className="join-item btn">»</button>
                </div>
               
            </div>
        </div>
    );
};

export default AllUsersMain;