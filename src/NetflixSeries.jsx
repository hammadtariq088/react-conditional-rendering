import React from 'react';
import Cards from './Cards';
import CardsData from "./CardsData";

const NetflixSeries = () => {
    return (
        <>
           <Cards
           key={CardsData[1].id}
           name={CardsData[1].name}
           title={CardsData[1].title}
           src={CardsData[1].src}
           link={CardsData[1].link}
           />

        </>
    )
}

export default NetflixSeries;
