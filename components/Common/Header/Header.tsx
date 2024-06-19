import React from 'react';

import Hero from './Navbar/Hero';
import Navbar from './Navbar/Navbar';
const Header = () => {
    return (
        <div className="z-20 sticky -top-10 left-0" >
            <Hero />
            <Navbar />
        </div>
    );
};

export default Header;