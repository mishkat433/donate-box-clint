import { useState } from "react";
import { useAllContactMessageQuery, useContactMessageDeleteMutation } from "../../../../redux/api/contactApi";
import { useDebounced } from "../../../../redux/hooks";
import Swal from "sweetalert2";
import { RiClockwise2Line, RiDeleteBinLine, RiEditBoxLine, RiEyeLine, RiLoopRightLine, RiPassPendingLine } from "react-icons/ri";
import Link from "next/link";
import SearchBar from "../../../ReusableComponent/Searchbar";
import ReusableTable from "../../../ReusableComponent/Table/ReusableTable";
import { format } from "date-fns";
import Modal from "../../../ReusableComponent/Modal";
import ViewContactDetails from "../ViewContactDetails";
import { IContact } from "../../../../types";
import Dropdown from "../../../ReusableComponent/Dropdown/Dropdown";
import { contactHistorySortByOption } from "../../../../lib/ContactHistoryOptions";
import { dataLimitOptions, sortOrderOptions } from "../../../../lib/Options";
import SolvedContactIssus from "../SolvedContactIssus";
import { USER_ROLE } from "../../../../constants/role";
import { getUserInfo } from "../../../../services/auth.service";


const SupportPendingMessages = () => {
    const [modalData, setModalData] = useState<IContact | null>(null);
    const query: Record<string, any> = {};
    const [contactMessageDelete] = useContactMessageDeleteMutation()

    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("asc");
    const [searchTerm, setSearchTerm] = useState<string>("");

    query["limit"] = limit;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["status"] = ["ON_DISCUSSION", 'PENDING'];
    query["sortOrder"] = sortOrder;

    const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
    }


    const deleteUserRequest = ({ _id }): void => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to Delete this contact info?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Delete It!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res: any = await contactMessageDelete(_id).unwrap();
                    if (res?.data?.success) {
                        Swal.fire({
                            title: "Deleted!",
                            text: `${res?.data?.message}`,
                            icon: "success",
                            timer: 1500
                        });
                    }
                }
            });
        } catch (err: any) {
            console.log(err);
        }
    };


    const { data, isLoading, refetch } = useAllContactMessageQuery({ ...query }, { refetchOnMountOrArgChange: true })

    const pageCount = Array.from({ length: Math.ceil(data?.meta?.total / data?.meta?.limit) }, (_, i) => ({ value: i + 1, label: i + 1 }));


    const columns = ['SL', 'Name', 'Email', 'Phone', 'Subject', 'Date & time', 'Negotiator Id', 'Status'];

    const tableRow = (item: IContact, index: number) => (
        <>
            <td className={``}>{(page - 1) * limit + index + 1} </td>
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.phoneNumber}</td>
            <td>{item?.subject.slice(0, 20)}...</td>
            <td>{format(new Date(item.createdAt), "dd-MMM-yyyy HH:mm'")}</td>
            <td className="">{item?.resolverId ? item?.resolverId : "N/A"}</td>
            <td className={` ${item?.status === "PENDING" ? 'text-primary-red' : 'text-view'} `}>{item.status}</td>
        </>
    );

    const actions: any = [
        { label: "View", icon: <RiEyeLine className="dashboard-icon-style text-view cursor-pointer" title="View" />, onClick: setModalData, showMOdal: { name: "contactDetails", status: true } },
        { label: "Edit", icon: <RiEditBoxLine className="dashboard-icon-style text-edit cursor-pointer" title="edit" />, onClick: setModalData, showMOdal: { name: "solvedIssue", status: true } },
    ];

    if ((getUserInfo() as { role: USER_ROLE })?.role === "SUPER_ADMIN") {
        actions.push({
            label: "Delete",
            icon: <RiDeleteBinLine className="dashboard-icon-style text-primary-red cursor-pointer" title="delete" />,
            onClick: deleteUserRequest,
        });
    }

    return (
        <div className='animate-fade animate-once'>
            <div className="p-3 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiClockwise2Line className="text-primary-red" />
                    <h3>Support History</h3>
                </div>
                <Link href="/dashboard/manage-support/support-history" className="p-1.5 primary-red-button flex items-center gap-1"><RiPassPendingLine />Support History</Link>
            </div>
            <div className=" p-2 flex justify-between items-center gap-2 rounded-md bg-primary-red text-white-text shadow-md mb-5">
                <p title="reload"><RiLoopRightLine onClick={async () => await refetch()} className={`text-xl ${isLoading && "animate-spin"}`} /></p>
                <div className="w-3/5 text-primary-text"><SearchBar placeholderText={"Search..."} searchInput={setSearchTerm} /></div>
                <Dropdown options={contactHistorySortByOption} onSelect={setSortBy} placeholder="Sort By :" defaultValue={sortBy} hoverHeight={"group-hover:h-[111px]"} />
                <Dropdown options={sortOrderOptions} onSelect={setSortOrder} placeholder="Sort Order :" defaultValue={sortOrder} hoverHeight={"group-hover:h-[74px]"} />
            </div>

            <div className="shadow-md rounded-md overflow-auto ">
                <ReusableTable
                    columns={columns}
                    data={data?.data}
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
                    <button onClick={() => setPage(page - 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.meta?.prevPage === null ? true : false}>«</button>
                    <div className="join-item btn bg-primary-red text-white-text hover:bg-primary-red px-0">
                        <Dropdown options={pageCount} onSelect={setPage} placeholder={`Page : ${page}`} defaultValue={page} hoverHeight={"group-hover:h-[81px]"} />
                    </div>
                    <button onClick={() => setPage(page + 1)} className={`join-item btn hover:bg-primary-red text-white-text bg-primary-red  `} disabled={data?.meta?.nextPages === null ? true : false}>»</button>
                </div>
            </div>

            <Modal id="contactDetails" title="View Contact Details" width="max-w-[40rem]" >
                <ViewContactDetails contactData={modalData} />
            </Modal>

            <Modal id="solvedIssue" title="Solved Issues" width="max-w-[40rem]" >
                <SolvedContactIssus contactData={modalData} />
            </Modal>
        </div >
    );
};

export default SupportPendingMessages;