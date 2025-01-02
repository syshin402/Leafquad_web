import React, { useState } from "react"
import logo from '../images/logo.png';
import profileblock from '../images/login_image.png';
import arrow from '../images/Arrow.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

function NavBar(){
    const { isLoggedIn, setIsLoggedIn } = useAuth(); 
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
        //setIsLoggedIn((prev) => !prev);
    };  // this is to change the login button to profile block
    const handleLogout = () => {
        setIsLoggedIn(false);
        setMenuOpen(false);
    // if you store a token, setToken("") as well
    };
    const handleProfileClick = () => {
        setMenuOpen((prev) => !prev);
    }
    return (
        <header className="site-header">
            <div className="header-content">

                <div className="logo-section">
                    <img src={logo}
                    alt="LeafQuad Logo"
                    className="logo-img" />
                    <h1 className="site-title">LeadQuad</h1>
                </div>

                {/* Navigation links */}
                <div className="nav-and-login">
                <nav className="main-nav">
                    <ul className="nav-links">
                        <li><Link to="/Home">Home</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><Link to="/" className="current">Friends</Link></li>
                    </ul>
                </nav>
            {!isLoggedIn ?  ( 
                <div className="login-button" onClick={handleLoginClick}>
                    <div className="login-button-text">
                        Login
                    </div>
                </div>    
            )  : (
                <div className="profile-block" onClick={handleProfileClick}>
                    <img
                        className="profile-block-image"
                        src={profileblock}
                        alt="User avatar"
                    />
                    <div className="profile-block-text">
                        <div className="profile-block-name">Sophie Shin</div>
                        <div className="profile-block-downarrow">
                            <img   
                                className="profile-block-downarrow"
                                src={arrow}
                                alt="arrow" />
                        </div>
                    </div>
                

                    {menuOpen && (
                        <div className="profile-drowpdown-menu">
                            <ul>
                                <li>Edit</li>
                                <li class="dropdown-divider"></li>
                                <li>Settings</li>
                                <li class="dropdown-divider"></li>
                                <li class="dropdown-logout" onClick={handleLogout}>
                                Logout
                            </li>
                            </ul>
                        </div>
                    )}
                </div>
            )}
            </div>
        </div>
    </header>
    );
}

export default NavBar;