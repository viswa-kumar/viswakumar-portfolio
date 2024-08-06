import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { themeContext } from '../../context';

const Navbar = () => {
    const navRef = useRef();
    const [navOpen, setNavOpen] = useState(false);

    const showNavbar = () => {
        setNavOpen(!navOpen);
        navRef.current.classList.toggle('responsive_nav');
    };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="n-wrapper">
            <div className={`overlay ${navOpen ? 'show' : ''}`} ></div>

            <div className="n-left">
                <div className="n-name">
                    VK
                </div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list" ref={navRef} style={{ backgroundColor: darkMode ? 'var(--black)' : '' }}>
                    <ul><div className='ulContainer'>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li className='l1' onClick={showNavbar}>Home</li>
                        </Link>
                        <Link spy={true} to='About' smooth={true} >
                            <li className='l2' onClick={showNavbar}>About</li>
                        </Link>
                        <Link spy={true} to='Projects' smooth={true} >
                            <li className='l3' onClick={showNavbar}>Projects</li>
                        </Link>
                    </div>
                    </ul>

                    <button onClick={showNavbar} className='nav-close-btn'><FaTimes /></button>
                </div>
                <button className='button n-button'>
                    <Link spy={true} to='Contact' smooth={true} >
                        Contact
                    </Link>
                </button>
                <button className='nav-btn' onClick={showNavbar}><FaBars /></button>
            </div>
        </div >
    );
};

export default Navbar;
