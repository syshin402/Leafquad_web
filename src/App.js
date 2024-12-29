import './App.css';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import CardsGrid from "./components/CardsGrid";
import Footer from "./components/Footer";
import searchicon from './images/search-icon.png';
import placeholder from './images/placeholder-profile.png';

import FriendsPage from "./pages/Friends";
import FriendForm from "./pages/FriendForm";
import FriendDetail from './pages/FriendDetail';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<FriendsPage />} />
        <Route path="/friends/create" element={<FriendForm />} />

        <Route path="/friends/:id" element={<FriendDetail />} />
        <Route path="/friends/:id/edit" element={<FriendForm />} />
        
      </Routes>
      {/*Footer*/}
      <Footer />
    </div>
  );
}

export default App;