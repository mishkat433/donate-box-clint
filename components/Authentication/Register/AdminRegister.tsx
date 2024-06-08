import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../ReusableComponent/Form/Form";
import FormInput from "../../ReusableComponent/Form/FormInput";
import { adminRegisterSchema } from "../../../schemas/registerSchems";
import { SubmitHandler } from "react-hook-form";
import FormSelectField from "../../ReusableComponent/Form/FormSelectField";
import { bloodGroupOptions, divisionOptions, genderOptions } from "../../../constants/global";
import { useState } from "react";
import Link from 'next/link';
import { BLOOD_GROUP_NAME } from "../../../constants/bloodGroup";
import { GENDER } from "../../../constants/gender";
import { useCreateAdminMutation } from "../../../redux/api/adminApi";
import { USER_ROLE } from "../../../constants/role";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type FormValues = {
    fullName: string;
    address: string;
    bloodGroup: BLOOD_GROUP_NAME;
    confirmPassword: string;
    division?: string
    gender: GENDER;
    secretKey: string;
    phoneNumber: string;
    password: string;
};


const AdminRegister = () => {
    const [ready, setReady] = useState<boolean>(true)
const router= useRouter()
    const [createAdmin]=useCreateAdminMutation()


    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            data.role=USER_ROLE.ADMIN
            const res = await createAdmin({ ...data }).unwrap();
            if(res.success) {
                toast.success(res?.message);
                router.push("/login")
            }
            else{
                toast.error(res?.message);
            }
        }
        catch (err: any) {
            toast.error(err?.message);
            if (err?.message.startsWith("E11000 duplicate")) {
                toast.error("Admin created failed. already have an account with this phone number")
            }
            console.log(err);
        }
    };


    return (
        <div className="h-full">
            <Form submitHandler={onSubmit} resolver={yupResolver(adminRegisterSchema)}>
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
                    <div className=' w-full'>
                        <FormSelectField
                            name="division"
                            className="w-full"
                            label="Select Division"
                            options={divisionOptions}
                            required
                        />
                    </div>
                    <div className=' w-full'>
                        <FormInput
                            name="address"
                            type="text"
                            className=" w-full"
                            label="Address"
                            placeholder="Enter your address without division"
                            required
                        />
                    </div>

                </div>
                <div className="flex gap-6 ">
                    <div className=' w-full'>
                        <FormSelectField
                            name="gender"
                            className="w-full"
                            label="Select Gender"
                            options={genderOptions}
                            required
                        />
                    </div>
                    <div className=' w-full'>
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
                    <div className=' w-full'>
                        <FormInput
                            name="password"
                            type="password"
                            className=" w-full"
                            label="Password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className=' w-full'>
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
                <div className='w-full'>
                    <FormInput
                        name="secretKey"
                        type="password"
                        className=" w-full"
                        label="Admin Secret Key"
                        placeholder="Enter admin secret key"
                        required
                    />
                </div>
                <label className="cursor-pointer label justify-start p-0 m-0 mt-2" onClick={() => setReady(!ready)} >
                    <input name="isBloodDonner" type="checkbox" defaultChecked={ready} className="checkbox checkbox-info" />
                    <span className="label-text ml-3 font-semibold text-primary-text">I am ready for donate my blood & I accept
                        <Link className="font-bold text-primary-red" href={"/"}>Terms & conditions</Link></span>
                </label>
                <button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4">Submit</button>
            </Form>
        </div>
    );
};

export default AdminRegister;