"use client"

import { useEffect, useRef, useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';


interface propsTypes{
    options:any;
    onSelect:(value: string | any) => void;
    hoverHeight?:string;
    placeholder:string;
    defaultValue?:string | number;
}

const Dropdown = ({ options, onSelect,hoverHeight="group-hover:h-[100px]", placeholder = 'Select', defaultValue }:propsTypes) => {

    const [dropdownDirection, setDropdownDirection] = useState('down');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const checkDropdownPosition = () => {
            if (dropdownRef.current) {
                const rect = dropdownRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const spaceBelow = windowHeight - rect.bottom;
                const spaceAbove = rect.top;

                if (spaceBelow < 150 && spaceAbove > 150) {
                    setDropdownDirection('up');
                    
                } else {
                    setDropdownDirection('down');
                }
            }
        };

        checkDropdownPosition();
        window.addEventListener('resize', checkDropdownPosition);

        return () => {
            window.removeEventListener('resize', checkDropdownPosition);
        };
    }, []);

    return (
        <div className="group relative w-auto" ref={dropdownRef}>
        {/* <div className="group relative w-auto"> */}
            <div className="dropdownHeader flex justify-between items-center cursor-pointer p-2.5 rounded-md">
                {placeholder}
                <RiArrowDownSFill className={`text-xl text-white-text group-hover:rotate-180 duration-300 ${dropdownDirection === 'up' ? 'rotate-180' : ''}`} />
            </div>
            <ul className={`absolute w-full bg-border-color max-h-[150px] overflow-y-auto z-[1] rounded-md duration-300 h-0 ${hoverHeight} ${dropdownDirection === 'up' ? 'bottom-full' : 'top-full'}`}>
                {options?.map((option) => (
                    <li
                        key={option.value}
                        className={`px-2.5 py-1.5 cursor-pointer hover:bg-secondary-text border-b-1 border-white-text hover:text-white-text duration-200 ${defaultValue === option.value ? "bg-secondary-text" : "text-primary-text"}`}
                        onClick={() => onSelect(option?.value)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;