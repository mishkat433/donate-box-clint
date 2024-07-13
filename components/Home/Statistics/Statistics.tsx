"use client"

import React from 'react';
import { RiHandHeartFill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { MdWavingHand } from "react-icons/md";
import { ImManWoman } from "react-icons/im";
import { BiSolidDonateBlood } from "react-icons/bi";

import Counter from './Counter';
import { useStatisticsInfoQuery } from '../../../redux/api/statisticsApi';



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

    const { data, isLoading, isError, error }: any = useStatisticsInfoQuery(undefined)

    return (
        <section className='bg-statics-bg bg-left md:bg-top  bg-cover bg-fixed font-mulish p-default' >
            <div className='grid grid-cols-1 md:grid-cols-4 gap-x-4 items-center text-white-text px-5 mx-auto container md:py-0 lg:min-h-[70vh] ' >
                <div className='statistics-card  group '>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><BiSolidDonateBlood /></p>
                    <Counter endValue={data?.data?.totalBloodDonation} havePrefix={false} />
                    <h4 className='font-semibold text-xl'>Total Blood Receivers</h4>
                </div>
                <div className='statistics-card group'>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><GiMoneyStack /></p>
                    <Counter havePrefix={true} endValue={data?.data?.totalAmountDonation} />
                    <h4 className='font-semibold text-xl'>Total Amount Donation</h4>
                </div>
                <div className='statistics-card group'>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><RiHandHeartFill /></p>
                    <Counter havePrefix={false} endValue={100} />
                    <h4 className='font-semibold text-xl'>Total Helping</h4>
                </div>
                <div className='statistics-card group'>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><MdWavingHand /></p>
                    <Counter havePrefix={false} endValue={data?.data?.totalDonner} />
                    <h4 className='font-semibold text-xl'>Total Donner</h4>
                </div>
                <div className='statistics-card group'>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><MdWavingHand /></p>
                    <Counter havePrefix={false} endValue={data?.data?.totalTodaysRequest} />
                    <h4 className='font-semibold text-xl'>Todays Blood Request</h4>
                </div>
                <div className='statistics-card group'>
                    <p className='text-5xl group-hover:text-primary-red duration-300 group-hover:-scale-x-100'><ImManWoman /></p>
                    <Counter havePrefix={false} endValue={100} />
                    <h4 className='font-semibold text-xl'>Total Volunteers</h4>
                </div>
            </div>
        </section>
    );
};

export default Statistics;