import React from 'react';
import Navbar from './Navbar/Navbar';
import HeroSlider from './HeroSlider/HeroSlider';
import Hero from './Navbar/Hero';
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