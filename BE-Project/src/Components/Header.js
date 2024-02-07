import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import MaatriShakti from '../images/MaatriShakti.jpeg';
import '../Style/Header.css'

const Header = (props) => {
    const title = props.headerProps;
    return (
        <>
            <Navbar style={{backgroundColor: '#212529'}} expand="lg" variant="dark" className='nav'>
                <img className="rounded-circle  m-1" style={{ maxWidth: '5%', maxHeight: '5%' }} src={MaatriShakti} />
                <Navbar.Brand className="m-2" style={{ color: '#F0A2A4' }}>{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav style={{ color: '#0D6EFD' }} className="me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/ContactUS">ContactUS</Nav.Link>
                        {/* <Nav.Link href="/Implementation">Implementation</Nav.Link> */}
                    </Nav>

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <NavDropdown title="Register"  id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/dregister" className="text-center" >Doctor Register</NavDropdown.Item>
                                    <NavDropdown.Item href="/pregister" className="text-center">Patient Register</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Login"  id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/dlogin" className="text-center">Doctor Login</NavDropdown.Item>
                                    <NavDropdown.Item href="/plogin" className="text-center">Patient Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;


