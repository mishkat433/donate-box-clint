// "use client"
import React from 'react';
import { RiHandHeartFill } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
import Counter from './Counter';



const icons = [
    {
        icon: <RiHandHeartFill />
    },
    {
        icon: <TbCurrencyTaka />
    },
    {
        icon: <RiHandHeartFill />
    },
    {
        icon: <RiHandHeartFill />
    },
]

const Statistics = () => {
    return (
        <div className='bg-statics-bg bg-left md:bg-top  bg-cover bg-fixed font-mulish p-default' >
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-white-text container mx-auto h-screen lg:h-[70vh] ' >
                <div className='bg-[#9d9d9d4d]  flex gap-2.5 flex-col justify-center items-center group p-4 rounded-md'>
                    <p className='text-5xl group-hover:text-primary-red duration-300'><RiHandHeartFill /></p>
                    <Counter havePrefix={true} />
                    <h4 className='font-semibold text-xl'>Total Donation</h4>
                </div>
                <div className='bg-[#9d9d9d4d]  flex gap-2.5 flex-col justify-center items-center group p-4 rounded-md'>
                    <p className='text-5xl group-hover:text-primary-red duration-300'><RiHandHeartFill /></p>
                    <Counter havePrefix={false} />
                    <h4 className='font-semibold text-xl'>Fund Raised</h4>
                </div>
                <div className='bg-[#9d9d9d4d]  flex gap-2.5 flex-col justify-center items-center group p-4 rounded-md'>
                    <p className='text-5xl group-hover:text-primary-red duration-300'><RiHandHeartFill /></p>
                    <h4 className='font-oswald text-2xl font-bold'>5000+</h4>
                    <h4 className='font-semibold text-xl'>Total Receiver</h4>
                </div>
                <div className='bg-[#9d9d9d4d]  flex gap-2.5 flex-col justify-center items-center group p-4 rounded-md'>
                    <p className='text-5xl group-hover:text-primary-red duration-300'><RiHandHeartFill /></p>
                    <h4 className='font-oswald text-2xl font-bold'>5000+</h4>
                    <h4 className='font-semibold text-xl'>Total Donner</h4>
                </div>
            </div>
        </div>
    );
};

export default Statistics;