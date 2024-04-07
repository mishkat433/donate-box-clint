"use client"

import { useContext } from 'react';
import "./Authentication.css"
import { useForm } from "react-hook-form";
import { AuthContex } from '../../contex.jsx/AuthStorage';
import { toast } from 'react-hot-toast';
import { RiErrorWarningFill } from 'react-icons/ri';
import axios from "axios";
import { useRouter } from 'next/navigation';


function OTPForm() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { tokenCode, setLoginUser } = useContext(AuthContex)
    const router = useRouter()

    const loginHandle = async (data) => {
        if (tokenCode?.data?.verifyCode.toString() === data?.verifyCode) {
            const res = await axios.post(`http://localhost:5200/api/v1/users/verifyToken`, { token: tokenCode?.data?.token.toString() })
            if (res?.data?.success) {
                toast.success(res?.data?.message)
                localStorage.setItem('authData', res?.data?.data?.id)
                setLoginUser(res?.data?.data)
                router.push('/')
            }
            else {
                toast.error(res?.data?.message)
                router.push('/')
            }
        }
        else {
            toast.error("Password cannot match, Please click 'active your account' from the email")
        }
    };

    return (
        <div className="max-w-md mx-auto text-center px-4 sm:px-8 py-10 rounded-xl shadow">
            <div className="bg-warning rounded-lg p-2 flex gap-2 items-center mb-4 h-10 ">
                <RiErrorWarningFill className="text-2xl" />
                <p className="text-[10px] text-white-text">Warning: Before reload this site, verify code is working properly. Otherwise you can click &apos;active your account&apos; from the email </p>
            </div>
            <form onSubmit={handleSubmit(loginHandle)} data-aos="flip-left" data-aos-duration="1000">
                <div className="form-control mb-3">
                    <div className=" relative">
                        <input className={`  w-full py-2 md:py-1.5 px-3 rounded-md border-1 border-[#d3d3d3]  ${errors.verifyCode ? "focus:outline-primary-red" : "focus:outline-primary-text"}`}
                            type="number"
                            placeholder="verification code"
                            {...register("verifyCode", {
                                required: "Provide your verification code",
                                minLength: { value: 6 },
                            })} />
                        {errors.verifyCode && (<p className="text-primary-red text-start text-xs mt-1"> {errors?.verifyCode.message} </p>)}
                    </div>
                </div>

                <button className="button-transition rounded-md py-2 px-2.5 w-full border-1 hover:text-white-text border-[#d3d3d3]">Verify </button>

            </form >
        </div >
    );
}

export default OTPForm;