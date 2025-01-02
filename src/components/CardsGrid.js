import React from "react";
import {useMemo} from 'react';

import GenericCard from "./GenericCard";

function CardsGrid({ data, favorites, toggleFavorite }) {

    const cardItems = useMemo(() => {
        let result = data.map((item, index) => {
            const cardIndex = item._index ?? index;;
            const isFavorited = favorites.includes(cardIndex); 

            return (
                <GenericCard
                    key={cardIndex}
                    title={item.name}
                    imageSrc={item.imgSrc}
                    body= {
                        <>
                            <p>Major: {item.major}</p>
                            <p>{item.interests.join(", ")}</p>
                        </>
                    }
                    onClickFavorite={() => toggleFavorite(cardIndex)}
                    isFavorited={isFavorited}
                    u={item}
                    />
                );
            }); // end of data.map function

            return result;
        }, [data, favorites, toggleFavorite]); // end of useMemo input 
        

        return <div className="cards-grid">{cardItems}</div>
}


export default CardsGrid;