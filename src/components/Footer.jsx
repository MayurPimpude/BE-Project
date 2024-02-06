import React from 'react';
import logo from '../assets/img/logo/logo.svg'; // Import your logo image here
import MaatriShakti from '../images/MaatriShakti.jpeg'; // Import your logo image here


const Footer = () => {
    return (
        <footer className="footer footer-style-4 footer-dark">
            <div className="container">
                <div className="widget-wrapper">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Logo */}
                        <div className="footer-widget">
                            <div className="logo flex flex-row">
                                <a href="#0"> <img src={MaatriShakti} alt="Logo"  className="rounded-full h-14 mx-3"/> </a>
                                <p className="my-3 decoration-4">Maatri Shakthi</p>
                            </div>
                            
                            <ul className="socials">
                                <li> <a href="#0"> <i className="lni lni-facebook-filled"></i> </a> </li>
                                <li> <a href="#0"> <i className="lni lni-twitter-filled"></i> </a> </li>
                                <li> <a href="#0"> <i className="lni lni-instagram-filled"></i> </a> </li>
                                <li> <a href="#0"> <i className="lni lni-linkedin-original"></i> </a> </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-widget">
                            <h6>Quick Link</h6>
                            <ul className="links">
                                <li> <a href="#0">Home</a> </li>
                                <li> <a href="#0">About</a> </li>
                                <li> <a href="#0">Contact Us</a> </li>
                                <li> <a href="#0">Donate</a> </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-widget">
                            <h6>Services</h6>
                            <ul className="links">
                                <li> <a href="#0">Prediction-CSV</a> </li>
                                <li> <a href="#0">Prediction-Values</a> </li>
                                <li> <a href="#0">Dashboard</a> </li>
                            </ul>
                        </div>

                        {/* Download App */}
                        <div className="footer-widget">
                            <h6>Research Papers</h6>
                            <ul className="download-app">
                                <li>
                                    <a href="#0">
                                        <span className="icon"><i class="lni lni-book"></i></span>
                                        <span className="text">Research Paper <b>One</b> </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <span className="icon"><i class="lni lni-book"></i></span>
                                        <span className="text">Research Paper <b>Two</b> </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="copyright-wrapper">
                    <p>Design and Developed by Deepak, Vemburaj, Mayur and Hermab</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
