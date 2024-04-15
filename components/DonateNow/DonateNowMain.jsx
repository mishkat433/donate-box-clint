"use client"

import React, { useState } from 'react';
import TabMenu from './TabMenu';
import BloodDonner from './BloodDonner';
import FundDonner from './FundDonner';
import Volunteer from './Volunteer';

const DonateNowMain = () => {
    const [selectType, setSelectType] = useState('blood')
    return (
        <div>
            <TabMenu type={selectType} setType={setSelectType} />
            <div className="pt-3 container mx-auto">
                {selectType === 'blood' && <div><BloodDonner /> </div>}
                {selectType === 'fund' && <div><FundDonner /> </div>}
                {selectType === 'Volunteer' && <div><Volunteer /> </div>}


            </div>
        </div>
    );
};

export default DonateNowMain;