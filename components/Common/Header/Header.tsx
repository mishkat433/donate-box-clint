import React from 'react';

import Hero from './Navbar/Hero';
import HeroSlider from './HeroSlider/HeroSlider';
import Navbar from './Navbar/Navbar';
const Header = () => {
    return (
        <div className="" >
            <Hero />
            <Navbar />
            <HeroSlider />
        </div>
    );
};

export default Header;