// "use client"
import React from 'react';
import { RiHandHeartFill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { MdWavingHand } from "react-icons/md";
import { ImManWoman } from "react-icons/im";

import Counter from './Counter';



const icons = [
    {
        icon: <RiHandHeartFill />
    },
    {
        icon: <GiMoneyStack />
    },
    {
        icon: <ImManWoman />
    },
    {
        icon: <MdWavingHand />
    },
]

const Statistics = () => {
    return (
        <section className='bg-statics-bg bg-left md:bg-top  bg-cover bg-fixed font-mulish p-default' >
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-white-text container mx-auto h-screen lg:h-[70vh] ' >
                <div className='statistics-card group '>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><RiHandHeartFill /></p>
                    <Counter havePrefix={true} />
                    <h4 className='font-semibold text-xl'>Total Donation</h4>
                </div>
                <div className='statistics-card group'>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><GiMoneyStack /></p>
                    <Counter havePrefix={true} />
                    <h4 className='font-semibold text-xl'>Fund Raised</h4>
                </div>
                <div className='statistics-card group'>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><ImManWoman /></p>
                    <Counter havePrefix={false} />
                    <h4 className='font-semibold text-xl'>Total Receivers</h4>
                </div>
                <div className='statistics-card group'>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><MdWavingHand /></p>
                    <Counter havePrefix={false} />
                    <h4 className='font-semibold text-xl'>Total Donner</h4>
                </div>
            </div>
        </section>
    );
};

export default Statistics;