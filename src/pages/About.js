import React from "react";
import '../App.css';
import aboutimage from "../images/about-image.png"
import { useNavigate } from 'react-router-dom';
function About() {
    const navigate = useNavigate();
    const handleStartClick = () => {
        navigate("/login");
    };  
    return (
      <div className="about-section">
        <div className="about-image-wrapper">
            <img
                src={aboutimage}
                alt="about"
                class="about-image"
            />
        </div>

        <div className="about-text-wrapper">
            <h1 className="about-title">A site that brings college students together</h1>
            <p className="about-subtitle">
            Our project aims to streamline the search for community, 
        helping students connect more easily with people who share 
        their interests, backgrounds, and senses of humor.
            </p>
            <div className="about-buttons">
                <button className="button-get-started" onClick={handleStartClick}>
                    Get started
                </button>
                <button className="button-contact-me">Contact Me</button>
            </div>
        </div>
      </div>
    );
}
export default About;