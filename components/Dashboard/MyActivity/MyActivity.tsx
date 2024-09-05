"use client"

import { useState } from "react";
import { useDebounced } from "../../../redux/hooks";
import { getUserId, getUserInfo } from "../../../services/auth.service";
import { format } from "date-fns";
import Link from "next/link";
import ReusableTable from "../../ReusableComponent/Table/ReusableTable";
import { useMyActivityQuery } from "../../../redux/api/needDonnerApi";
import { RiHistoryLine } from "react-icons/ri";

const MyActivity = () => {
    const [modalData, setModalData] = useState<any>(null);
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

    const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
    }

    const userInfo: any = getUserInfo()
    const { data, isLoading, isError, }: any = useMyActivityQuery(getUserId(userInfo))
    console.log(data,)

    // const pageCount = Array.from({ length: Math.ceil(data?.data?.meta?.total / data?.data?.meta?.limit) }, (_, i) => ({ value: i + 1, label: i + 1 }));

    // table related Data start
    const columns = [
        'SL',
        'Applicants Name',
        'Applicants Phone',
        'Patient BG',
        'Donner Phone',
        'patientType',
        'District',
        'Status',
        'Date Of Need Blood',
    ];



    const tableRow = (item, index) => (
        <>
            <td className={``}>{(page - 1) * limit + index + 1} </td>
            <td>{item.applicantName}</td>
            <td>{item.applicantPhone}</td>
            <td>{item.patientBG}</td>
            <td>{item.donner_Data?.phoneNumber}</td>
            <td>{item.patientType}</td>
            <td>{item.district}</td>
            <td className={`${item.status === "REJECT" ? "text-primary-red" : "text-edit"}`}>{item.status}</td>
            <td>{format(new Date(item.dateOfNeedBlood), 'dd-MMM-yyyy')}</td>
        </>
    );

    // const actions = [
    //     { label: "View", icon: <RiEyeLine className="dashboard-icon-style text-view cursor-pointer" title="View" />, onClick: setModalData, showMOdal: { name: "acceptedRequestDetails", status: true } },
    // ];
    return (
        <div className='animate-fade animate-once'>
            <div className="p-3 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiHistoryLine className="text-primary-red" />
                    <h3>My Donate History</h3>
                </div>
                {/* <Link href="/dashboard/manage-requests/pending-request" className="p-1.5 primary-red-button flex items-center gap-1"><RiPassPendingLine />pending Requests</Link> */}
            </div>
            <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red text-white-text shadow-md mb-5">
                {/* <div className="w-3/5 text-primary-text"><SearchBar placeholderText={"Search..."} searchInput={setSearchTerm} /></div>
                <Dropdown options={requestSortByOptions} onSelect={setSortBy} placeholder="Sort By :" defaultValue={sortBy} hoverHeight={"group-hover:h-[111px]"} />
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
            <div className="flex justify-between gap-3 mt-2">
                <div className="bg-primary-red rounded-md text-white-text">
                    {/* <Dropdown options={dataLimitOptions} onSelect={setLimit} placeholder={`Limit : ${limit}`} defaultValue={limit} /> */}
                </div>
                <div className="join ">
                    {/* <button onClick={() => setPage(page - 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.data?.meta?.prevPage === null ? true : false}>«</button> */}
                    <div className="join-item btn bg-primary-red text-white-text hover:bg-primary-red px-0">
                        {/* <Dropdown options={pageCount} onSelect={setPage} placeholder={`Page : ${page}`} defaultValue={page} hoverHeight={"group-hover:h-[81px]"} /> */}
                    </div>
                    {/* <button onClick={() => setPage(page + 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.data?.meta?.nextPages === null ? true : false}>»</button> */}
                </div>
            </div>
            {/* <Modal id="acceptedRequestDetails" title="View Details" width="max-w-[40rem]">
                <ViewRequest requestData={modalData} />
            </Modal> */}
        </div >
    );
};

export default MyActivity;