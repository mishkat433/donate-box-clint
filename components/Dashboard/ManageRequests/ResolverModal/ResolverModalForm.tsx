import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import FormSelectField from '../../../ReusableComponent/Form/FormSelectField';
import { requestHandlerOptions, requestHandlerOptions2 } from '../../../../lib/Options';
import { REQUEST_HANDLER_STATUS } from '../../../../types';
import FormTextArea from '../../../ReusableComponent/Form/FormTextArea';
import { divisionOptions } from '../../../../constants/global';
import { locationApi } from '../../../../redux/api/getLocation/getLocation';
import DistrictField from '../../../ReusableComponent/Form/DistrictField';
import AreaField from '../../../ReusableComponent/Form/AreaField';


type FormValues = {
    donnerId: string;
    status: string;
    dateOfNeedBlood: number;
    rejectReason: string;
};

const ResolverModalForm = () => {
    const [divisionOptions, setDivisionOptions] = useState<any[]>([]);

    const { control } = useFormContext<FormValues>();
    const status = useWatch({ control, name: "status", });

    // useEffect(() => {
    //     setRequestFor(requestFor)
    // }, [requestFor, setRequestFor]);
    return (
        <div className=''>
            <div className=" ">
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormSelectField
                            name="status"
                            className="w-full"
                            label="Request Status"
                            options={requestHandlerOptions2}
                            required
                        />
                    </div>
                </div>
                {status === REQUEST_HANDLER_STATUS.REJECT ?
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                        <div className='mb-0 md:mb-3 w-full text-xs'>
                            <FormTextArea
                                name="rejectReason"
                                label="Reject Reason"
                                placeholder="Write a reject reason"
                                required
                            />
                        </div>
                    </div> :
                    <div>
                        {status === REQUEST_HANDLER_STATUS.ACCEPT &&
                            <div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                                    <div className='mb-0 md:mb-3 w-full' onClick={async () => setDivisionOptions(await locationApi.getDivision())}>
                                        <FormSelectField
                                            name="division"
                                            className="w-full"
                                            label="Select Division"
                                            options={divisionOptions}

                                        />
                                    </div>
                                    <div className='mb-0 md:mb-3 w-full'>
                                        <DistrictField required={false} />
                                    </div>
                                    <div className='mb-0 md:mb-3 w-full'>
                                        <AreaField />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                                    <div className='mb-0 md:mb-3 w-full'>
                                        <FormSelectField
                                            name="status"
                                            className="w-full"
                                            label="Request Status"
                                            options={requestHandlerOptions}
                                            defaultValue="PENDING"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }

            </div>


        </div >
    );
};

export default ResolverModalForm;