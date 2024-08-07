import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../ReusableComponent/Form/Form";
import FormInput from "../../ReusableComponent/Form/FormInput";
import { adminRegisterSchema } from "../../../schemas/registerSchemas";
import { SubmitHandler, useFormContext, useWatch } from "react-hook-form";
import FormSelectField from "../../ReusableComponent/Form/FormSelectField";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { BLOOD_GROUP_NAME } from "../../../constants/bloodGroup";
import { GENDER } from "../../../constants/gender";
import { useCreateAdminMutation } from "../../../redux/api/adminApi";
import { USER_ROLE } from "../../../constants/role";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { locationApi } from "../../../redux/api/getLocation/getLocation";
import DistrictField from "../../ReusableComponent/Form/DistrictField";
import AreaField from "../../ReusableComponent/Form/AreaField";

type FormValues = {
    fullName: string;
    address: string;
    bloodGroup: BLOOD_GROUP_NAME;
    confirmPassword: string;
    division: string;
    district: string;
    area: string;
    gender: GENDER;
    secretKey: string;
    phoneNumber: string;
    password: string;
};
interface FormInputs {
    firstName: string
    lastName: string
}

const AdminRegister = () => {
    const [ready, setReady] = useState<boolean>(true)
    const router = useRouter()
    const [createAdmin] = useCreateAdminMutation()
    const [divisionOptions, setDivisionOptions] = useState<any[]>([]);

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            data.role = USER_ROLE.ADMIN
            const res = await createAdmin({ ...data }).unwrap();
            if (res.success) {
                toast.success(res?.message);
                router.push("/login")
            }
            else {
                toast.error(res?.message);
            }
        }
        catch (err: any) {
            toast.error(err?.message);
            if (err?.message.startsWith("E11000 duplicate")) {
                toast.error("Already have an account with this phone number")
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
                </div>

                <div className="flex flex-col md:flex-row gap-0 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full'>
                        <AreaField />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
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

                <div className="flex flex-col md:flex-row gap-0 md:gap-6  ">
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
                <div className="flex flex-col md:flex-row gap-0 md:gap-6 ">
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
                    <span className="label-text ml-3 font-semibold text-primary-text"> Accept
                        <Link className="font-bold text-primary-red" href={"/"}> Terms & conditions</Link></span>
                </label>
                <button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4" disabled={!ready}>Submit</button>
            </Form>
        </div>
    );
};



export default AdminRegister;