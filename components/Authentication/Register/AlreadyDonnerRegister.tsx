
import UserLogin from './../Login/UserLogin';
import { SubmitHandler } from "react-hook-form";
import { USER_ROLE } from "../../../constants/role";
import { useState } from "react";
import Form from "../../ReusableComponent/Form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../ReusableComponent/Form/FormInput";
import { alreadyUserRegisterPasswordSchema, alreadyUserRegisterSchema } from "../../../schemas/registerSchems";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useCheckAlreadyDonnerMutation, useUpdateUserPasswordMutation } from '../../../redux/api/userApi';
import toast from 'react-hot-toast';
import { RiCheckboxCircleLine, RiCloseCircleLine } from 'react-icons/ri';


type FormValues = {
    phoneNumber: string;
    password: string;
};


const AlreadyDonnerRegister = () => {
    const [checkExist, setCheckExist] = useState<boolean>(false)
    const [checkError, setCheckError] = useState<boolean>(null)
    const [storeUserInfo, setStoreUserInfo] = useState<any>(null)

    const [checkAlreadyDonner]: any = useCheckAlreadyDonnerMutation()
    const [updateUserPassword, { error }]: any = useUpdateUserPasswordMutation()

    const router = useRouter()
    console.log(error)
    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            const res = await checkAlreadyDonner({ ...data }).unwrap();

            if (res.length === 0) {
                setCheckError(true)
            }
            else if (res[0].role === USER_ROLE.USER) {
                toast.error("Oh Snap! Already you are a registered user");
                setCheckExist(false)
                setCheckError(false)
            }
            else if (res[0].role === USER_ROLE.DONNER) {
                setStoreUserInfo(res[0])
                setCheckExist(true)
                setCheckError(false)
            }
            else {
                toast.error('Donner created failed')
            }
        }
        catch (err: any) {
            console.log(err);
        }
    };


    const onPassChange: SubmitHandler<FormValues> = async (data: any) => {
        try {
            data.phoneNumber = storeUserInfo.phoneNumber
            data.userId = storeUserInfo.userId
            delete (data.confirmPassword)
            const res = await updateUserPassword({ ...data }).unwrap();
            if (res?.id) {
                toast.success("User Created Success")
                router.push("/login")
            }
        }
        catch (err: any) {
            console.log(err);
        }
    };
    return (
        <div className="rounded-md mt-2 ">
            {/* <p onClick={() => setCheckExist(!checkExist)}>forCheck</p> */}
            <Form submitHandler={onSubmit} resolver={yupResolver(alreadyUserRegisterSchema)}>
                <div className="relative">
                    <div className='min-w-full px-1'>
                        <FormInput
                            name="phoneNumber"
                            type="number"
                            className=" w-full"
                            label="Full name"
                            placeholder="Enter your phoneNumber"
                            required
                        />
                    </div>
                    <div className={`${checkError === null ? "hidden" : "visible"}`}>
                        {checkError ?
                            <RiCloseCircleLine className="text-primary-red text-xl absolute top-12 right-5" />
                            :
                            <RiCheckboxCircleLine className="text-success text-xl absolute top-12 right-5" />
                        }
                    </div>
                </div>
                {checkError && <p className='text-primary-red text-xs px-1'>User does not exist with this phone number</p>}
                {!checkExist && <button className="button-transition primary-red-button py-2 w-full mt-5 px-1"> Check</button>}
            </Form>
            <Form submitHandler={onPassChange} resolver={yupResolver(alreadyUserRegisterPasswordSchema)}>

                <div className={` overflow-hidden px-1`}>
                    <div className={`duration-300 ${checkExist ? 'max-h-[300px] ' : "max-h-0 "} `}>

                        <div className='mb-1 w-full'>
                            <FormInput
                                name="password"
                                type="password"
                                className=" w-full"
                                label="Password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className='mb-1 w-full'>
                            <FormInput
                                name="confirmPassword"
                                type="password"
                                className=" w-full"
                                label="Confirm"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button className="button-transition primary-red-button py-2 w-full mt-4 px-1">Submit</button>
                    </div>
                </div>

            </Form>
            <div className="text-primary-text flex gap-3 justify-between items-center text-center mt-2.5">
                <p className="text-sm">Already I have an account? <Link href="/login" className="hover:text-primary-red duration-300 underline cursor-pointer text-center">Login</Link></p>
            </div>
        </div>
    );
};

export default AlreadyDonnerRegister;