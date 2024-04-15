"use client"

import { useForm } from "react-hook-form";
import DotLoading from "../ReusableComponent/DotLoading";
import { useContext, useState } from "react";
import { RiErrorWarningLine, RiUserUnfollowLine } from "react-icons/ri";
import { AuthContext } from "../../context/AuthStorage";
import Link from "next/link";
import toast from "react-hot-toast";

const BloodDonner = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [bloodDonner, setBloodDonner] = useState({})
    const [enable, setEnable] = useState(false)
    const [loginLoading, setLoginLoading] = useState(false)
    const { loginUser } = useContext(AuthContext)


    const handleEnable = async () => {
        toast.success("clicked")
        // axios.post('http://localhost:5200/api/v1/', data)
        //     .then(res => {
        //         console.log(res);
        //         if (res.data.success) {
        //             // setLoginLoading(false)
        //             setBloodDonner(res?.data)
        //         }
        //         else {
        //             setLoginLoading(false)
        //             toast.error(res.data.message)
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err.message);
        //         setLoginLoading(false)
        //         toast.error(err.message)
        //     })
    }

    const loginHandle = (data) => {
        // setLoginLoading(true)
        data.userId = loginUser?.userId

        if (data.division !== 'Select Division') {

            // axios.post('http://localhost:5200/api/v1/', data)
            //     .then(res => {
            //         console.log(res);
            //         if (res.data.success) {
            //             // setLoginLoading(false)
            //             setToken(res?.data?.data)
            //             localStorage.setItem('authToken', res?.data?.data)
            //             toast.success(res.data.message)
            //             router.push('/')
            //         }
            //         else {
            //             setLoginLoading(false)
            //             toast.error(res.data.message)
            //         }
            //     })
            //     .catch(err => {
            //         console.log(err.message);
            //         setLoginLoading(false)
            //         toast.error(err.message)
            //     })
        }
    };

    return (
        <div className="py-2">
            <h1 className="text-center text-2xl font-bold">BE A BLOOD DONNER</h1>
            <div className="py-4">
                <div className="  text-sm pb-3 ">
                    <div className="flex gap-4 items-center">
                        <h4 className="text-md font-semibold ">I am ready to donate my blood :-</h4>
                        <input onClick={(() => { setEnable(!enable), handleEnable() })} type="checkbox" className="toggle toggle-error toggle-sm" disabled={loginUser?.isBanned} checked={bloodDonner?.isBloodDonner} />
                        {enable && <span>Enabled</span>}
                    </div>
                    {loginUser?.isBanned ?
                        <div role="alert" className="alert alert-error mt-3 text-white-text">
                            <RiUserUnfollowLine className="text-2xl" />
                            <span>Your account is Banned. if you want enabled your account? <Link href="/contact" className="underline ">Contact Us</Link> </span>
                        </div>
                        :
                        <div>
                            {bloodDonner?.isBloodDonner &&
                                <div role="alert" className="alert alert-info mt-3">
                                    <RiErrorWarningLine className="text-2xl" />
                                    {bloodDonner?.isBloodDonner ? <span>Your information is displayed on the home page, and anyone in your district can call you anytime for blood. </span>
                                        : <span className="font-semibold">Please fill out this form for displaying your data.</span>}
                                </div>
                            }
                        </div>
                    }
                </div>
                <div className={` overflow-hidden duration-300 text-sm p-2 ${enable ? 'max-h-56' : "max-h-0"}`}>
                    {enable &&
                        <form onSubmit={handleSubmit(loginHandle)} data-aos="flip-left" data-aos-duration="1000">
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <label className="form-control w-full rounded-md  ">
                                        <select className="select select-bordered outline-none"  {...register("division", { required: "Division is required" })}>
                                            <option defaultValue>Select Division</option>
                                            <option>Dhaka</option>
                                            <option>Chattogram</option>
                                            <option>Rajshahi</option>
                                            <option>Khulna</option>
                                            <option>Barishal</option>
                                            <option>Sylhet</option>
                                            <option>Rangpur</option>
                                            <option>Maymansingh</option>
                                        </select>
                                        {errors.division && (<p className="text-primary-red text-start text-xs mt-1">{errors?.division.message} </p>)}
                                    </label>

                                    <div className="form-control w-full">
                                        <input className={`  py-2 md:py-[13px] px-3 rounded-md border-1 border-[#d3d3d3]  ${errors.phone ? "focus:outline-primary-red" : "focus:outline-aide-primary"}`}
                                            type="number" placeholder="Enter your phone number"
                                            {...register("phone", { required: "phone is required", minLength: { value: 11, message: "phone number is not valid, enter 11 digit" }, maxLength: { value: 11, message: "phone number is not valid, enter 11 digit" } })} />
                                        {errors.phone && (<p className="text-primary-red text-start text-xs mt-1">{errors?.phone.message} </p>)}
                                    </div>
                                </div>

                                <div className="form-control">
                                    <div className=" ">
                                        <input className={` w-full py-2 md:py-3 px-3 rounded-md border-1 border-[#d3d3d3]  ${errors.addreaa ? "focus:outline-primary-red" : "focus:outline-aide-primary"}`}
                                            type="text" placeholder="Enter your full address without division"
                                            {...register("addreaa", { required: "Address is required", })} />
                                        {errors.addreaa && (<p className="text-primary-red text-start text-xs mt-1">{errors?.addreaa.message} </p>)}
                                    </div>
                                </div>

                                <div className="form-control w-full flex justify-center items-center">
                                    {loginLoading ?
                                        <button type="button" className="py-3 w-[100px] rounded-md bg-primary-red font-bold "><DotLoading size={'md'} /> </button> :
                                        <button className="button-transition w-[100px] hover:text-white-text rounded-md py-3 px-2.5  border-1 border-[#d3d3d3]">Submit </button>
                                    }
                                </div>


                            </div>

                        </form>
                    }
                </div>
            </div>
        </div>
    );
};

export default BloodDonner;