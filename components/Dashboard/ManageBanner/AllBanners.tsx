"use client"

import { RiSwapBoxLine, RiAddFill } from "react-icons/ri";
import SearchBar from "../../ReusableComponent/Searchbar";
import DotLoading from "../../ReusableComponent/DotLoading";
import { useDebounced } from "../../../redux/hooks";
import { useState } from "react";
import { useBannerDeleteMutation, useBannersQuery, useShowControlMutation } from "../../../redux/api/bannerApi";
import BannerTable from "../../ReusableComponent/Table/BannerTable";
import Swal from "sweetalert2";
import Modal from "../../ReusableComponent/Modal";
import AddBannerFrom from "./AddBannerForm"

const AllBanners = () => {
    const columns = ['SL', 'Banner Image', 'Creator Name', 'Create Date', 'Showing', 'Action'];

    const query: Record<string, any> = {};

    const { data, isLoading, isError, error }: any = useBannersQuery({ ...query })
    const [bannerDelete] = useBannerDeleteMutation()
    const [showControl] = useShowControlMutation()

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

    const visibilityHandle = async (data: any) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: `${data?.showing ? "Do you want to visible this Banner?" : "Do you want to invisible this banner?"}`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sure!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res: any = await showControl(data)
                    if (res?.data?.success) {
                        Swal.fire({
                            title: "Visibility!",
                            text: `${data?.showing ? "Now this banner is show in home page." : "Now this banner is not show in home page"}`,
                            icon: "success",
                            timer: 2000
                        });
                    }
                }
            });
        }
        catch (err: any) {
            console.log(err);
        }
    };

    const deleteHandler = async (id: string) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to Delete this Banner?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Delete It!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res: any = await bannerDelete(id).unwrap()
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


    if (isLoading) {
        return <DotLoading />
    }

    return (
        <div className="rounded-md animate-fade animate-once">
            <div className="p-3 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiSwapBoxLine className="" />
                    <h3>All Banners</h3>
                </div>

                <label htmlFor="createBanner" className="p-1.5 primary-red-button flex items-center gap-1"><RiAddFill /> Create new Banner</label>
            </div>

            <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red text-white-text shadow-md mb-5">
                <div className="w-3/5 text-primary-text"><SearchBar searchInput={setSearchTerm} placeholderText="Search..." /></div>
                {/* <Dropdown options={sortByOptions} onSelect={setSortBy} placeholder="Sort By :" defaultValue={sortBy} hoverHeight={"group-hover:h-[111px]"} />
            <Dropdown options={sortOrderOptions} onSelect={setSortOrder} placeholder="Sort Order :" defaultValue={sortOrder} hoverHeight={"group-hover:h-[74px]"} /> */}
            </div>

            <div className="shadow-md rounded-md overflow-auto ">
                <BannerTable columns={columns} data={data?.data} deleteHandler={deleteHandler} visibilityHandle={visibilityHandle} />
            </div>
            <Modal id="createBanner" title="Create Banner" width="max-w-[50rem]" >
                <AddBannerFrom />
            </Modal>
        </div>
    );
};

export default AllBanners;