import { IAdmin, IUser } from "../../../types";
import { format } from 'date-fns';

interface ViewUserProps {
    userData: IUser | IAdmin;
}

const ViewUser = ({ userData }: ViewUserProps) => {
    const headings = [
        { label: "Name", key: "fullName" },
        { label: "Id", key: `${userData?"userId": "adminId"}` },
        { label: "Role", key: "role" },
        { label: "Phone Number", key: "phoneNumber" },
        { label: "Blood Group", key: "bloodGroup" },
        { label: "Gender", key: "gender" },
        { label: "Division", key: "division" },
        { label: "Address", key: "address" },
        { label: "Blood Donner", key: "isBloodDonner" },
        { label: "Banned", key: "isBanned" },
        { label: "Verified", key: "verified" },
        { label: "Create Date", key: "createdAt" },
        { label: "Update Date", key: "updatedAt" }
    ];

    return (
        <div className="border-1 border-border-color my-2 p-2 rounded-md">
            <table className="table-auto w-full text-sm">
                <tbody>
                    {headings.map((heading) => (
                        <tr key={heading.key} className="">
                            <td className="font-semibold">{heading.label}</td>
                            <td className="">:</td>
                            <td>
                                {heading.key === "createdAt" || heading.key === "updatedAt"
                                    ? userData && format(new Date(userData[heading.key]), 'dd-MMM-yyyy')
                                    : userData && userData[heading.key] !== undefined
                                        ? userData[heading.key].toString()
                                        : "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewUser;
