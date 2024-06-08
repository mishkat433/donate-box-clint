"use client"

import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Form from '../../ReusableComponent/Form/Form';
import FormInput from '../../ReusableComponent/Form/FormInput';
import { userRegisterSchema } from '../../../schemas/registerSchems';
import FormSelectField from '../../ReusableComponent/Form/FormSelectField';
import { bloodGroupOptions, divisionOptions, genderOptions } from '../../../constants/global';
import Link from 'next/link';
import { USER_ROLE } from '../../../constants/role';
import { useState } from 'react';
import { useCreateUserMutation } from '../../../redux/api/userApi';
import { DIVISION_NAME } from '../../../constants/division';
import { GENDER } from '../../../constants/gender';
import { BLOOD_GROUP_NAME } from '../../../constants/bloodGroup';


type FormValues = {
    fullName: string;
    phoneNumber: string;
    division: DIVISION_NAME;
    address: string;
    gender: GENDER;
    bloodGroup: BLOOD_GROUP_NAME;
    password: string;
    confirmPassword: string;
};


const UserRegister = () => {
    const [ready, setReady] = useState<boolean>(true)
    const [createUser, { error }] = useCreateUserMutation()

    const router = useRouter()

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            data.role = USER_ROLE.USER
            data.isBloodDonner = ready
            const res = await createUser({ ...data }).unwrap();
            if (res?.success) {
                toast.success("Congratulation! now you are a 'Donate Box' member");
                router.push("/login")
            }
        }
        catch (err: any) {
            if (err?.message.startsWith("E11000 duplicate")) {
                toast.error("user created failed. already have an account with this phone number")
            }
            console.log(err);
        }
    };


    return (
        <div className="rounded-md pt-2">
            <Form submitHandler={onSubmit} resolver={yupResolver(userRegisterSchema)}>
                <div className=' w-full'>
                    <FormInput
                        name="fullName"
                        type="text"
                        className=" w-full"
                        label="Full name"
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                <div className='w-full'>
                    <FormInput
                        name="phoneNumber"
                        type="number"
                        className=" w-full"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <div className="flex gap-6 ">
                    <div className='mb-3 w-full'>
                        <FormSelectField
                            name="division"
                            className="w-full"
                            label="Select Division"
                            options={divisionOptions}
                            required
                        />
                    </div>
                    <div className='mb-3 w-full'>
                        <FormInput
                            name="address"
                            type="text"
                            className=" w-full"
                            label="Address"
                            placeholder="Enter your address without division"
                        />
                    </div>

                </div>
                <div className="flex gap-6 ">
                    <div className='mb-3 w-full'>
                        <FormSelectField
                            name="gender"
                            className="w-full"
                            label="Select Gender"
                            options={genderOptions}
                            required
                        />
                    </div>
                    <div className='mb-3 w-full'>
                        <FormSelectField
                            name="bloodGroup"
                            className="w-full"
                            label="Select Blood Group"
                            options={bloodGroupOptions}
                            required
                        />
                    </div>
                </div>
                <div className="flex gap-6 ">
                    <div className='mb-3 w-full'>
                        <FormInput
                            name="password"
                            type="password"
                            className=" w-full"
                            label="Password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className='mb-3 w-full'>
                        <FormInput
                            name="confirmPassword"
                            type="password"
                            className=" w-full"
                            label="Confirm"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                </div>
                <label className="cursor-pointer label justify-start p-0 m-0" onClick={() => setReady(!ready)} >
                    <input name="isBloodDonner" type="checkbox" defaultChecked={ready} className="checkbox checkbox-info" />
                    <span className="label-text ml-3 font-semibold text-primary-text">I am ready for donate my blood & I accept <Link className="font-bold text-primary-red" href={"/"}>Terms & conditions</Link></span>
                </label>
                <button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4">Submit</button>
            </Form>
            <div className="text-primary-text flex gap-3 justify-between items-center text-center mt-2.5">
                <p className="text-sm">Already I have an account? <Link href="/login" className="hover:text-primary-red duration-300 underline cursor-pointer text-center">Login</Link></p>
            </div>
        </div>
    );
};

export default UserRegister;