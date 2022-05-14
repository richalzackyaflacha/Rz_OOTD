import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Add asset
import Logo from "../assets/icon/logo.png";

// Add CSS
import "../style/components/navbar.css";

// Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


const Navbar = (props) => {
    
    // Change navbar color 
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor)

    // Icon dark mode
    const setTheme = props.theme;

    // Button close nav
    const navigate = useNavigate();

    return (
        // Navbar
        <div>
            {/* Desktop, Tablet Navbar */}
            <div className={color ? "navbar navbar-bg" : 'navbar'}>
                {/* Logo */}
                <div className="rz-logo">
                    <img src={Logo} alt="Logo" />
                </div>


                {/* Menu Bar */}
                <div className="btn-menu-bar">
                    <a href="#navigation"><FontAwesomeIcon icon={faBars} /></a>
                </div>
                
                
                {/* Navigation */}
                <div className="navigation">
                    {/* Menu Navigation */}
                    <nav>
                        <li>
                            <NavLink exact ClassName="active" to='/'>Beranda</NavLink>
                        </li>
                        <li>
                            <NavLink ClassName="active" to='/tentang'>Tentang</NavLink>
                        </li>
                        <li>
                            <NavLink to='/style'>Style</NavLink>
                        </li>
                        <li>
                            <NavLink to='/galeri'>Galeri</NavLink>
                        </li>
                    </nav>


                    {/* Button Dark Mode */}
                    <div className="toggle-dm" title="Dark Mode">
                        <button onClick={props.setSwitchTheme}>
                            <FontAwesomeIcon icon={setTheme === 'light' ? faMoon : faSun} ClassName="btn-moon-sun" />
                        </button>
                    </div>
                </div>
            </div>


            {/* Mobile Navbar */}
            <div className="mobile-nav" id="navigation">
                {/* Close Button */}
                <div className="btn-back">
                    <a href="#"><FontAwesomeIcon icon={faXmark} /></a>
                </div>


                {/* Navigation */}
                <div className="mobile-menu-nav">
                    {/* Menu Navigation */}
                    <nav>
                        <NavLink exact ClassName="active" to='/'>
                            <li>Beranda</li>
                        </NavLink>
                        <NavLink ClassName="active" to='/tentang'>
                            <li>Tentang</li>
                        </NavLink>
                        <NavLink to='/style'>
                            <li>Style</li>
                        </NavLink>
                        <NavLink to='/galeri'>
                            <li>Galeri</li>
                        </NavLink>
                    </nav>


                    {/* Button Dark Mode */}
                    <div className="toggle-dm" title="Dark Mode">
                        <p>{setTheme === 'light' ? "Dark Mode" : "Light Mode"}</p>

                        <button onClick={props.setSwitchTheme}>
                            <FontAwesomeIcon icon={setTheme === 'light' ? faMoon : faSun} ClassName="btn-moon-sun" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;