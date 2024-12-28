import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import './App.css';
import homeimage from "./images/home_image.png"

function Home() {
    return (
      <div className="Home">
        <div className="home-content">
          <img
            src={homeimage}
            alt="home-image"
            className="home-image"
          />
  
          <h1 className="home-bigtext">
            The perfect site for making university friends
          </h1>
  
          <p className="home-smalltext">
            Find your quad of friends
          </p>
        </div>
      </div>
    );
  }
export default Home;