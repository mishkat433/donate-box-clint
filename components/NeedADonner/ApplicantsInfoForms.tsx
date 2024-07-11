import React from 'react';
import FormInput from '../ReusableComponent/Form/FormInput';

const ApplicantsInfoForms = () => {
    return (
        <div>
            <h4 className="font-bold mb-1">Applicants Info : </h4>
            <div className=" p-3  rounded-md mx-auto shadow-md border-1 border-border-color mb-3">
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="applicantName"
                            type="text"
                            className=" w-full"
                            label="Applicant Name"
                            placeholder="Enter applicant name"
                            required
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="applicantPhone"
                            type="text"
                            className=" w-full"
                            label="Applicant Phone"
                            placeholder="Enter applicant Phone"
                            required
                        />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ApplicantsInfoForms;