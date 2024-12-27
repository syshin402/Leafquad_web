import React, { useState } from "react"
import logo from './images/logo.png';
import profileblock from './images/login_image.png';
import arrow from './images/Arrow.png';

function NavBar(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn((prev) => !prev);
    };
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#" className="current">Friends</a></li>
                    </ul>
                </nav>
            {!isLoggedIn ?  (
                <div className="login-button" onClick={handleLoginClick}>
                    <div className="login-button-text">
                        Login
                    </div>
                </div>    
            )  : (
                <div className="profile-block" onClick={handleLoginClick}>
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
                </div>
            )}
            </div>
        </div>
    </header>
    );
}

export default NavBar;