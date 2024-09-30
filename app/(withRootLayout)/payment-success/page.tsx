import Link from 'next/link';
import React from 'react';

const PaymentSuccess = () => {
    return (
        <div className='h-20 text-center text-success mt-10'>
            <h1>Payment Success <Link href="/" className='text-edit underline'>Click to home</Link> </h1>
        </div>
    );
};

export default PaymentSuccess;