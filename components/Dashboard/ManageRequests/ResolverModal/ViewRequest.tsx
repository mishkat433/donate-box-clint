import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { RiArrowRightCircleLine } from 'react-icons/ri';

const ViewRequest = ({ nextHandle = null, requestData }) => {
    const patientInfo = [
        { label: "Patient Name", key: "patientName" },
        { label: "Patient Age", key: "patientAge" },
        { label: "Patient Blood Group", key: "patientBG" },
        { label: "Patient Phone", key: "patientPhone" },
        { label: "Date of Need Blood", key: "dateOfNeedBlood" },
        { label: "Time of Need Blood", key: "timeOfNeedBlood" },
    ];
    const medicalInfo = [
        { label: "Medical Name", key: "medicalName" },
        { label: "Division", key: "division" },
        { label: "District", key: "district" },
        { label: "Area", key: "area" },
        { label: "Address", key: "medicalAddress" },
    ]
    const applicantsInfo = [
        { label: "Relation With Patient", key: "requestFor" },
        { label: "Applicant Name", key: "applicantName" },
        { label: "Applicant Phone", key: "applicantPhone" },
    ]
    const othersInfo = [
        { label: "Emergency Phone", key: "emergencyPhone" },
        { label: "Status", key: "status" },
        { label: "Reject Reason", key: "rejectReason" },
        { label: "Request Id", key: "_id" },
        { label: "Create Date", key: "createdAt" },
        { label: "Update Date", key: "updatedAt" }
    ];
    const donnerInfo = [
        { label: "Donner Id", key: "donner_Data?.userId" },
        { label: "Name", key: "donner_Data?.fullName" },
        { label: "Phone", key: "donner_Data?.phoneNumber" },
        { label: "Blood Group", key: "donner_Data?.bloodGroup" },
        { label: "Gender", key: "donner_Data?.gender" },
        { label: "Division", key: "donner_Data?.division" },
        { label: "District", key: "donner_Data?.district" },
        { label: "Area", key: "donner_Data?.area" },
        { label: "Address", key: "donner_Data?.address" },

    ];
    const adminInfo = [
        { label: "Admin Id", key: "assigner_Data.adminId" },
        { label: "Name", key: "assigner_Data.fullName" },
        { label: "Phone Number", key: "assigner_Data.phoneNumber" },
        { label: "Division", key: "assigner_Data.division" },
        { label: "District", key: "assigner_Data.district" },
    ];

    return (
        <div className='my-2'>
            <h4 className='font-bold pb-1 text-center text-primary-red'>View Request Details </h4>
            <div className='rounded-md mx-auto shadow-md border-1 border-border-color p-2 '>
                <h4 className='font-bold text-sm text-view'>Patient Information : </h4>
                <div className='rounded-md mx-auto border-1 border-border-color p-2'>
                    <table className="table-auto w-full text-sm ">
                        <tbody>
                            {patientInfo.map((heading) => (
                                <tr key={heading.key} className="grid grid-cols-10">
                                    <td className="font-semibold  col-span-5">{heading.label}</td>
                                    <td className="col-span-1">:</td>
                                    <td className='col-span-4'>
                                        {heading.key === "dateOfNeedBlood"
                                            ? requestData && format(new Date(requestData[heading.key]), 'dd-MMM-yyyy')
                                            : requestData && (requestData[heading.key] !== undefined && requestData[heading.key] !== null)
                                                ? requestData[heading.key].toString()
                                                : "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h4 className='font-bold text-sm mt-2  text-view'>Medical Information: </h4>
                <div className='rounded-md mx-auto border-1 border-border-color p-2'>
                    <table className="table-auto w-full text-sm">
                        <tbody>
                            {medicalInfo.map((heading) => (
                                <tr key={heading.key} className="grid grid-cols-10">
                                    <td className="font-semibold col-span-5">{heading.label}</td>
                                    <td className="col-span-1">:</td>
                                    <td className='col-span-4'>
                                        {heading.key === "createdAt" || heading.key === "updatedAt"
                                            ? requestData && format(new Date(requestData[heading.key]), 'dd-MMM-yyyy')
                                            : requestData && (requestData[heading.key] !== undefined && requestData[heading.key] !== null)
                                                ? requestData[heading.key].toString()
                                                : "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h4 className='font-bold text-sm mt-2 text-view'>Applicants Information: </h4>
                <div className='rounded-md mx-auto border-1 border-border-color p-2'>
                    <table className="table-auto w-full text-sm">
                        <tbody>
                            {applicantsInfo.map((heading) => (
                                <tr key={heading.key} className="grid grid-cols-10">
                                    <td className="font-semibold col-span-5">{heading.label}</td>
                                    <td className="col-span-1">:</td>
                                    <td className='col-span-4'>
                                        {heading.key === "createdAt" || heading.key === "updatedAt"
                                            ? requestData && format(new Date(requestData[heading.key]), 'dd-MMM-yyyy')
                                            : requestData && requestData[heading.key] !== undefined
                                                ? requestData[heading.key].toString()
                                                : "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h4 className='font-bold text-sm mt-2 text-view'>Others Information: </h4>
                <div className='rounded-md mx-auto border-1 border-border-color p-2'>
                    <table className="table-auto w-full text-sm">
                        <tbody>
                            {othersInfo.map((heading) => (
                                <tr key={heading.key} className="grid grid-cols-10">
                                    <td className="font-semibold col-span-5">{heading.label}</td>
                                    <td className="col-span-1">:</td>
                                    <td className='col-span-4'>
                                        {heading.key === "createdAt" || heading.key === "updatedAt"
                                            ? requestData && format(new Date(requestData[heading.key]), 'dd-MMM-yyyy')
                                            : requestData && (requestData[heading.key] !== undefined && requestData[heading.key] !== null)
                                                ? requestData[heading.key].toString()
                                                : "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {requestData?.donner_Data &&
                    <div>
                        <h4 className='font-bold text-sm mt-2 text-view'>Donner Information: </h4>
                        <div className='rounded-md mx-auto border-1 border-border-color p-2'>
                            <table className="table-auto w-full text-sm">
                                <tbody>
                                    {donnerInfo.map((heading) => (
                                        <tr key={heading.key} className="grid grid-cols-10">
                                            <td className="font-semibold col-span-5">{heading.label}</td>
                                            <td className="col-span-1">:</td>
                                            <td className='col-span-4'>
                                                {heading.key === "createdAt" || heading.key === "updatedAt"
                                                    ? requestData && format(new Date(requestData[heading.key]), 'dd-MMM-yyyy')
                                                    : heading.key.startsWith("donner_Data")
                                                        ? requestData && requestData.donner_Data
                                                            ? requestData.donner_Data[heading.key.split(".")[1]] ?? "N/A"
                                                            : "N/A"
                                                        : requestData && requestData[heading.key] !== undefined
                                                            ? requestData[heading.key].toString()
                                                            : "N/A"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {requestData?.assigner_Data &&
                    <div>
                        <h4 className='font-bold text-sm mt-2 text-view'>Assigner Information: </h4>
                        <div className='rounded-md mx-auto border-1 border-border-color p-2'>
                            <table className="table-auto w-full text-sm">
                                <tbody>
                                    {adminInfo.map((heading) => (
                                        <tr key={heading.key} className="grid grid-cols-10">
                                            <td className="font-semibold col-span-5">{heading.label}</td>
                                            <td className="col-span-1">:</td>
                                            <td className='col-span-4'>
                                                {heading.key === "createdAt" || heading.key === "updatedAt"
                                                    ? requestData && format(new Date(requestData[heading.key]), 'dd-MMM-yyyy')
                                                    : heading.key.startsWith("assigner_Data")
                                                        ? requestData && requestData.assigner_Data
                                                            ? requestData.assigner_Data[heading.key.split(".")[1]] ?? "N/A"
                                                            : "N/A"
                                                        : requestData && requestData[heading.key] !== undefined
                                                            ? requestData[heading.key].toString()
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
            {
                nextHandle !== null &&
                <div className='flex justify-end'>
                    <button onClick={() => nextHandle(true)} type='button' className="button-transition primary-red-button py-2 px-2.5 w-2/5 mt-4 flex justify-center items-center gap-2">Next <RiArrowRightCircleLine className='text-lg' /></button>
                </div>
            }
        </div >
    );
};

export default ViewRequest;