import './App.css';
import { Routes, Route } from "react-router-dom";
import React from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


import FriendsPage from "./pages/Friends";
import FriendForm from "./pages/FriendForm";
import FriendDetail from './pages/FriendDetail';
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage"; 
import EditFriend from "./pages/FriendEdit";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<FriendsPage />} />
        <Route path="/friends/create" element={<FriendForm />} />

        <Route path="/friends/:id" element={<FriendDetail />} />
        <Route path="/friends/:id/edit" element={<FriendForm />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/friends/:id/edit" element={<EditFriend />} />
      </Routes>
      {/*Footer*/}
      <Footer />
    </div>
  );
}

export default App;