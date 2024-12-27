import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import CardsGrid from "./CardsGrid";
import Footer from "./Footer";
import searchicon from './images/search-icon.png';
import placeholder from './images/placeholder-profile.png';

const def_name = "Student Name";
const def_major = "Computer Science";
const def_hobby1 = "hobby 1";
const def_hobby2 = "hobby 2";
const def_genre = "move genre 1";
const def_interest1 = "interest 1";
const def_interest2 = "interest 2";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cardsData] = useState([
    {
      name: def_name,
      major: def_major,
      interests: [def_hobby1, def_hobby2, def_interest1, def_interest2, def_genre],
      imgSrc: placeholder,
    },
    {
      name: def_name,
      major: def_major,
      interests: [def_hobby1, def_hobby2, def_interest1, def_interest2, def_genre],
      imgSrc: placeholder,
    },
    {
      name: def_name,
      major: def_major,
      interests: [def_hobby1, def_hobby2, def_interest1, def_interest2, def_genre],
      imgSrc: placeholder,
    },
    {
      name: def_name,
      major: def_major,
      interests: [def_hobby1, def_hobby2, def_interest1, def_interest2, def_genre],
      imgSrc: placeholder,
    },
    {
      name: def_name,
      major: def_major,
      interests: [def_hobby1, def_hobby2, def_interest1, def_interest2, def_genre],
      imgSrc: placeholder,
    },
    {
      name: def_name,
      major: def_major,
      interests: [def_hobby1, def_hobby2, def_interest1, def_interest2, def_genre],
      imgSrc: placeholder,
    },
  ]);

  useEffect(() => {
    console.log("Favorites updated:", favorites); }, [favorites]);

    const toggleFavorite = (index) => {
      setFavorites((prev) => {
        if (prev.includes(index)) { // if card is already favorited remove it
          return prev.filter((i) => i !== index);
        }

        // if not, add
        return [...prev, index];
      });
    };
  return (
    <div className="App">
      <NavBar /> 
      {/*function defined in other fiel*/}
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

      </div>

      {/*Main content*/}
      <main>
        <section className="results-sections">
          <h2 id="resutls-heading" className="results-title">Results</h2>
          <CardsGrid
            data={cardsData}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </section>
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
}

export default App;
