"use client"

import { useState, useEffect, useContext } from "react";
// import { useRouter } from "next/navigation";
import DotLoading from "../ReusableComponent/DotLoading";
import { useRouter, useSearchParams } from 'next/navigation'
import { AuthContext } from "../../context/AuthStorage";
import axios from "axios";
import { toast } from 'react-hot-toast';

const VerifyToken = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const { setToken } = useContext(AuthContext)

    useEffect(() => {
        if (token) {
            verifyUser(token)
        }
    }, [token])

    const verifyUser = async (token) => {
        const res = await axios.post(`http://localhost:5200/api/v1/users/verifyToken`, { token: token.toString() })
        if (res?.data?.success) {
            toast.success(res?.data?.message)
            // setLoginUser(res?.data?.data)
            setToken(res?.data?.data)
            localStorage.setItem('authToken', res?.data?.data)
            router.push('/')
        }
        else {
            toast.error(res?.data?.message)
            router.push('/')
        }
    }

    return (
        <div className="mx-auto w-11/12 h-96 flex justify-center items-center ">
            <button className="bg-primary-red py-2 px-4 rounded-md text-white-text"> <DotLoading size="lg" text="white-text" /> verifying </button>
        </div>
    );
};

export default VerifyToken;



