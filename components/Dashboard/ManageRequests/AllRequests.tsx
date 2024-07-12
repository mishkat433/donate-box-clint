"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { RiGuideFill, RiPassPendingLine } from 'react-icons/ri';
import ReusableTable from '../../ReusableComponent/Table/ReusableTable';
import SearchBar from '../../ReusableComponent/Searchbar';
import { format } from 'date-fns';
import { useDebounced } from '../../../redux/hooks';
import { useAllRequestsQuery } from '../../../redux/api/needDonnerApi';
import Dropdown from '../../ReusableComponent/Dropdown/Dropdown';
import { dataLimitOptions } from '../../../lib/Options';

const AllRequests = () => {
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

    const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600, });

    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
    }

    const { data, isLoading } = useAllRequestsQuery({ ...query })
    const pageCount = Array.from({ length: Math.ceil(data?.data?.meta?.total / data?.data?.meta?.limit) }, (_, i) => ({ value: i + 1, label: i + 1 }));


    // table related Data start
    const columns = [
        { header: 'SL', orgName: 'SL' },
        { header: 'Applicants Name', orgName: 'applicantName' },
        { header: 'Applicants Phone', orgName: 'applicantPhone' },
        { header: 'Patient BG', orgName: 'patientBG' },
        { header: 'patientAge', orgName: 'patientAge' },
        { header: 'patientType', orgName: 'patientType' },
        { header: 'District', orgName: 'district' },
        { header: 'Date Of Need Blood', orgName: 'dateOfNeedBlood' },
    ];



    const tableRow = (item, index) => (
        <>
            <td className={``}>{(page - 1) * limit + index + 1} </td>
            <td>{item.applicantName}</td>
            <td>{item.applicantPhone}</td>
            <td>{item.patientBG}</td>
            <td>{item.patientAge}</td>
            <td>{item.patientType}</td>
            <td>{item.district}</td>
            <td>{format(new Date(item.dateOfNeedBlood), 'dd-MMM-yyyy')}</td>
        </>
    );

    const actions = [
        // { label: "Resolved", icon: <RiClipboardFill className='text-lg text-primary-red' title='Resolved request' />, onClick: setModalData, showMOdal: { name: "requestResolver", status: true } },
    ];
    // table related Data end

    return (
        <div>
            <div className="p-3 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiGuideFill className="text-primary-red" />
                    <h3>All Requests</h3>
                </div>
                <Link href="/dashboard/manage-requests/pending-request" className="p-1.5 primary-red-button flex items-center gap-1"><RiPassPendingLine />pending Requests</Link>
            </div>
            <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red text-white-text shadow-md mb-5">
                <div className="w-3/5 text-primary-text"><SearchBar placeholderText={"Search..."} searchInput={setSearchTerm} /></div>
                {/* <Dropdown options={sortByOptions} onSelect={setSortBy} placeholder="Sort By :" defaultValue={sortBy} hoverHeight={"group-hover:h-[111px]"} />
                <Dropdown options={sortOrderOptions} onSelect={setSortOrder} placeholder="Sort Order :" defaultValue={sortOrder} hoverHeight={"group-hover:h-[74px]"} /> */}
            </div>

            <div className="shadow-md rounded-md">
                <ReusableTable
                    columns={columns}
                    data={data?.data?.data}
                    tableRow={tableRow}
                    actions={actions}
                    emptyMessage="Data not found."
                />

            </div>
            <div className="flex justify-between gap-3 mt-2">
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
            </div>
        </div >
    );
};

export default AllRequests;