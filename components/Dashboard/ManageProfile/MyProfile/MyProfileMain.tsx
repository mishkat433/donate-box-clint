"use client"

import { RiAddFill, RiUserSmileFill } from "react-icons/ri";
import Modal from "../../../ReusableComponent/Modal";
import Image from "next/image";
import profileImage from "../../../../public/assets/profile.png"
import { useLoginUserDataQuery } from "../../../../redux/api/authApi";
import { getUserInfo, isLoggedIn } from "../../../../services/auth.service";
import DotLoading from "../../../ReusableComponent/DotLoading";

const MyProfileMain = () => {
    const userInfo: any = getUserInfo()
    const loginCheck = isLoggedIn()

    let id: string


    if (userInfo?.userId) {
        id = userInfo.userId
    } else {
        id = userInfo.adminId
    }
    const { data, isLoading, isError }: any = useLoginUserDataQuery(id)

    if (isLoading) {
        return <DotLoading />
    }

    return (
        <div>
            <div className="p-3 flex justify-between items-center gap-4 mb-2">
                <div className="flex gap-2 items-center text-xl font-bold text-primary-text">
                    <RiUserSmileFill className="text-primary-red" />
                    <h3>My Profile</h3>
                </div>
                <label htmlFor="editProfile" className="btn"><RiAddFill /> Edit Profile</label>
            </div>

            <div className="shadow-md rounded-md border-1 border-border-color">
                <div className="flex flex-col lg:flex-row justify-center items-center my-5">
                    <Image src={profileImage} alt="profile image" height={120} width={120} />
                </div>
                <div className="flex flex-col  md:flex-row justify-center items-baseline p-4 gap-4">
                    <div className="w-full p-2 shadow-sm border-1 border-border-color rounded-md">
                        <h4 className=" font-semibold mb-1">Personal Info</h4>
                        <div className="text-sm">
                            <p><span className="font-semibold">Id : </span> {id}</p>
                            <p><span className="font-semibold">Role : </span> {data?.data[0]?.role}</p>
                            <p><span className="font-semibold">Name : </span> {data?.data[0]?.fullName}</p>
                            <p><span className="font-semibold">Phone Number : </span> {data?.data[0]?.phoneNumber}</p>
                            <p><span className="font-semibold">Gender : </span> {data?.data[0]?.gender}</p>
                            <p><span className="font-semibold">Blood Group : </span> {data?.data[0]?.bloodGroup}</p>
                            <p><span className="font-semibold">Address : </span> {data?.data[0]?.address}</p>
                            <p><span className="font-semibold">Division : </span> {data?.data[0]?.division}</p>
                        </div>
                    </div>
                    <div className="w-full p-2 shadow-sm border-1 border-border-color rounded-md">
                        <h4 className=" font-semibold">Additional Info</h4>
                        <div className="text-sm">
                            <p><span className="font-semibold">Id : </span> {id}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal id="editProfile" title="Edit Profile">
                <h1>under development</h1>
            </Modal>
        </div>
    );
};

export default MyProfileMain;