import React from "react";
import facebook from '../images/facebook-icon.png';
import instagram from '../images/instagram-icon.png';
import twitter from '../images/twitter-icon.png';
import '../App.css';

function Footer() {
    return (
        <footer className="site-footer">
        <p className="footer-text">Made by Sophie Shin</p>
        <div className="footer-icons">
            <img src={facebook} alt="Facebook Icon" />
            <img src={instagram} alt="Instagram Logo" />
            <img src={twitter} alt="Twitter Logo" />   
        </div>
        </footer>
    );
}

export default Footer;