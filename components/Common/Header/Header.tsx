import React from 'react';
import Navbar from './Navbar/Navbar';
import HeroSlider from './HeroSlider/HeroSlider';
import Hero from './Navbar/Hero';
const Header = () => {
    return (
        // bg-gradient-to-tl from-[#FAEDDA] from-10% via-[#fcddac] via-50%  to-[#FAEDDA] to-80%
        <div className="" >
            <Hero />
            <Navbar />
            <HeroSlider />
        </div>
    );
};

export default Header;