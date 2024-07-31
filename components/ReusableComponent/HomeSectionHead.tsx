import React from 'react';

const HomeSectionHead = ({ name }) => {
    return (
        <div className="my-5 md:my-10">
            <h1 className="text-center text-xl md:text2xl lg:text-4xl font-oswald text-primary-red font-bold ">{name}</h1>
        </div>
    );
};

export default HomeSectionHead;