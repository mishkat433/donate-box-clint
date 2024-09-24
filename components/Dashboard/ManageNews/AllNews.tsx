"use client"

import { RiFileAddLine, RiNewspaperLine } from "react-icons/ri";
import UnderDevelopment from "../../ReusableComponent/UnderDevelopement";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "../../ReusableComponent/Searchbar";

const AllNews = () => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("desc");
    const [searchTerm, setSearchTerm] = useState<string>("");
    return (
        <div>
            <div className='animate-fade animate-once'>
                <div className="p-3 flex justify-between items-center gap-4 mb-2">
                    <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                        <RiNewspaperLine className="text-primary-red" />
                        <h3>All News</h3>
                    </div>
                    <Link href="/dashboard/manage-requests/pending-request" className="p-1.5 primary-red-button flex items-center gap-1"><RiFileAddLine />Add News</Link>
                </div>
                <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red text-white-text shadow-md mb-5">
                    <div className="w-3/5 text-primary-text"><SearchBar placeholderText={"Search..."} searchInput={setSearchTerm} /></div>
                    {/* <Dropdown options={requestSortByOptions} onSelect={setSortBy} placeholder="Sort By :" defaultValue={sortBy} hoverHeight={"group-hover:h-[111px]"} />
                    <Dropdown options={sortOrderOptions} onSelect={setSortOrder} placeholder="Sort Order :" defaultValue={sortOrder} hoverHeight={"group-hover:h-[74px]"} /> */}
                </div>

                <div className="shadow-md rounded-md overflow-auto ">
                    {/* <ReusableTable
                    columns={columns}
                    data={data?.data?.data}
                    tableRow={tableRow}
                    actions={actions}
                    emptyMessage="Data not found."
                /> */}

                </div>
                {/* <div className="flex justify-between gap-3 mt-2">
                <div className="bg-primary-red rounded-md text-white-text">
                    <Dropdown options={dataLimitOptions} onSelect={setLimit} placeholder={`Limit : ${limit}`} defaultValue={limit} />
                </div>
                <div className="join ">
                    <button onClick={() => setPage(page - 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.data?.meta?.prevPage === null ? true : false}>«</button>
                    <div className="join-item btn bg-primary-red text-white-text hover:bg-primary-red px-0">
                        <Dropdown options={pageCount} onSelect={setPage} placeholder={`Page : ${page}`} defaultValue={page} hoverHeight={"group-hover:h-[81px]"} />
                    </div>
                    <button onClick={() => setPage(page + 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.data?.meta?.nextPages === null ? true : false}>»</button>
                </div>
            </div> */}
                {/* <Modal id="acceptedRequestDetails" title="View Details" width="max-w-[40rem]">
                <ViewRequest requestData={modalData} />
            </Modal> */}
            </div >
            <UnderDevelopment />
        </div>
    );
};

export default AllNews;