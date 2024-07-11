import React, { useState } from 'react';
import FormInput from '../ReusableComponent/Form/FormInput';
import FormSelectField from '../ReusableComponent/Form/FormSelectField';
import { divisionOptions } from '../../constants/global';
import { locationApi } from '../../redux/api/getLocation/getLocation';
import AreaField from '../ReusableComponent/Form/AreaField';
import DistrictField from '../ReusableComponent/Form/DistrictField';

const MedicalInfoForms = () => {
    const [divisionOptions, setDivisionOptions] = useState<any[]>([]);
    return (
        <div>
            <h4 className="font-bold mb-1">Medical Info : </h4>
            <div className=" p-3  rounded-md mx-auto shadow-md border-1 border-border-color mb-3">
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="medicalName"
                            type="text"
                            className=" w-full"
                            label="Medical Name"
                            placeholder="Enter medical name"
                            required
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="dateOfNeedBlood"
                            type="text"
                            className=" w-full"
                            label="Need Blood Date"
                            placeholder="Enter medical name"
                            required
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="timeOfNeedBlood"
                            type="text"
                            className=" w-full"
                            label="Need Blood time"
                            placeholder="Enter medical name"

                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-0 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full' onClick={async () => setDivisionOptions(await locationApi.getDivision())}>
                        <FormSelectField
                            name="division"
                            className="w-full"
                            label="Select Division"
                            options={divisionOptions}
                            required
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <DistrictField />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <AreaField />
                    </div>

                </div>
                <div className="flex flex-col md:flex-row gap-0 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="medicalAddress"
                            type="text"
                            className=" w-full"
                            label="Medical Address"
                            placeholder="Enter your medical address"
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalInfoForms;