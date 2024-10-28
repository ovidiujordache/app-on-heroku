import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../assets/logomd.png'; 

import { useCart } from '../hooks/useCart';
import {useUserContext} from '../hooks/useUserContext'
import Cart from './Cart'


import './header.css'

const Header = () => {
    const navigate = useNavigate(); 
    const {user,email,logout} = useUserContext();  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const { count } = useCart();


    const handleLogout = (e) => {
        e.preventDefault(); 
        logout(); 
       navigate('/')
    };
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Snap Deals Logo" className="logo-image" />
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/buy">Buy</Link></li>
                    <li><Link to="/sell">Sell</Link></li>

            
              {user ? (
        <>
            <li><Link to="/accountsettings">Settings</Link></li>
             <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
         </>
       
        ) : (
          <li><Link to="/account">Login or Sign Up</Link></li>
          )}
                    <li><Link to="/watching">Watching</Link></li>
                    <li><Link to="/cart">                                       

          <i className="bi bi-cart cart-icon"></i>
          <span className="cart-count">{count}</span>

        </Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
