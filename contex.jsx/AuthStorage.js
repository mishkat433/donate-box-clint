"use client"

import React, { createContext, useState } from 'react';


export const AuthContex = createContext("");

const AuthStorage = ({ children }) => {
    const [loginUser, setLoginUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [tokenCode, setTokenCode] = useState({})

    const authInfo = {
        tokenCode,
        setTokenCode,
        loginUser,
        setLoginUser,
        loading,
        setLoading,
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthStorage;