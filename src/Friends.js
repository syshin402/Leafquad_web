import React, { useState, useEffect } from "react";
import CardsGrid from "./CardsGrid";
import { useLocation } from "react-router-dom";

import searchicon from './images/search-icon.png';
import placeholder from './images/placeholder-profile.png';
import { getAllUsers } from "./api/users";
import { useNavigate } from "react-router-dom";

function Friends() {
    const [users, setUsers] = useState([]);
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        
        fetchUsers();
      }, [location]);

    async function fetchUsers() {
        setLoading(true);
        try {
        const data = await getAllUsers();
        setUsers(data);
        setError("");
        }
        catch (error) {
            setError("Failed to load users");
        }
        finally {
            setLoading(false);            
        }
    }
    
    
    const toggleFavorite = (index) => {
        setFavorites((prev) => {
        if (prev.includes(index)) { // if card is already favorited remove it
            return prev.filter((i) => i !== index);
        }

        // if not, add
        return [...prev, index];
        });
    };

    if (loading) {
        return (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <p>Loading users...</p>
            </div>
        );
        
    }
    if (error) {
        return (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <p>{error}</p>
            </div>
        );
    }

    const combineUserdata = users.map((user, index) => ({
        name: `${user.firstName} ${user.lastName}`,
        major: user.major || "Unknown Major",
        interests: [
            user.bio || "No bio provided",
            user.email || "No email",
            `Graduation Year: ${user.graduationYear || "Unknown graduation year"}`,
          ],
          imgSrc: user.profilePicture || placeholder,
          _index: index, // store the index for toggling favorites
        }));

    return (
        <>
     
        <div className="search-bar">
          <img
            src={searchicon}
            alt="Search Icon"
            className="search-icon"
          />
          <label htmlFor="search" className="visually-hidden">Search</label>
          <input 
            type="text"
            id="search"
            name="search"
            placeholder="Search"
          />

            <button
            className="button create-button"
            onClick={() => navigate("/friends/create")}
            >
            Create User
            </button>
        </div>
  
        {/*Main content*/}
        <main>
          <section className="results-sections">
            <h2 id="resutls-heading" className="results-title">Results</h2>
            <CardsGrid
              data={combineUserdata}
              favorites={favorites}
              toggleFavorite={(idx) => toggleFavorite(idx)}
            />
          </section>
        </main>
        
        {/*Footer*/}
    
        </>
    );
}

export default Friends;