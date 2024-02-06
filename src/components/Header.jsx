// Navbar.js
import React, { useState } from 'react';
import MaatriShakti from '../images/MaatriShakti.jpeg'; // Import your logo image here
import mobileMenu from '../images/mobile-menu-icon.png'; // Import your mobile menu icon here

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-[#ebf4ff] fixed top-0 w-full z-50 " >
            <div className="flex justify-between p-2">
                {/* Website Logo */}
                <div className="flex items-center">
                    <img src={MaatriShakti} className="rounded-full w-14 h-14 mx-2 border-2" alt="Logo" />
                    <h1 className="text-black mx-3 text-2xl">Maatri Shakthi</h1>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex flex-row items-center mr-12">
                    <ul className="flex flex-row space-x-9 text-white">
                        <li className="p-2 rounded hover:bg-[#F9D0BE] hover:text-black"><a href="/" >Home</a></li>
                        <li className="p-2 rounded hover:bg-[#F9D0BE] hover:text-black"><a href="/about">About</a></li>
                        <li className="p-2 rounded hover:bg-[#F9D0BE] hover:text-black"><a href="/contactUs" >ContactUs</a></li>
                        <li className="p-2 rounded hover:bg-[#F9D0BE] hover:text-black"><a href="/appointment" >Appointment</a></li>
                        <li className="p-2 rounded hover:bg-[#F9D0BE] hover:text-black"><a href=""><form action="/Donate" method="post"><button type="submit">Donate</button></form></a></li>
                        <li>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="hover:text-[#797dfd] text-black bg-[#F9D0BE] font-medium rounded p-2 text-center inline-flex items-center" onClick={toggleDropdown}>
                                Login
                                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <div id="dropdown" className="absolute size-fit mt-2 mr-2 rounded bg-[#F9D0BE]">
                                    <ul className="py-1 text-sm" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="/DLogin" className="hover:text-[#797dfd] size-fit block px-4 py-2 text-wrap text-black">Doctor Login</a>
                                        </li>
                                        <hr />
                                        <li>
                                            <a href="/ULogin" className="hover:text-[#797dfd] size-fit block px-4 py-2 text-wrap text-black">User Login</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="p-2 bg-[#F9D0BE] rounded mobile-menu-button" onClick={toggleMobileMenu}>
                        <img src={mobileMenu} className="w-4 h-4" alt="Mobile Menu" />
                    </button>
                </div>
            </div>

            {/* Mobile NavBar */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#F9D0BE]">
                    <ul className="text-center py-1">
                        <li className="p-2 ml-12 mr-12 bg-[#f56556] m-1 rounded"><a className="text-white hover:text-black" href="/">Home</a></li>
                        <li className="p-2 ml-12 mr-12 bg-[#f56556] m-1 rounded"><a className="text-white hover:text-black" href="/about">About</a></li>
                        <li className="p-2 ml-12 mr-12 bg-[#f56556] m-1 rounded"><a className="text-white hover:text-black" href="/contactUs">ContactUs</a></li>
                        <li className="p-2 ml-12 mr-12 bg-[#f56556] m-1 rounded"><a className="text-white hover:text-black" href="/appointment">Appointment</a></li>
                        <li className="p-2 ml-12 mr-12 bg-[#f56556] m-1 rounded"><a className="text-white hover:text-black" href="/Donate">Donate</a></li>
                        <li className="p-2 ml-12 mr-12 bg-[#f56556] m-1 rounded"><a className="text-white hover:text-black" href="/DLogin">Doctor Login</a></li>
                        <li className="p-2 ml-12 mr-12 bg-[#f56556] m-1 rounded"><a className="text-white hover:text-black" href="/ULogin">User Login</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
