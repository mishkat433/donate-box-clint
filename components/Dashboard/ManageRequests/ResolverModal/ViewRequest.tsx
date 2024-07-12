import React from 'react';
import { RiArrowRightCircleLine } from 'react-icons/ri';

const ViewRequest = ({ nextHandle }) => {
    return (
        <div className='my-2'>
            <h4 className='font-bold pb-1'>View Request Details : </h4>
            <div className='rounded-md mx-auto shadow-md border-1 border-border-color p-2'>
                all details
            </div>

            <div className='flex justify-end'>
                <button onClick={() => nextHandle(true)} type='button' className="button-transition primary-red-button py-2 px-2.5 w-2/5 mt-4 flex justify-center items-center gap-2">Next <RiArrowRightCircleLine className='text-lg' /></button>
            </div>
        </div>
    );
};

export default ViewRequest;