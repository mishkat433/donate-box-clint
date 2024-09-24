import React from 'react';
import MyRequests from '../../../../components/MyRequests/MyRequests';
import { Metadata } from 'next';



export const metadata: Metadata = {
    title: "Donate-box | My-Requests",
    description: "View and manage your donation requests on Donate-box",
    keywords: ["donate", "requests", "manage", "my requests"],

};

const page = () => {
    return (
        <div className="font-mulish">
            <MyRequests />
        </div>
    );
};

export default page;