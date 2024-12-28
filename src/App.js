import './App.css';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import NavBar from "./NavBar";
import CardsGrid from "./CardsGrid";
import Footer from "./Footer";
import searchicon from './images/search-icon.png';
import placeholder from './images/placeholder-profile.png';

import FriendsPage from "./Friends";
import FriendForm from "./FriendForm";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Routes>
        <Route path="/" element={<FriendsPage />} />
        <Route path="/friends/create" element={<FriendForm />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      {/*Footer*/}
      <Footer />
    </div>
  );
}

export default App;