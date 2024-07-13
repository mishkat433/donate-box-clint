"use client"

import React, { useState } from 'react';
import TabMenu from './TabMenu';
import FundDonner from './FundDonner';
import Volunteer from './Volunteer';
import { isLoggedIn } from '../../services/auth.service';
import LogInButton from '../ReusableComponent/LogInButton';
import BloodDonner from './BloodDonner';

const DonateNowMain = () => {
    const [selectType, setSelectType] = useState('blood')
    const loginCheck = isLoggedIn()
    return (
        <div>
            <TabMenu type={selectType} setType={setSelectType} />
            <div className="pt-3 container mx-auto py-2 animate-fade-down animate-once ">
                {selectType === 'blood' && <div className="w-4/5 mx-auto"><BloodDonner /> </div>}
                {selectType === 'fund' && <div><FundDonner /> </div>}
                {selectType === 'Volunteer' && <div> {loginCheck ? <Volunteer /> : <LogInButton />} </div>}
            </div>
        </div>
    );
};

export default DonateNowMain;