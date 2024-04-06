"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useRouter } from "next/navigation"
import DotLoading from './../ReusableComponent/DotLoading';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Link from "next/link";

const Login = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [showPassword, setShowPassword] = useState(false)
    const [loginWith, setLoginWith] = useState(true)
    const [loginLoading, setLoginLoading] = useState(false)

    const router = useRouter()
    const loginHandle = (data) => {
        setLoginLoading(true)
        loginWith ? data.phone = "" : data.email = ""

        axios.post('http://localhost:5200/api/v1/users/', data)
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    setLoginLoading(false)
                    toast.success(res.data.message)
                    router.push('/')
                }
                else {
                    setLoginLoading(false)
                    toast.error(res.data.message)
                }
            })
            .catch(err => {
                console.log(err.message);
                setLoginLoading(false)
                toast.error(err.message)
            })
    };


    return (
        <div className="w-full py-4">
            <form onSubmit={handleSubmit(loginHandle)} data-aos="flip-left" data-aos-duration="1000">
                <div className=" flex gap-6 text-sm pb-4 ">
                    <h4 className="text-md font-semibold">Login with :-</h4>
                    <label className="flex justify-center cursor-pointer items-center gap-2"><input onClick={() => setLoginWith(true)} type="radio" name="radio-8" className="radio h-4 w-4 radio-error" defaultChecked /><span>Gmail</span></label>
                    <label className="flex justify-center cursor-pointer items-center gap-2"><input onClick={() => setLoginWith(false)} type="radio" name="radio-8" className="radio h-4 w-4 radio-error" /><span>Phone</span></label>
                </div>
                <div className="">
                    {loginWith ?
                        <div className="form-control">
                            <div className=" ">
                                <input className={` w-full py-2 md:py-2 px-3 rounded-md border-1 border-[#d3d3d3]  ${errors.email ? "focus:outline-primary-red" : "focus:outline-aide-primary"}`}
                                    type="email" placeholder="Enter your email address"
                                    {...register("email", { required: "Email is required", pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, })} />
                                {errors.email && (<p className="text-primary-red text-start text-xs mt-1">{errors?.email.message} </p>)}
                            </div>
                        </div>
                        :
                        <div className="form-control">
                            <div className=" ">
                                <input className={` w-full py-3 md:py-2 px-3 rounded-md border-1 border-[#d3d3d3]  ${errors.phone ? "focus:outline-primary-red" : "focus:outline-aide-primary"}`}
                                    type="number" placeholder="Enter your phone number"
                                    {...register("phone", { required: "phone is required", minLength: { value: 11, message: "phone number is not valid, enter 11 digit" }, maxLength: { value: 11, message: "phone number is not valid, enter 11 digit" } })} />
                                {errors.phone && (<p className="text-primary-red text-start text-xs mt-1">{errors?.phone.message} </p>)}
                            </div>
                        </div>
                    }
                    <div className="form-control mt-3">
                        <div className="my-2 relative">
                            <input className={`  w-full py-2 md:py-2 px-3 rounded-md border-1 border-[#d3d3d3]  ${errors.password ? "focus:outline-primary-red" : "focus:outline-aide-primary"}`}
                                type={`${showPassword ? "text" : "password"}`} placeholder="Password "
                                {...register("password", {
                                    required: "Provide a strong password",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                                    // pattern: { value: /^(?=.*[A-Z][a-z])(?=.*)(?=.*[0-9])/, message: "password is not valid, please provide uppercase, lowercase, number.", }
                                })} />

                            {showPassword ? (<p className="absolute top-3.5 right-2 text-xl cursor-pointer hover:text-primary-red" onClick={() => setShowPassword(!showPassword)}>     <RiEyeLine /> </p>)
                                :
                                (<p className="absolute top-3.5 right-2 text-xl cursor-pointer hover:text-primary-red" onClick={() => setShowPassword(!showPassword)}> <RiEyeOffLine /> </p>)
                            }

                            {errors.password && (<p className="text-primary-red text-start text-xs mt-1"> {errors?.password.message} </p>)}
                        </div>
                        {/* <label className="label"><Link href="/" className="text-xs text-white-text">Forgot password?</Link></label> */}
                    </div>
                    <div className="form-control  md:mt-2.5">
                        {loginLoading ?
                            <button type="button" className="py-2 rounded-md bg-primary-red font-bold "><DotLoading size={'md'} /> </button> :
                            <button className="button-transition rounded-md py-1 px-2.5 w-full border-1 border-[#d3d3d3]">LogIn </button>
                        }
                    </div>
                    <div className="flex items-center pt-4 space-x-1 text-white-text">
                        <div className="w-full h-px dark:bg-gray-700 bg-neutral-400" ></div>
                        <p className="px-2.5 text-sm dark:text-gray-400 text-neutral-400">OR</p>
                        <div className="w-full h-px  dark:bg-gray-700 bg-neutral-400 bg-white"></div>
                    </div>
                    <div className="flex justify-evenly text-white-text text-3xl">
                        {/* <RiGoogleFill className="hover:text-purple-400 cursor-pointer duration-300" title="Google" />
                        <RiFacebookCircleLine className="hover:text-purple-400 cursor-pointer duration-300" title="Facebook" />
                        <RiGithubLine className="hover:text-purple-400 cursor-pointer duration-300" title="Github" /> */}
                    </div>
                    <div className="text-primary-text text-center mt-2.5">
                        <p className="text-sm">Not a member? <Link href="/authentication/signUp" className="hover:text-primary-red duration-300 underline cursor-pointer text-center"> Sign-Up</Link></p>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Login;