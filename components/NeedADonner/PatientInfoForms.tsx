import React, { useEffect } from 'react';
import FormInput from '../ReusableComponent/Form/FormInput';
import { bloodGroupOptions, genderOptions } from '../../constants/global';
import FormSelectField from '../ReusableComponent/Form/FormSelectField';
import { bloodRequestFor, patientTypeOptions } from '../../constants/requestDonner';
import { useFormContext, useWatch } from 'react-hook-form';
import { getUserInfo } from '../../services/auth.service';
import { useLoginUserDataQuery } from '../../redux/api/authApi';

type FormValues = {
    requestFor: string;
}


const PatientInfoForms = ({ setRequestFor }: any) => {

    const { control } = useFormContext<FormValues>();
    const requestFor = useWatch({ control, name: "requestFor", });


    useEffect(() => {
        setRequestFor(requestFor)
    }, [requestFor, setRequestFor]);

    return (
        <div>
            <h4 className="font-bold mb-1">Patient Info : </h4>

            <div className=" p-3  rounded-md mx-auto shadow-md border-1 border-border-color mb-3">
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormSelectField
                            name="requestFor"
                            className="w-full"
                            label="Who is patient"
                            options={bloodRequestFor}
                            // defaultValue={ss.requestFor}
                            required
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="patientName"
                            type="text"
                            className=" w-full"
                            label="Patient Name"
                            placeholder="Enter patient name"
                            required
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="patientAge"
                            type="number"
                            className=" w-full"
                            label="Patient Age"
                            placeholder="Enter patient age"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormSelectField
                            name="patientBG"
                            className="w-full"
                            label="Select Patient Blood Group"
                            options={bloodGroupOptions}
                            required
                        // defaultValue={ss.patientBG}
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormSelectField
                            name="patientGender"
                            className="w-full"
                            label="Select patient gender"
                            options={genderOptions}
                            required
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormSelectField
                            name="patientType"
                            className="w-full"
                            label="Select  patient type"
                            options={patientTypeOptions}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6">

                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="patientPhone"
                            type="number"
                            className=" w-full"
                            label="Patient Phone Number ( if not available, use guardian phone number)"
                            placeholder="Enter patient phone number"
                            required
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="emergencyPhone"
                            type="number"
                            className=" w-full"
                            label="Emergency Phone Number"
                            placeholder="Enter emergency phone number"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientInfoForms;