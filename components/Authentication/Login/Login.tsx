"use client"

import { useState } from "react";
import '../Authentication.css';
import LoginPageHeader from "../../ReusableComponent/LoginPageHeader";
import UserLogin from "./UserLogin";
import AdminLogin from "./AdminLogin";
import CommonTab from "../CommonTab";
import AuthPage from "../AuthPage";



const LoginPage = () => {
    const [loginManage, setLoginManage] = useState<boolean>(true)

    return (
        <AuthPage>
            <LoginPageHeader header={"LOGIN"} />

            <CommonTab loginManage={loginManage} setLoginManage={setLoginManage} button1={"User Login"} button2={"Admin Login"} />

            <div className=" mt-3 min-h-[60vh]   overflow-hidden py-4 relative ">

                <div className={`w-full h-full rounded-md absolute  ${loginManage && "left-0  adminSlide z-10"}`}>
                    {loginManage && <UserLogin />}
                </div>

                <div className={`w-full h-full absolute rounded-md    ${!loginManage && " userSlide left-0 z-10 "}`}>
                    {!loginManage && <AdminLogin />}
                </div>

            </div>
        </AuthPage>
    );
};

export default LoginPage;
