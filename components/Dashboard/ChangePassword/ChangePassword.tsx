"use client"

import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../ReusableComponent/Form/Form";
import FormInput from "../../ReusableComponent/Form/FormInput";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { RiAddFill, RiUserSmileFill } from "react-icons/ri";
import { updatePasswordSchema } from "../../../schemas/user";
import { getUserInfo } from "../../../services/auth.service";
import { useChangePasswordMutation } from "../../../redux/api/userApi";

type FormValues = {
    phoneNumber: string;
    password: string;
};


const ChangePassword = () => {

    const [changePassword] = useChangePasswordMutation()
    const userInfo: any = getUserInfo()

    const onPasswordChange: SubmitHandler<FormValues> = async (data: any) => {
        try {
            data.userId = userInfo.userId ? userInfo?.userId : userInfo?.adminId
            delete (data.confirmPassword)
            const res = await changePassword({ ...data }).unwrap();
            if (res.success) {
                toast.success(res.message)
            }
        }
        catch (err) {
            toast.error(err.message)
            console.log(err);
        }
    };

    return (
        <div>
            <div className="p-3 mt-2 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text ">
                    <RiUserSmileFill className="text-primary-red" />
                    <h3>Change Password</h3>
                </div>
                {/* <label htmlFor="openModal" className="btn"><RiAddFill /> Edit Profile</label> */}
            </div>

            <div className="border-1 border-border-color shadow-md p-2 mt-4 rounded-md flex py-5">
                {/* <div className="md:w-3/5 hidden md:block">
                    image is coming
                </div> */}
                <div className="w-full md:w-2/5 mx-auto">
                    <div>
                        <Form submitHandler={onPasswordChange} resolver={yupResolver(updatePasswordSchema)}>
                            <div className='mb-0 md:mb-3'>
                                <FormInput
                                    name="oldPassword"
                                    type="password"
                                    className=" w-full"
                                    label="Old Password"
                                    placeholder="Enter your old password"
                                    required
                                />
                            </div>
                            <div className='mb-0 md:mb-3'>
                                <FormInput
                                    name="password"
                                    type="password"
                                    className=" w-full"
                                    label="New Password"
                                    placeholder="Enter your new password"
                                    required
                                />
                            </div>
                            <div className='mb-0 md:mb-3'>
                                <FormInput
                                    name="confirmPassword"
                                    type="password"
                                    className=" w-full"
                                    label="Confirm new password"
                                    placeholder="Retype your new password"
                                    required
                                />
                            </div>

                            <button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4">Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword