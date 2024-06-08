"use client"

import { useState } from "react";
import LoginPageHeader from "../../ReusableComponent/LoginPageHeader";
import AuthPage from "../AuthPage";
import CommonTab from "../CommonTab";
import UserRegister from "./UserRegister";
import AdminRegister from "./AdminRegister";
import AlreadyDonnerRegister from "./AlreadyDonnerRegister";


const Register = () => {
    const [loginManage, setLoginManage] = useState<boolean>(true)
    const [alreadyDonner, setAlreadyDonner] = useState<boolean>(false)



    return (
        <AuthPage>
            <LoginPageHeader header={"Register"} />

            <CommonTab loginManage={loginManage} setLoginManage={setLoginManage} button1={"User register"} button2={"Admin Register"} />

            {loginManage &&
                <div className={`form-control mt-2`}>
                    <label className="cursor-pointer label justify-start p-0" onClick={() => setAlreadyDonner(!alreadyDonner)}>
                        <input type="checkbox" defaultChecked={alreadyDonner} className="checkbox checkbox-info" />
                        <span className="label-text ml-3 p-0 font-semibold text-primary-text">Already I am a donner</span>
                    </label>
                </div>}

            <div className=" min-h-[85vh] overflow-auto duration-150 flex justify-center items-center  my-2 relative ">

                <div className={`w-full min-h-full  rounded-md absolute px-2 ${loginManage && "left-0  adminSlide z-10"}`}>
                    {loginManage && <>{!alreadyDonner ? <UserRegister /> : <AlreadyDonnerRegister />}</>}
                </div>

                <div className={`w-full min-h-full  rounded-md absolute px-2  ${!loginManage && " userSlide left-0 z-10 "}`}>
                    {!loginManage && <AdminRegister />}
                </div>
            </div>
        </AuthPage >
    );
};

export default Register;