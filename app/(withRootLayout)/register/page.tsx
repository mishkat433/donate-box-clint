import React from 'react';
import Register from '../../../components/Authentication/Register/Register';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Donate-box | Register",
};

const page = () => {
    return (
        <div>
            <Register />
        </div>
    );
};

export default page;