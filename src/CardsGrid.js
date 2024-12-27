import React from "react";
import staricon from './images/star-icon.png';
import starcolor from './images/star-color.png';

function CardsGrid({ data, favorites, toggleFavorite }) {
    return (
        <div className="cards-grid">
            {data.map((card, index) => {
                const isFavorited = favorites.includes(index);

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
                                {card.interests.map((interest, i) => (
                                    <React.Fragment key={i}>
                                        {interest}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                        <img 
                            src={isFavorited ? starcolor : staricon} //if isFavorited is true, then show star color image
                            alt="Favorite icon"
                            className="star-icon"
                            onClick={() => toggleFavorite(index)}
                        />
                    </article>
                );
            })}
        </div>
    );
}

export default CardsGrid;