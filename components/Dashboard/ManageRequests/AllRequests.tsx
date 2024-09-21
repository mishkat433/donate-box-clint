"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { RiDeleteBinLine, RiEyeLine, RiGuideFill, RiPassPendingLine } from 'react-icons/ri';
import ReusableTable from '../../ReusableComponent/Table/ReusableTable';
import SearchBar from '../../ReusableComponent/Searchbar';
import { format } from 'date-fns';
import { useDebounced } from '../../../redux/hooks';
import { useAllRequestsQuery, useDeleteRequestMutation } from '../../../redux/api/needDonnerApi';
import Dropdown from '../../ReusableComponent/Dropdown/Dropdown';
import { dataLimitOptions, sortOrderOptions } from '../../../lib/Options';
import Modal from '../../ReusableComponent/Modal';
import ViewRequest from './ResolverModal/ViewRequest';
import { requestSortByOptions } from '../../../lib/RequestOptions';
import { formatTime, getUserInfo } from '../../../services/auth.service';
import Swal from 'sweetalert2';
import { USER_ROLE } from '../../../constants/role';

const AllRequests = () => {
    const [modalData, setModalData] = useState<any>(null);
    const query: Record<string, any> = {};
    const [deleteRequest] = useDeleteRequestMutation()

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

    const { data, isLoading } = useAllRequestsQuery({ ...query })
    const pageCount = Array.from({ length: Math.ceil(data?.data?.meta?.total / data?.data?.meta?.limit) }, (_, i) => ({ value: i + 1, label: i + 1 }));

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
        'Date & time Of Need Blood',
    ];


    const deleteUserRequest = ({ _id }) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to Delete this Request?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Delete It!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res: any = await deleteRequest(_id).unwrap()
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
            <td>{format(new Date(item.dateOfNeedBlood), 'dd-MMM-yyyy')} &nbsp;
                {item.timeOfNeedBlood && formatTime(item.timeOfNeedBlood)} </td>
        </>
    );

    const actions = [];

    if ((getUserInfo() as { role: USER_ROLE })?.role === "SUPER_ADMIN") {
        actions.push({ label: "View", icon: <RiEyeLine className="dashboard-icon-style text-view cursor-pointer" title="View" />, onClick: setModalData, showMOdal: { name: "acceptedRequestDetails", status: true } },
            { label: "delete", icon: <RiDeleteBinLine className="dashboard-icon-style text-primary-red cursor-pointer" title="delete" />, onClick: deleteUserRequest },)
    }
    else {
        actions.push({ label: "View", icon: <RiEyeLine className="dashboard-icon-style text-view cursor-pointer" title="View" />, onClick: setModalData, showMOdal: { name: "acceptedRequestDetails", status: true } })
    }


    return (
        <div className='animate-fade animate-once'>
            <div className="p-3 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiGuideFill className="text-primary-red" />
                    <h3>All Blood Requests</h3>
                </div>
                <Link href="/dashboard/manage-requests/pending-request" className="p-1.5 primary-red-button flex items-center gap-1"><RiPassPendingLine />pending Requests</Link>
            </div>
            <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red text-white-text shadow-md mb-5">
                <div className="w-3/5 text-primary-text"><SearchBar placeholderText={"Search..."} searchInput={setSearchTerm} /></div>
                <Dropdown options={requestSortByOptions} onSelect={setSortBy} placeholder="Sort By :" defaultValue={sortBy} hoverHeight={"group-hover:h-[111px]"} />
                <Dropdown options={sortOrderOptions} onSelect={setSortOrder} placeholder="Sort Order :" defaultValue={sortOrder} hoverHeight={"group-hover:h-[74px]"} />
            </div>

            <div className="shadow-md rounded-md overflow-auto ">
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
            <Modal id="acceptedRequestDetails" title="View Details" width="max-w-[40rem]">
                <ViewRequest requestData={modalData} />
            </Modal>
        </div >
    );
};

export default AllRequests;