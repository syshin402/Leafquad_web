import React from "react";
import staricon from '../images/star-icon.png';
import starcolor from '../images/star-color.png';


function GenericCard({title, imageSrc, body, onClickFavorite, isFavorited}) {
    let imageElement = null;
    if (imageSrc) {
        imageElement = (
            <img 
                src={imageSrc}
                alt={title || "Generic card"}
                className="card-image"
            />
        );
    }

    let favoriteElement = null; 
    if (onClickFavorite) {
        favoriteElement = (
            <img    
                src={isFavorited ? {starcolor} : {staricon}}
                alt="Favorite icon"
                className="star-icon"
                onClick={onClickFavorite}
            />
        );
    }

    return (
        <div className="card">
            {imageElement}
            <div className="card-content">
                <h3 className="card-name">{title}</h3>
                <p className="card-interests">{body}</p>
            </div>
            {favoriteElement}
        </div>
    );
}

export default GenericCard;