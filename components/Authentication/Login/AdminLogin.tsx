"user client"

import { SubmitHandler } from "react-hook-form";
import { USER_ROLE } from "../../../constants/role";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminLoginSchema } from "../../../schemas/login";
import Form from "../../ReusableComponent/Form/Form";
import FormInput from "../../ReusableComponent/Form/FormInput";
import FormSelectField from "../../ReusableComponent/Form/FormSelectField";
import { roleOptions } from "../../../constants/global";
import Link from "next/link";
import { toast } from 'react-hot-toast';
import UserLogin from "./UserLogin";
import { useUserLoginMutation } from "../../../redux/api/authApi";
import { storeUserInfo } from "../../../services/auth.service";
import { useRouter } from "next/navigation";


type FormValues = {
    role: USER_ROLE;
    phoneNumber: string;
    password: string;
};

const AdminLogin = () => {
    const [userLogin] = useUserLoginMutation()

const router=useRouter()


    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            const res = await userLogin({ ...data }).unwrap();
            if (res?.success) {
                router.push("/");
                toast.success("Admin logged in successfully!");
                storeUserInfo({ accessToken: res?.data?.access_token })
            }
            else{
                toast.error(res?.message)
            }
        }
        catch (err: any) {
            toast.error(err?.message)
            console.log(err);
        }
    };

    return (
        <div className="px-1">
            <Form submitHandler={onSubmit} resolver={yupResolver(adminLoginSchema)}>
                <div className=''>
                    <FormSelectField
                        name="role"
                        className="w-full"
                        label="Select Role"
                        options={roleOptions}
                        required
                    />
                </div>
                <div className=''>
                    <FormInput
                        name="phoneNumber"
                        type="number"
                        className=" w-full"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <div>
                    <FormInput
                        name="password"
                        type="password"
                        className=" w-full"
                        label="Password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4">  Login</button>
            </Form>
            <div className="text-primary-text flex gap-3 justify-between items-center text-center mt-2.5">
                <p className="text-sm">Don&apos;t have an account? <Link href="/register" className="hover:text-primary-red duration-300 underline cursor-pointer text-center">Register</Link></p>
                <p className="text-sm"> <Link href="/register" className="hover:text-primary-red duration-300 underline cursor-pointer text-center">Forget password</Link></p>
            </div>
        </div>
    );
};

export default AdminLogin;