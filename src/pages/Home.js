import React from "react";
import '../App.css';
import homeimage from "../images/home_image.png"

function Home() {
  
    return (
      <div className="Home">
        <div className="home-content">
          <img
            src={homeimage}
            alt="home-image"
            className="home-image"
          />
  <div class="home-text-container">
          <h1 className="home-bigtext">
            The perfect site for making university friends
          </h1>
  
          <p className="home-smalltext">
            Find your quad of friends
          </p>
          </div>
        </div>
      </div>
    );
}
export default Home;