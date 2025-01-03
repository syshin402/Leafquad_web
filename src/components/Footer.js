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
            <button><img src={facebook} alt="Facebook Icon" /></button>
            <button><img src={instagram} alt="Instagram Logo" /></button>
            <button><img src={twitter} alt="Twitter Logo" /></button>     
        </div>
        </footer>
    );
}

export default Footer;