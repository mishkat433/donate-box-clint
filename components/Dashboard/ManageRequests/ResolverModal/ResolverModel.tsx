import React, { useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import Form from '../../../ReusableComponent/Form/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { assignDonnerSchema } from '../../../../schemas/needDonner';
import { getUserInfo } from '../../../../services/auth.service';
import ResolverModalForm from './ResolverModalForm';
import { RiArrowLeftCircleLine } from 'react-icons/ri';
import ViewRequest from './ViewRequest';
import { useAssignDonnerMutation } from '../../../../redux/api/needDonnerApi';
import { REQUEST_HANDLER_STATUS2 } from '../../../../types';

type FormValues = {
    adminId: string;
    donnerId: string;
    status: string;
    dateOfNeedBlood: number;
    rejectReason: string;
};

const ResolverModel = ({ reqData }: any) => {
    const [nextHandle, setNextHandle] = useState(false)
    const [assignDonner] = useAssignDonnerMutation()
    const [requestFor, setRequestFor] = useState()
    const userInfo: any = getUserInfo()

    const sendRequestButtonRef = useRef(null);

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            delete data.district
            delete data.division
            delete data.area

            data.id = reqData?._id
            data.adminId = userInfo?.adminId
            data.dateOfNeedBlood = reqData.dateOfNeedBlood

            if (data.status === REQUEST_HANDLER_STATUS2.REJECT) {
                delete data.donnerId
                delete data.dateOfNeedBlood
            }
            else {
                delete data.rejectReason
            }

            const res = await assignDonner({ ...data }).unwrap();
            if (res?.success) {
                toast.success(res?.message)
                if (res?.success) {
                    sendRequestButtonRef.current.click();
                }
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
        <>
            {nextHandle ?
                <div className='my-3 rounded-md mx-auto shadow-md border-1 border-border-color p-2 animate-fade-right animate-once '>
                    <Form submitHandler={onSubmit} resolver={yupResolver(assignDonnerSchema)} >
                        <ResolverModalForm reqData={reqData} />
                        <div className='flex w-full gap-3'>
                            <button onClick={() => setNextHandle(false)} type='button' className="button-transition primary-red-button py-2 px-2.5 w-full flex justify-center items-center gap-2"><RiArrowLeftCircleLine className='text-lg' /> Previous</button>
                            <div className='w-full'>
                                <button className="button-transition primary-red-button w-full py-2 px-2.5 ">Resolved Request</button>
                                <label ref={sendRequestButtonRef} htmlFor="requestResolver" className="w-full"></label>
                            </div>
                        </div>
                    </Form >
                </div>
                :
                <ViewRequest requestData={reqData} nextHandle={setNextHandle} />

            }
        </ >
    );
};

export default ResolverModel;