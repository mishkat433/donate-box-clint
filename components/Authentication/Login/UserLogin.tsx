"user client"
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../schemas/login';
import Form from '../../ReusableComponent/Form/Form';
import { SubmitHandler } from 'react-hook-form';
import FormInput from '../../ReusableComponent/Form/FormInput';
import Link from 'next/link';
import { authApi, useUserLoginMutation } from '../../../redux/api/authApi';
import { USER_ROLE } from '../../../constants/role';
import toast from 'react-hot-toast';
import { storeUserInfo } from '../../../services/auth.service';
import { useRouter } from 'next/navigation';

type FormValues = {
    phoneNumber: string;
    password: string;
};


const UserLogin = () => {
    const [userLogin, { isError, error }] = useUserLoginMutation()
    const router = useRouter()


    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            data.role = USER_ROLE.USER
            const res = await userLogin({ ...data }).unwrap()
            if (res?.success) {
                router.push("/");
                toast.success("User logged in successfully!");
                storeUserInfo({ accessToken: res?.data?.access_token })
            }
        }
        catch (err) {
            toast.error(err.message)
            console.log(err);
        }
    };




    return (
        <div>
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
                <div className='mb-3'>
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

export default UserLogin;