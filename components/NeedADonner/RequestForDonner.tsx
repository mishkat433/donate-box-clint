"use client"

import { BLOOD_GROUP_NAME } from "../../constants/bloodGroup";
import { useRequestForDonnerMutation } from "../../redux/api/needDonnerApi";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import DonateHeader from "../ReusableComponent/DonateHeader";
import Form from "../ReusableComponent/Form/Form";
import { yupResolver } from "@hookform/resolvers/yup";

import { needDonnerSchema } from "../../schemas/needDonner";
import { GENDER } from "../../constants/gender";
import PatientInfoForms from "./PatientInfoForms";
import MedicalInfoForms from "./MedicalInfoForms";
import { useEffect, useState } from "react";
import ApplicantsInfoForms from "./ApplicantsInfoForms";
import { BLOOD_REQUEST_FOR } from "../../constants/requestDonner";
import { useRouter } from "next/navigation";
import Link from "next/link";


type FormValues = {
    patientName: string;
    patientPhone: string;
    patientBG: BLOOD_GROUP_NAME;
    patientAge: number;
    patientGender: GENDER;
    patientType: string;

    medicalName: string;
    division: string;
    district: string;
    area: string;
    medicalAddress: string;
    dateOfNeedBlood: string;
    timeOfNeedBlood?: string;
    requestFor: BLOOD_REQUEST_FOR;
    applicantName: string;
    applicantPhone: string;
    emergencyPhone: string;
};

const RequestForDonner = () => {
    const [disabler, setDisabler] = useState<boolean>(false)
    const [requestForDonner, { isLoading }] = useRequestForDonnerMutation()
    const [requestFor, setRequestFor] = useState()

    const router = useRouter()

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            if (requestFor === BLOOD_REQUEST_FOR.Me) {
                data.applicantName = data.patientName
                data.applicantPhone = data.patientPhone
            }
            data.patientAge = Number(data.patientAge)
            const res = await requestForDonner({ ...data }).unwrap();
            if (res?.success) {
                setDisabler(true)
                toast.success(res?.message)
                // router.push("/request/myRequests")
            }
        }
        catch (err: any) {
            if (err.message?.startsWith("E11000 duplicate")) {
                return toast.error("Already used this phone number")
            }
            toast.error(err?.message)
            console.log(err);
        }
    };

    return (
        <div className="container mx-auto my-4 px-1 animate-fade-down animate-once">
            <DonateHeader content={"REQUEST FOR A BLOOD DONNER"} />
            <div className="my-6 p-3 md:p-4  rounded-md  border-1 border-border-color">
                <Form submitHandler={onSubmit} resolver={yupResolver(needDonnerSchema)} >
                    <PatientInfoForms setRequestFor={setRequestFor} />
                    <MedicalInfoForms />
                    {requestFor !== BLOOD_REQUEST_FOR.Me && <ApplicantsInfoForms />}
                    {isLoading ?
                        <label className="flex justify-end" ><button disabled={disabler} className=" bg-primary-red text-white-text rounded-md py-2 px-2.5 w-2/5 mt-4">Loading...</button></label>
                        :
                        <div>
                            {disabler ?
                                <label className="flex justify-end" ><Link href={'/request/myRequests'} className=" button-transition primary-red-button py-2 px-2.5 w-2/5 mt-4">My Requests </Link></label>
                                :
                                <label className="flex justify-end" ><button className="button-transition primary-red-button py-2 px-2.5 w-2/5 mt-4"> Submit</button></label>
                            }
                        </div>
                    }
                </Form>
            </div>
        </div>
    );
};

export default RequestForDonner;