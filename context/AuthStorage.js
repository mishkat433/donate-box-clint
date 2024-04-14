"use client"


import axios from "axios";
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext("");

const AuthStorage = ({ children }) => {
    const [loginUser, setLoginUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [tokenCode, setTokenCode] = useState({})
    const [token, setToken] = useState(null)

    useEffect(() => {
        if (token === null) {
            setToken(localStorage.getItem('authToken'))
        }
    }, [token, setToken])

    useEffect(() => {
        // const authToken = localStorage.getItem('authToken')
        if (token !== null) {
            loginAccessHandle(token)
        }
    }, [token, setToken]);

    const loginAccessHandle = async (token) => {
        const res = await axios.post(`http://localhost:5200/api/v1/auth/login-access`, { token: token })
        if (res?.data?.success) {
            toast.success(res?.data?.message)
            setLoginUser(res?.data?.data)
            // setVerifyLoading(false)
        }
        else {
            // setVerifyLoading(false)
            toast.error(res?.data?.message)
            // router.push('/')
        }
    }

    const logOutHandle = () => {
        setToken("")
        setLoginUser({})
        localStorage.removeItem('authToken')
        toast.success("Log out successfully")
    }


    const authInfo = {
        tokenCode,
        setTokenCode,
        loginUser,
        setLoginUser,
        loading,
        setLoading,
        setToken,
        logOutHandle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthStorage;