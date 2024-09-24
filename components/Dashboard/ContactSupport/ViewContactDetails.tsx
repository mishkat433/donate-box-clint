import { format } from "date-fns";
import { IContact } from "../../../types";
import { RiArrowRightCircleLine } from "react-icons/ri";

interface ContactDetailsProps {
    contactData: IContact;
}

const ViewContactDetails: React.FC<ContactDetailsProps> = ({ contactData }) => {

    const messageInfo = [
        { label: "messageId", key: "_id" },
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Phone Number", key: "phoneNumber" },
        { label: "Subject", key: "subject" },
        { label: "Message", key: "message" },
        { label: "Date & Time", key: "createdAt" },
        { label: "Status", key: "status" },
    ];

    const adminInfo = [
        { label: "Admin Id", key: "resolver_Data.adminId" },
        { label: "Name", key: "resolver_Data.fullName" },
        { label: "Phone Number", key: "resolver_Data.phoneNumber" },
        { label: "Division", key: "resolver_Data.division" },
        { label: "District", key: "resolver_Data.district" },
        { label: "Address", key: "resolver_Data.address" },
        { label: "Area", key: "resolver_Data.area" },
        { label: "Role", key: "resolver_Data.role" },
        { label: "Solved Date", key: "resolver_Data.createdAt" },
        { label: "Admin Message", key: "resolverMessage" },
    ];

    return (
        <div className='my-2 animate-fade-left animate-once'>
            <div className='rounded-md mx-auto shadow-md border-1 border-border-color p-2 '>
                <h4 className='font-bold text-sm text-view'>Contact Information : </h4>
                <div className='rounded-md mx-auto border-1 border-border-color p-2'>
                    <table className="table-auto w-full text-sm ">
                        <tbody>
                            {messageInfo.map((heading) => (
                                <tr key={heading.key} className="grid grid-cols-10 space-y-1">
                                    <td className="font-semibold  col-span-5">{heading.label}</td>
                                    <td className="col-span-1">:</td>
                                    <td className='col-span-4'>
                                        {heading.key === "createdAt"
                                            ? contactData && format(new Date(contactData.createdAt), "dd-MMM-yyyy HH:mm'")
                                            : contactData && (contactData[heading.key] !== undefined && contactData[heading.key] !== null)
                                                ? contactData[heading.key].toString()
                                                : "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {contactData?.resolverId !== null &&
                    <div>
                        <h4 className='font-bold text-sm mt-2  text-view'>Admin Information: </h4>
                        <div className='rounded-md mx-auto border-1 border-border-color p-2'>
                            <table className="table-auto w-full text-sm">
                                <tbody>
                                    {adminInfo.map((heading) => (
                                        <tr key={heading.key} className="grid grid-cols-10 space-y-1">
                                            <td className="font-semibold col-span-5">{heading.label}</td>
                                            <td className="col-span-1">:</td>
                                            <td className='col-span-4'>
                                                {heading.key === "createdAt" || heading.key === "updatedAt"
                                                    ? contactData && format(new Date(contactData[heading.key]), 'dd-MMM-yyyy')
                                                    : heading.key.startsWith("resolver_Data")
                                                        ? contactData && contactData.resolver_Data
                                                            ? contactData.resolver_Data[heading.key.split(".")[1]] ?? "N/A"
                                                            : "N/A"
                                                        : contactData && contactData[heading.key] !== undefined
                                                            ? contactData[heading.key]?.toString()
                                                            : "N/A"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        </div >
    );
};

export default ViewContactDetails;