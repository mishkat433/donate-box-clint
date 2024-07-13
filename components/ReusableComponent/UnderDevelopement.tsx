import Image from 'next/image';
import React from 'react';

const UnderDevelopment = () => {
    return (
        <div className='flex justify-center items-center h-96'>
            <Image className='w-3/5 ' src={'https://tanta.edu.eg/env/en/images/page-under-construction.png'} height={100} width={200} alt='under develope' />
        </div>
    );
};

export default UnderDevelopment;