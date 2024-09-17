"use client"

import { useEffect, useState } from "react";
import { useDebounced } from "../../../redux/hooks";
import { getUserId, getUserInfo } from "../../../services/auth.service";
import { format } from "date-fns";
import Link from "next/link";
import ReusableTable from "../../ReusableComponent/Table/ReusableTable";
import { useMyActivityQuery } from "../../../redux/api/needDonnerApi";
import { RiEyeLine, RiHistoryLine, RiPrinterCloudLine } from "react-icons/ri";
import Dropdown from "../../ReusableComponent/Dropdown/Dropdown";
import { dataLimitOptions, } from "../../../lib/Options";
import Modal from "../../ReusableComponent/Modal";
import ViewRequest from "../ManageRequests/ResolverModal/ViewRequest";

const MyActivity = () => {
    const [modalData, setModalData] = useState<any>(null);
    const [diffDate, setDiffDate] = useState<string | null>(null);
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
    const { data, isLoading, isError, error }: any = useMyActivityQuery(getUserId(userInfo))
    console.log(data, isError, error)

    const pageCount = Array.from({ length: Math.ceil(data?.data?.meta?.total / data?.data?.meta?.limit) }, (_, i) => ({ value: i + 1, label: i + 1 }));

    // table related Data start
    const columns = [
        'SL',
        'Applicants Name',
        'Applicants Phone',
        'Patient BG',
        'PatientType',
        'Patient District',
        'Donate Date',
        'Donate Time',
    ];


    useEffect(() => {
        const calculateTimeDifference = () => {
            const donateDate = new Date(data?.data?.data[0]?.dateOfNeedBlood);
            const nextDonateDate = new Date(data?.data?.data[0]?.nextDonateDate);
            const diffInMs = nextDonateDate.getTime() - donateDate.getTime();

            if (diffInMs < 0) {
                // return 'Now you are ready to donate your blood';
                return null
            }

            const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
            return `${days}Days, ${hours}:${minutes}:${seconds}`;
        };

        const intervalId = setInterval(() => {
            setDiffDate(calculateTimeDifference());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [data]);


    const tableRow = (item, index) => (
        <>
            <td className={``}>{(page - 1) * limit + index + 1} </td>
            <td>{item.applicantName}</td>
            <td>{item.applicantPhone}</td>
            <td>{item.patientBG}</td>
            <td>{item.patientType}</td>
            <td>{item.district}</td>
            <td>{format(new Date(item.dateOfNeedBlood), 'dd-MMM-yyyy')}</td>
            <td>{item?.timeOfNeedBlood ? item?.timeOfNeedBlood : "N/A"} </td>
        </>
    );

    const actions = [
        { label: "View", icon: <RiEyeLine className="dashboard-icon-style text-view cursor-pointer" title="show more" />, onClick: setModalData, showMOdal: { name: "myHistoryDetails", status: true } },
    ];
    return (
        <div className='animate-fade animate-once'>
            <div className="p-3 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiHistoryLine className="text-primary-red" />
                    <h3>My History</h3>
                </div>
                <div className="text-view">{diffDate !== null ? `Your rest Time is: ${diffDate}` : null}  </div>
                <button className="p-1.5 primary-red-button flex items-center gap-1"><RiPrinterCloudLine />Print History</button>
            </div>
            {/* <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red text-white-text shadow-md mb-5">
                <div className="w-3/5 text-primary-text"><SearchBar placeholderText={"Search..."} searchInput={setSearchTerm} /></div>
                <Dropdown options={requestSortByOptions} onSelect={setSortBy} placeholder="Sort By :" defaultValue={sortBy} hoverHeight={"group-hover:h-[111px]"} />
                <Dropdown options={sortOrderOptions} onSelect={setSortOrder} placeholder="Sort Order :" defaultValue={sortOrder} hoverHeight={"group-hover:h-[74px]"} />
            </div> */}

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
            <Modal id="myHistoryDetails" title="View Details" width="max-w-[40rem]">
                <ViewRequest requestData={modalData} />
            </Modal>
        </div >
    );
};

export default MyActivity;