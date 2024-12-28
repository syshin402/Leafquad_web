import React from "react";
import staricon from './images/star-icon.png';
import starcolor from './images/star-color.png';

function CardsGrid({ data, favorites, toggleFavorite }) {
    return (
        <div className="cards-grid">
            {data.map((card, index) => {
                const cardIndex = card._index ?? index;
                const isFavorited = favorites.includes(cardIndex);

                return (
                    <article className="card" key={index}>
                        <img   
                            src={card.imgSrc}
                            alt="Profile placeholder"
                            className="card-image"
                        />
                        <div className="card-content">
                            <h3 className="card-name">{card.name}</h3>
                            <p className="card-major">Major: {card.major}</p>
                            <p className="card-interests">
                                {card.interests.join(", ")}
                            </p>
                        </div>
                        <img 
                            src={isFavorited ? starcolor : staricon} //if isFavorited is true, then show star color image
                            alt="Favorite icon"
                            className="star-icon"
                            onClick={() => toggleFavorite(cardIndex)}
                        />
                    </article>
                );
            })}
        </div>
    );
}

export default CardsGrid;