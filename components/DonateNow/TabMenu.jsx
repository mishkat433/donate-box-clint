import React from 'react';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const TabMenu = ({ type, setType }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted p-2">
            <a role="tab" onClick={() => setType('blood')} className={`tab font-medium   ${type === 'blood' && 'tab-active [--tab-bg:#C30047] [--tab-border-color:#C30047] text-white-text '}`}>Donate Blood</a>
            <a role="tab" onClick={() => setType('fund')} className={`tab font-medium   ${type === 'fund' && 'tab-active [--tab-bg:#C30047] [--tab-border-color:#C30047] text-white-text '}`}>Donate Fund <RiMoneyDollarCircleLine /></a>
            <a role="tab" onClick={() => setType('Volunteer')} className={`tab font-medium   ${type === 'Volunteer' && 'tab-active [--tab-bg:#C30047] [--tab-border-color:#C30047] text-white-text '}`}>Be Volunteer</a>
        </div>
    );
};

export default TabMenu;