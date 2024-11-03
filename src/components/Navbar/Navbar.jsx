// Navbar.js
import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types'; 
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import { Link } from 'react-router-dom';
import profile_icon from '../../assets/jack.png';

const Navbar = ({ setSidebar, setSearchTerm }) => { // Add setSearchTerm prop
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img 
                    className='menu-icon' 
                    onClick={() => setSidebar(prev => !prev)} // Toggle sidebar
                    src={menu_icon} 
                    alt='Menu' 
                />
                <Link to="/"> <img className='logo' src={logo} alt='Logo' /></Link>
            </div>

            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>
                    <input 
                        type='text' 
                        placeholder='Search' 
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
                    />
                    <img src={search_icon} alt='Search' />
                </div>
            </div>

            <div className='nav-right flex-div'>
                <img src={upload_icon} alt='Upload' />
                <img src={notification_icon} alt='Notifications' />
                <img src={more_icon} alt='More Options' />
                <img src={profile_icon} alt='Profile' className='user-icon' />
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    setSidebar: PropTypes.func.isRequired,
    setSearchTerm: PropTypes.func.isRequired, 
};

export default Navbar;
