import React, { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import FormSelectField from '../../../ReusableComponent/Form/FormSelectField';
import { requestHandlerOptions2 } from '../../../../lib/Options';
import { REQUEST_HANDLER_STATUS } from '../../../../types';
import FormTextArea from '../../../ReusableComponent/Form/FormTextArea';
import { locationApi } from '../../../../redux/api/getLocation/getLocation';
import DistrictField from '../../../ReusableComponent/Form/DistrictField';
import AreaField from '../../../ReusableComponent/Form/AreaField';
import { useAllUsersQuery } from '../../../../redux/api/userApi';
import { useDebounced } from '../../../../redux/hooks';
import { getUserInfo } from '../../../../services/auth.service';
import { useLoginUserDataQuery } from '../../../../redux/api/authApi';


type FormValues = {
    donnerId: string;
    status: string;
    dateOfNeedBlood: number;
    rejectReason: string;
    division: string;
    district: string;
    area: string;
};

const ResolverModalForm = () => {
    const [divisionOptions, setDivisionOptions] = useState<any[]>([]);

    const loginAdminInfo: any = getUserInfo()

    const { data: adminData, isLoading: adminLoading, isError }: any = useLoginUserDataQuery(loginAdminInfo?.adminId)

    const { control } = useFormContext<FormValues>();
    const watchData = useWatch({ control, name: ["status", "division", "district", "area"] });

    const query: Record<string, any> = {};

    // const [division, setDivision] = useState<string>(null);
    // const [district, setDistrict] = useState<string>(null);
    // const [sortBy, setSortBy] = useState<string>("");
    // const [sortOrder, setSortOrder] = useState<string>("asc");
    // const [searchTerm, setSearchTerm] = useState<string>("");


    query["division"] = loginAdminInfo?.role !== 'SUPER_ADMIN' ? adminData?.data[0]?.division : null;
    query["district"] = watchData[2];
    query["area"] = watchData[3];

    const { data, isLoading }: any = useAllUsersQuery({ ...query })

    const formattedData = data?.donner?.data?.map(item => ({
        label: ` ${item.fullName}(${item.userId}) ${item.bloodGroup} ${item.phoneNumber} ${item.division},${item.district}`,
        value: item.userId
    }));

    return (
        <div className='animate-fade animate-once'>
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
                {watchData?.includes(REQUEST_HANDLER_STATUS.REJECT) ?
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
                        {watchData?.includes(REQUEST_HANDLER_STATUS.ACCEPT) &&
                            <div>
                                {/* <div>
                                    <p className='text-sm text-edit'>Filter Donner :</p>
                                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 border-1 border-border-color p-1 rounded-md ">
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
                                </div> */}
                                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                                    <div className='mb-0 md:mb-3 w-full'>
                                        <FormSelectField
                                            name="donnerId"
                                            className="w-full"
                                            label="Select Donner"
                                            options={formattedData}
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